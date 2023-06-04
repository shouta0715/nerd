/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  GraphQLClient,
  RequestDocument,
  RequestOptions,
  Variables,
} from "graphql-request";
import { VariablesAndRequestHeaders } from "graphql-request/dist/types";
import { InternalServerError, UnauthorizedError } from "src/libs/error";
import { auth } from "src/libs/firebase";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;

class GraphQLRequest extends GraphQLClient {
  private retry = 0;

  constructor() {
    super(endpoint);
  }

  private async refreshToken() {
    const refreshToken = auth.currentUser?.refreshToken;
    const data = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
      }
    ).then((r) => {
      return r.text();
    });

    return JSON.parse(data);
  }

  override async request<T = any, V extends Variables = Variables>(
    document: RequestDocument | TypedDocumentNode<T, V> | RequestOptions,
    ...variablesAndRequestHeaders: VariablesAndRequestHeaders<V>
  ): Promise<T> {
    try {
      return await super.request(
        document as string,
        ...variablesAndRequestHeaders
      );
    } catch (error: any) {
      if (JSON.stringify(error).includes("Could not verify JWT: JWTExpired")) {
        if (this.retry < 1) {
          const data = await this.refreshToken();
          if (data.message === "ok") {
            this.setHeader("Authorization", `Bearer ${data.id_token}`);
            this.retry += 1;

            return await super.request(
              document as string,
              ...variablesAndRequestHeaders
            );
          }

          throw new UnauthorizedError();
        }

        return await super.request(
          document as string,
          ...variablesAndRequestHeaders
        );
      }

      if (error.message === "Network request failed") {
        throw new InternalServerError();
      }

      throw error;
    } finally {
      this.retry = 0;
    }
  }
}

export const client = new GraphQLRequest();
