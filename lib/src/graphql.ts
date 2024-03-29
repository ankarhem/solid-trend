import type {
  ResultOf,
  TypedDocumentNode,
  VariablesOf,
} from '@graphql-typed-document-node/core';
import { print } from 'graphql';

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export interface GqlResponse<TData> {
  data?: TData;
  errors?: Error[];
}

export type TypedResponse<TData> = Promise<
  Omit<Response, 'json'> & {
    json: () => Promise<GqlResponse<ResultOf<TData>>>;
  }
>;

export async function gqlRequest<
  TDocument extends TypedDocumentNode<any, any>
>({
  endpoint,
  headers: headersInit,
  query,
  variables,
}: {
  endpoint: string;
  headers?: HeadersInit;
  query: TDocument;
  variables?: VariablesOf<TDocument> extends Exact<{
    [key: string]: never;
  }>
    ? undefined
    : VariablesOf<TDocument>;
}): TypedResponse<TDocument> {
  const headers = new Headers(headersInit);
  if (!headers.has('content-type')) {
    headers.set('content-type', 'application/json');
  }

  return fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: print(query),
      variables: variables,
    }),
  });
}
