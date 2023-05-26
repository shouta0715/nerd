import * as Types from '../../types/graphql';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
export type CommentFragmentFragment = { __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } };

export type GetCommentsEpisodeQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid']['input'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
  limit: Types.Scalars['Int']['input'];
  order_by?: Types.InputMaybe<Array<Types.Comments_Order_By> | Types.Comments_Order_By>;
}>;


export type GetCommentsEpisodeQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetCommentsEpisodeByLikesQueryVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid']['input'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
  likes_cursor?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  limit: Types.Scalars['Int']['input'];
  order_by?: Types.InputMaybe<Array<Types.Comments_Order_By> | Types.Comments_Order_By>;
}>;


export type GetCommentsEpisodeByLikesQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetCommentsWorkQueryVariables = Types.Exact<{
  work_id: Types.Scalars['Int']['input'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
  limit: Types.Scalars['Int']['input'];
  order_by?: Types.InputMaybe<Array<Types.Comments_Order_By> | Types.Comments_Order_By>;
}>;


export type GetCommentsWorkQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetCommentsWorkByLikesQueryVariables = Types.Exact<{
  work_id: Types.Scalars['Int']['input'];
  cursor?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
  likes_cursor?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  limit: Types.Scalars['Int']['input'];
  order_by?: Types.InputMaybe<Array<Types.Comments_Order_By> | Types.Comments_Order_By>;
}>;


export type GetCommentsWorkByLikesQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetRepliesQueryVariables = Types.Exact<{
  _reply_to: Types.Scalars['uuid']['input'];
  cursor: Types.Scalars['timestamptz']['input'];
  reply_limit: Types.Scalars['Int']['input'];
}>;


export type GetRepliesQuery = { __typename?: 'query_root', replies: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_to?: any | null, replied_to_commenter_name?: string | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, user_name: string, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type MutateEpisodeCommentMutationVariables = Types.Exact<{
  episode_id: Types.Scalars['uuid']['input'];
  content: Types.Scalars['String']['input'];
  reply_to?: Types.InputMaybe<Types.Scalars['uuid']['input']>;
  replied_to_commenter_name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  commenter_name: Types.Scalars['String']['input'];
}>;


export type MutateEpisodeCommentMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', id: any, content: string, reply_to?: any | null, replied_to_commenter_name?: string | null, episode_id?: any | null } | null };

export type MutateWorkCommentMutationVariables = Types.Exact<{
  work_id: Types.Scalars['Int']['input'];
  content: Types.Scalars['String']['input'];
  reply_to?: Types.InputMaybe<Types.Scalars['uuid']['input']>;
  replied_to_commenter_name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  commenter_name: Types.Scalars['String']['input'];
}>;


export type MutateWorkCommentMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', id: any, content: string, reply_to?: any | null, replied_to_commenter_name?: string | null, work_id?: number | null } | null };

export const CommentFragmentFragmentDoc = `
    fragment CommentFragment on comments {
  content
  work_id
  user_id
  id
  episode_id
  created_at
  commenter_name
  user {
    anonymous
    user_name
    id
  }
  reply_count
  is_like
  likes_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const GetCommentsEpisodeDocument = `
    query GetCommentsEpisode($episode_id: uuid!, $cursor: timestamptz, $limit: Int!, $order_by: [comments_order_by!]) {
  comments(
    where: {episode_id: {_eq: $episode_id}, created_at: {_lt: $cursor}, reply_to: {_is_null: true}}
    order_by: $order_by
    limit: $limit
  ) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;
export const useGetCommentsEpisodeQuery = <
      TData = GetCommentsEpisodeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsEpisodeQueryVariables,
      options?: UseQueryOptions<GetCommentsEpisodeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsEpisodeQuery, TError, TData>(
      ['GetCommentsEpisode', variables],
      fetcher<GetCommentsEpisodeQuery, GetCommentsEpisodeQueryVariables>(client, GetCommentsEpisodeDocument, variables, headers),
      options
    );
useGetCommentsEpisodeQuery.fetcher = (client: GraphQLClient, variables: GetCommentsEpisodeQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentsEpisodeQuery, GetCommentsEpisodeQueryVariables>(client, GetCommentsEpisodeDocument, variables, headers);
export const GetCommentsEpisodeByLikesDocument = `
    query GetCommentsEpisodeByLikes($episode_id: uuid!, $cursor: timestamptz, $likes_cursor: Int, $limit: Int!, $order_by: [comments_order_by!]) {
  comments(
    where: {episode_id: {_eq: $episode_id}, _and: {created_at: {_lt: $cursor}, likes_aggregate: {count: {predicate: {_lte: $likes_cursor}}}}, reply_to: {_is_null: true}}
    order_by: $order_by
    limit: $limit
  ) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;
export const useGetCommentsEpisodeByLikesQuery = <
      TData = GetCommentsEpisodeByLikesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsEpisodeByLikesQueryVariables,
      options?: UseQueryOptions<GetCommentsEpisodeByLikesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsEpisodeByLikesQuery, TError, TData>(
      ['GetCommentsEpisodeByLikes', variables],
      fetcher<GetCommentsEpisodeByLikesQuery, GetCommentsEpisodeByLikesQueryVariables>(client, GetCommentsEpisodeByLikesDocument, variables, headers),
      options
    );
useGetCommentsEpisodeByLikesQuery.fetcher = (client: GraphQLClient, variables: GetCommentsEpisodeByLikesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentsEpisodeByLikesQuery, GetCommentsEpisodeByLikesQueryVariables>(client, GetCommentsEpisodeByLikesDocument, variables, headers);
export const GetCommentsWorkDocument = `
    query GetCommentsWork($work_id: Int!, $cursor: timestamptz, $limit: Int!, $order_by: [comments_order_by!]) {
  comments(
    where: {work_id: {_eq: $work_id}, created_at: {_lt: $cursor}, reply_to: {_is_null: true}}
    order_by: $order_by
    limit: $limit
  ) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;
export const useGetCommentsWorkQuery = <
      TData = GetCommentsWorkQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsWorkQueryVariables,
      options?: UseQueryOptions<GetCommentsWorkQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsWorkQuery, TError, TData>(
      ['GetCommentsWork', variables],
      fetcher<GetCommentsWorkQuery, GetCommentsWorkQueryVariables>(client, GetCommentsWorkDocument, variables, headers),
      options
    );
useGetCommentsWorkQuery.fetcher = (client: GraphQLClient, variables: GetCommentsWorkQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentsWorkQuery, GetCommentsWorkQueryVariables>(client, GetCommentsWorkDocument, variables, headers);
export const GetCommentsWorkByLikesDocument = `
    query GetCommentsWorkByLikes($work_id: Int!, $cursor: timestamptz, $likes_cursor: Int, $limit: Int!, $order_by: [comments_order_by!]) {
  comments(
    where: {work_id: {_eq: $work_id}, _and: {created_at: {_lt: $cursor}, likes_aggregate: {count: {predicate: {_lte: $likes_cursor}}}}, reply_to: {_is_null: true}}
    order_by: $order_by
    limit: $limit
  ) {
    ...CommentFragment
  }
}
    ${CommentFragmentFragmentDoc}`;
export const useGetCommentsWorkByLikesQuery = <
      TData = GetCommentsWorkByLikesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsWorkByLikesQueryVariables,
      options?: UseQueryOptions<GetCommentsWorkByLikesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsWorkByLikesQuery, TError, TData>(
      ['GetCommentsWorkByLikes', variables],
      fetcher<GetCommentsWorkByLikesQuery, GetCommentsWorkByLikesQueryVariables>(client, GetCommentsWorkByLikesDocument, variables, headers),
      options
    );
useGetCommentsWorkByLikesQuery.fetcher = (client: GraphQLClient, variables: GetCommentsWorkByLikesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentsWorkByLikesQuery, GetCommentsWorkByLikesQueryVariables>(client, GetCommentsWorkByLikesDocument, variables, headers);
export const GetRepliesDocument = `
    query GetReplies($_reply_to: uuid!, $cursor: timestamptz!, $reply_limit: Int!) {
  replies(
    args: {_reply_to: $_reply_to, cursor: $cursor, reply_limit: $reply_limit}
  ) {
    content
    work_id
    user_id
    id
    episode_id
    created_at
    commenter_name
    reply_to
    replied_to_commenter_name
    user {
      anonymous
      user_name
      id
    }
    is_like
    likes_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetRepliesQuery = <
      TData = GetRepliesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetRepliesQueryVariables,
      options?: UseQueryOptions<GetRepliesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRepliesQuery, TError, TData>(
      ['GetReplies', variables],
      fetcher<GetRepliesQuery, GetRepliesQueryVariables>(client, GetRepliesDocument, variables, headers),
      options
    );
useGetRepliesQuery.fetcher = (client: GraphQLClient, variables: GetRepliesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetRepliesQuery, GetRepliesQueryVariables>(client, GetRepliesDocument, variables, headers);
export const MutateEpisodeCommentDocument = `
    mutation MutateEpisodeComment($episode_id: uuid!, $content: String!, $reply_to: uuid, $replied_to_commenter_name: String, $commenter_name: String!) {
  insert_comments_one(
    object: {episode_id: $episode_id, content: $content, reply_to: $reply_to, replied_to_commenter_name: $replied_to_commenter_name, commenter_name: $commenter_name}
  ) {
    id
    content
    reply_to
    replied_to_commenter_name
    episode_id
  }
}
    `;
export const useMutateEpisodeCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<MutateEpisodeCommentMutation, TError, MutateEpisodeCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<MutateEpisodeCommentMutation, TError, MutateEpisodeCommentMutationVariables, TContext>(
      ['MutateEpisodeComment'],
      (variables?: MutateEpisodeCommentMutationVariables) => fetcher<MutateEpisodeCommentMutation, MutateEpisodeCommentMutationVariables>(client, MutateEpisodeCommentDocument, variables, headers)(),
      options
    );
useMutateEpisodeCommentMutation.fetcher = (client: GraphQLClient, variables: MutateEpisodeCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<MutateEpisodeCommentMutation, MutateEpisodeCommentMutationVariables>(client, MutateEpisodeCommentDocument, variables, headers);
export const MutateWorkCommentDocument = `
    mutation MutateWorkComment($work_id: Int!, $content: String!, $reply_to: uuid, $replied_to_commenter_name: String, $commenter_name: String!) {
  insert_comments_one(
    object: {work_id: $work_id, content: $content, reply_to: $reply_to, replied_to_commenter_name: $replied_to_commenter_name, commenter_name: $commenter_name}
  ) {
    id
    content
    reply_to
    replied_to_commenter_name
    work_id
  }
}
    `;
export const useMutateWorkCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<MutateWorkCommentMutation, TError, MutateWorkCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<MutateWorkCommentMutation, TError, MutateWorkCommentMutationVariables, TContext>(
      ['MutateWorkComment'],
      (variables?: MutateWorkCommentMutationVariables) => fetcher<MutateWorkCommentMutation, MutateWorkCommentMutationVariables>(client, MutateWorkCommentDocument, variables, headers)(),
      options
    );
useMutateWorkCommentMutation.fetcher = (client: GraphQLClient, variables: MutateWorkCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<MutateWorkCommentMutation, MutateWorkCommentMutationVariables>(client, MutateWorkCommentDocument, variables, headers);