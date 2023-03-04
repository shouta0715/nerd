/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-return-await */
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
      console.log(error);
      if (JSON.stringify(error).includes("Could not verify JWT: JWTExpired")) {
        const data = await this.refreshToken();
        if (data.message === "ok") {
          console.log("refreshToken");
          this.setHeader("Authorization", `Bearer ${data.idToken}`);

          return await super.request(
            document as string,
            ...variablesAndRequestHeaders
          );
        }
      }

      throw error;
    }
  }
}

export const client = new GraphQLRequest();
