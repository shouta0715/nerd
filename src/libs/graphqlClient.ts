/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient, Variables } from "graphql-request";
import {
  RequestDocument,
  RequestOptions,
  VariablesAndRequestHeaders,
} from "graphql-request/dist/types";
import { RefreshTokenResult } from "src/types/dataType";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;

class GraphQLRequest extends GraphQLClient {
  private retry = 0;

  constructor() {
    super(endpoint);
  }

  private async refreshToken() {
    const data: RefreshTokenResult = await fetch("/api/auth/refreshToken", {
      method: "POST",
      credentials: "include",
    }).then((res) => res.json());

    return data;
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
            this.setHeader("Authorization", `Bearer ${data.idToken}`);
            this.retry += 1;

            return await super.request(
              document as string,
              ...variablesAndRequestHeaders
            );
          }
        }

        return await super.request(
          document as string,
          ...variablesAndRequestHeaders
        );
      }

      throw error;
    } finally {
      this.retry = 0;
    }
  }
}

export const client = new GraphQLRequest();
