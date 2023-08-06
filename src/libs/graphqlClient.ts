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

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;

type RefreshToken = {
  access_token: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
};

class GraphQLRequest extends GraphQLClient {
  private retry = 0;

  constructor() {
    super(endpoint);
  }

  private async refreshToken() {
    const refreshToken = await import("src/libs/firebase").then(
      (r) => r.auth.currentUser?.refreshToken
    );

    if (!refreshToken) throw new UnauthorizedError();

    const data = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
      }
    );

    return data.json() as Promise<RefreshToken>;
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

          if (data.access_token) {
            this.setHeader("authorization", `Bearer ${data.access_token}`);
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
