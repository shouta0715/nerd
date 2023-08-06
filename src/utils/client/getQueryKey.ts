import { TypedDocumentNode } from "@graphql-typed-document-node/core";

type QueryKey<TVariables> = TVariables extends Record<string, never>
  ? [string]
  : [string, TVariables];

type QueryKeyOptions = {
  all: boolean;
};

type QueryKeyProps<TResult, TVariables> = {
  document: TypedDocumentNode<TResult, TVariables>;
  variables: TVariables extends Record<string, never> ? undefined : TVariables;
  options?: QueryKeyOptions;
};

export function getQueryKey<TResult, TVariables>({
  document,
  variables,
  options,
}: QueryKeyProps<TResult, TVariables>): QueryKey<TVariables> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queryName = (document.definitions[0] as any).name.value as string;

  if (options?.all) return [queryName] as QueryKey<TVariables>;

  const queryKey = variables ? [queryName, variables] : [queryName];

  return queryKey as QueryKey<TVariables>;
}
