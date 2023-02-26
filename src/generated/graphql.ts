import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "chat_comments" */
export type Chat_Comments = {
  __typename?: 'chat_comments';
  anonymous: Scalars['Boolean'];
  commenter_name: Scalars['String'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  episode?: Maybe<Episodes>;
  episode_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  time: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
  /** An object relationship */
  work?: Maybe<Works>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "chat_comments" */
export type Chat_Comments_Aggregate = {
  __typename?: 'chat_comments_aggregate';
  aggregate?: Maybe<Chat_Comments_Aggregate_Fields>;
  nodes: Array<Chat_Comments>;
};

export type Chat_Comments_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Chat_Comments_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Chat_Comments_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Chat_Comments_Aggregate_Bool_Exp_Count>;
};

export type Chat_Comments_Aggregate_Bool_Exp_Bool_And = {
  arguments: Chat_Comments_Select_Column_Chat_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Chat_Comments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Chat_Comments_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Chat_Comments_Select_Column_Chat_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Chat_Comments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Chat_Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Chat_Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat_comments" */
export type Chat_Comments_Aggregate_Fields = {
  __typename?: 'chat_comments_aggregate_fields';
  avg?: Maybe<Chat_Comments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chat_Comments_Max_Fields>;
  min?: Maybe<Chat_Comments_Min_Fields>;
  stddev?: Maybe<Chat_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Chat_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chat_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Chat_Comments_Sum_Fields>;
  var_pop?: Maybe<Chat_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Chat_Comments_Var_Samp_Fields>;
  variance?: Maybe<Chat_Comments_Variance_Fields>;
};


/** aggregate fields of "chat_comments" */
export type Chat_Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_comments" */
export type Chat_Comments_Aggregate_Order_By = {
  avg?: InputMaybe<Chat_Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Comments_Max_Order_By>;
  min?: InputMaybe<Chat_Comments_Min_Order_By>;
  stddev?: InputMaybe<Chat_Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chat_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chat_Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chat_Comments_Sum_Order_By>;
  var_pop?: InputMaybe<Chat_Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chat_Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<Chat_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chat_comments" */
export type Chat_Comments_Arr_Rel_Insert_Input = {
  data: Array<Chat_Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Chat_Comments_Avg_Fields = {
  __typename?: 'chat_comments_avg_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chat_comments" */
export type Chat_Comments_Avg_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chat_comments". All fields are combined with a logical 'AND'. */
export type Chat_Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Comments_Bool_Exp>>;
  _not?: InputMaybe<Chat_Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Comments_Bool_Exp>>;
  anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  commenter_name?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  episode?: InputMaybe<Episodes_Bool_Exp>;
  episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  time?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  work?: InputMaybe<Works_Bool_Exp>;
  work_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_comments" */
export enum Chat_Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatCommentsPkey = 'chat_comments_pkey'
}

/** input type for incrementing numeric columns in table "chat_comments" */
export type Chat_Comments_Inc_Input = {
  time?: InputMaybe<Scalars['Int']>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "chat_comments" */
export type Chat_Comments_Insert_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  commenter_name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  episode?: InputMaybe<Episodes_Obj_Rel_Insert_Input>;
  episode_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  time?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Chat_Comments_Max_Fields = {
  __typename?: 'chat_comments_max_fields';
  commenter_name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  episode_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  time?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "chat_comments" */
export type Chat_Comments_Max_Order_By = {
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Comments_Min_Fields = {
  __typename?: 'chat_comments_min_fields';
  commenter_name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  episode_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  time?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "chat_comments" */
export type Chat_Comments_Min_Order_By = {
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_comments" */
export type Chat_Comments_Mutation_Response = {
  __typename?: 'chat_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Comments>;
};

/** on_conflict condition type for table "chat_comments" */
export type Chat_Comments_On_Conflict = {
  constraint: Chat_Comments_Constraint;
  update_columns?: Array<Chat_Comments_Update_Column>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_comments". */
export type Chat_Comments_Order_By = {
  anonymous?: InputMaybe<Order_By>;
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode?: InputMaybe<Episodes_Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  work?: InputMaybe<Works_Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chat_comments */
export type Chat_Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_comments" */
export enum Chat_Comments_Select_Column {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  CommenterName = 'commenter_name',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  Id = 'id',
  /** column name */
  Time = 'time',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

/** select "chat_comments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "chat_comments" */
export enum Chat_Comments_Select_Column_Chat_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Anonymous = 'anonymous'
}

/** select "chat_comments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "chat_comments" */
export enum Chat_Comments_Select_Column_Chat_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Anonymous = 'anonymous'
}

/** input type for updating data in table "chat_comments" */
export type Chat_Comments_Set_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  commenter_name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  episode_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  time?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Chat_Comments_Stddev_Fields = {
  __typename?: 'chat_comments_stddev_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chat_comments" */
export type Chat_Comments_Stddev_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chat_Comments_Stddev_Pop_Fields = {
  __typename?: 'chat_comments_stddev_pop_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chat_comments" */
export type Chat_Comments_Stddev_Pop_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chat_Comments_Stddev_Samp_Fields = {
  __typename?: 'chat_comments_stddev_samp_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chat_comments" */
export type Chat_Comments_Stddev_Samp_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "chat_comments" */
export type Chat_Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Comments_Stream_Cursor_Value_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  commenter_name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  episode_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  time?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Chat_Comments_Sum_Fields = {
  __typename?: 'chat_comments_sum_fields';
  time?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chat_comments" */
export type Chat_Comments_Sum_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** update columns of table "chat_comments" */
export enum Chat_Comments_Update_Column {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  CommenterName = 'commenter_name',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  Id = 'id',
  /** column name */
  Time = 'time',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

export type Chat_Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chat_Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chat_Comments_Var_Pop_Fields = {
  __typename?: 'chat_comments_var_pop_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chat_comments" */
export type Chat_Comments_Var_Pop_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chat_Comments_Var_Samp_Fields = {
  __typename?: 'chat_comments_var_samp_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chat_comments" */
export type Chat_Comments_Var_Samp_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chat_Comments_Variance_Fields = {
  __typename?: 'chat_comments_variance_fields';
  time?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chat_comments" */
export type Chat_Comments_Variance_Order_By = {
  time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "episode_likes" */
export type Episode_Likes = {
  __typename?: 'episode_likes';
  /** An object relationship */
  episode: Episodes;
  episode_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "episode_likes" */
export type Episode_Likes_Aggregate = {
  __typename?: 'episode_likes_aggregate';
  aggregate?: Maybe<Episode_Likes_Aggregate_Fields>;
  nodes: Array<Episode_Likes>;
};

export type Episode_Likes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Episode_Likes_Aggregate_Bool_Exp_Count>;
};

export type Episode_Likes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Episode_Likes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "episode_likes" */
export type Episode_Likes_Aggregate_Fields = {
  __typename?: 'episode_likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Episode_Likes_Max_Fields>;
  min?: Maybe<Episode_Likes_Min_Fields>;
};


/** aggregate fields of "episode_likes" */
export type Episode_Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "episode_likes" */
export type Episode_Likes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Episode_Likes_Max_Order_By>;
  min?: InputMaybe<Episode_Likes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "episode_likes" */
export type Episode_Likes_Arr_Rel_Insert_Input = {
  data: Array<Episode_Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Episode_Likes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "episode_likes". All fields are combined with a logical 'AND'. */
export type Episode_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Episode_Likes_Bool_Exp>>;
  _not?: InputMaybe<Episode_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Episode_Likes_Bool_Exp>>;
  episode?: InputMaybe<Episodes_Bool_Exp>;
  episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "episode_likes" */
export enum Episode_Likes_Constraint {
  /** unique or primary key constraint on columns "user_id", "episode_id" */
  EpisodeLikesPkey = 'episode_likes_pkey'
}

/** input type for inserting data into table "episode_likes" */
export type Episode_Likes_Insert_Input = {
  episode?: InputMaybe<Episodes_Obj_Rel_Insert_Input>;
  episode_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Episode_Likes_Max_Fields = {
  __typename?: 'episode_likes_max_fields';
  episode_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "episode_likes" */
export type Episode_Likes_Max_Order_By = {
  episode_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Episode_Likes_Min_Fields = {
  __typename?: 'episode_likes_min_fields';
  episode_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "episode_likes" */
export type Episode_Likes_Min_Order_By = {
  episode_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "episode_likes" */
export type Episode_Likes_Mutation_Response = {
  __typename?: 'episode_likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Episode_Likes>;
};

/** on_conflict condition type for table "episode_likes" */
export type Episode_Likes_On_Conflict = {
  constraint: Episode_Likes_Constraint;
  update_columns?: Array<Episode_Likes_Update_Column>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "episode_likes". */
export type Episode_Likes_Order_By = {
  episode?: InputMaybe<Episodes_Order_By>;
  episode_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: episode_likes */
export type Episode_Likes_Pk_Columns_Input = {
  episode_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "episode_likes" */
export enum Episode_Likes_Select_Column {
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "episode_likes" */
export type Episode_Likes_Set_Input = {
  episode_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "episode_likes" */
export type Episode_Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Episode_Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Episode_Likes_Stream_Cursor_Value_Input = {
  episode_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "episode_likes" */
export enum Episode_Likes_Update_Column {
  /** column name */
  EpisodeId = 'episode_id',
  /** column name */
  UserId = 'user_id'
}

export type Episode_Likes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Episode_Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Episode_Likes_Bool_Exp;
};

/** columns and relationships of "episodes" */
export type Episodes = {
  __typename?: 'episodes';
  /** An array relationship */
  chat_comments: Array<Chat_Comments>;
  /** An aggregate relationship */
  chat_comments_aggregate: Chat_Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  end_time?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  episode_likes: Array<Episode_Likes>;
  /** An aggregate relationship */
  episode_likes_aggregate: Episode_Likes_Aggregate;
  has_next_episode: Scalars['Boolean'];
  has_prev_episode: Scalars['Boolean'];
  id: Scalars['uuid'];
  next_episode_id?: Maybe<Scalars['uuid']>;
  number: Scalars['Int'];
  prev_episode_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamp']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['Int'];
};


/** columns and relationships of "episodes" */
export type EpisodesChat_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


/** columns and relationships of "episodes" */
export type EpisodesChat_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


/** columns and relationships of "episodes" */
export type EpisodesEpisode_LikesArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


/** columns and relationships of "episodes" */
export type EpisodesEpisode_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};

/** aggregated selection of "episodes" */
export type Episodes_Aggregate = {
  __typename?: 'episodes_aggregate';
  aggregate?: Maybe<Episodes_Aggregate_Fields>;
  nodes: Array<Episodes>;
};

export type Episodes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Episodes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Episodes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Episodes_Aggregate_Bool_Exp_Count>;
};

export type Episodes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Episodes_Select_Column_Episodes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Episodes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Episodes_Select_Column_Episodes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Episodes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Episodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "episodes" */
export type Episodes_Aggregate_Fields = {
  __typename?: 'episodes_aggregate_fields';
  avg?: Maybe<Episodes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Episodes_Max_Fields>;
  min?: Maybe<Episodes_Min_Fields>;
  stddev?: Maybe<Episodes_Stddev_Fields>;
  stddev_pop?: Maybe<Episodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Episodes_Stddev_Samp_Fields>;
  sum?: Maybe<Episodes_Sum_Fields>;
  var_pop?: Maybe<Episodes_Var_Pop_Fields>;
  var_samp?: Maybe<Episodes_Var_Samp_Fields>;
  variance?: Maybe<Episodes_Variance_Fields>;
};


/** aggregate fields of "episodes" */
export type Episodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Episodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "episodes" */
export type Episodes_Aggregate_Order_By = {
  avg?: InputMaybe<Episodes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Episodes_Max_Order_By>;
  min?: InputMaybe<Episodes_Min_Order_By>;
  stddev?: InputMaybe<Episodes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Episodes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Episodes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Episodes_Sum_Order_By>;
  var_pop?: InputMaybe<Episodes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Episodes_Var_Samp_Order_By>;
  variance?: InputMaybe<Episodes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "episodes" */
export type Episodes_Arr_Rel_Insert_Input = {
  data: Array<Episodes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Episodes_On_Conflict>;
};

/** aggregate avg on columns */
export type Episodes_Avg_Fields = {
  __typename?: 'episodes_avg_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "episodes" */
export type Episodes_Avg_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "episodes". All fields are combined with a logical 'AND'. */
export type Episodes_Bool_Exp = {
  _and?: InputMaybe<Array<Episodes_Bool_Exp>>;
  _not?: InputMaybe<Episodes_Bool_Exp>;
  _or?: InputMaybe<Array<Episodes_Bool_Exp>>;
  chat_comments?: InputMaybe<Chat_Comments_Bool_Exp>;
  chat_comments_aggregate?: InputMaybe<Chat_Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  episode_likes?: InputMaybe<Episode_Likes_Bool_Exp>;
  episode_likes_aggregate?: InputMaybe<Episode_Likes_Aggregate_Bool_Exp>;
  has_next_episode?: InputMaybe<Boolean_Comparison_Exp>;
  has_prev_episode?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  next_episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  number?: InputMaybe<Int_Comparison_Exp>;
  prev_episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  work?: InputMaybe<Works_Bool_Exp>;
  work_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "episodes" */
export enum Episodes_Constraint {
  /** unique or primary key constraint on columns "id" */
  EpisodesPkey = 'episodes_pkey',
  /** unique or primary key constraint on columns "number", "work_id" */
  EpisodesWorkIdNumberKey = 'episodes_work_id_number_key'
}

/** input type for incrementing numeric columns in table "episodes" */
export type Episodes_Inc_Input = {
  number?: InputMaybe<Scalars['Int']>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "episodes" */
export type Episodes_Insert_Input = {
  chat_comments?: InputMaybe<Chat_Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  episode_likes?: InputMaybe<Episode_Likes_Arr_Rel_Insert_Input>;
  has_next_episode?: InputMaybe<Scalars['Boolean']>;
  has_prev_episode?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  next_episode_id?: InputMaybe<Scalars['uuid']>;
  number?: InputMaybe<Scalars['Int']>;
  prev_episode_id?: InputMaybe<Scalars['uuid']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Episodes_Max_Fields = {
  __typename?: 'episodes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  next_episode_id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  prev_episode_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "episodes" */
export type Episodes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_episode_id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  prev_episode_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Episodes_Min_Fields = {
  __typename?: 'episodes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  next_episode_id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  prev_episode_id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "episodes" */
export type Episodes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_episode_id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  prev_episode_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "episodes" */
export type Episodes_Mutation_Response = {
  __typename?: 'episodes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Episodes>;
};

/** input type for inserting object relation for remote table "episodes" */
export type Episodes_Obj_Rel_Insert_Input = {
  data: Episodes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Episodes_On_Conflict>;
};

/** on_conflict condition type for table "episodes" */
export type Episodes_On_Conflict = {
  constraint: Episodes_Constraint;
  update_columns?: Array<Episodes_Update_Column>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};

/** Ordering options when selecting data from "episodes". */
export type Episodes_Order_By = {
  chat_comments_aggregate?: InputMaybe<Chat_Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  episode_likes_aggregate?: InputMaybe<Episode_Likes_Aggregate_Order_By>;
  has_next_episode?: InputMaybe<Order_By>;
  has_prev_episode?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_episode_id?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  prev_episode_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  work?: InputMaybe<Works_Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: episodes */
export type Episodes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "episodes" */
export enum Episodes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  HasNextEpisode = 'has_next_episode',
  /** column name */
  HasPrevEpisode = 'has_prev_episode',
  /** column name */
  Id = 'id',
  /** column name */
  NextEpisodeId = 'next_episode_id',
  /** column name */
  Number = 'number',
  /** column name */
  PrevEpisodeId = 'prev_episode_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id'
}

/** select "episodes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "episodes" */
export enum Episodes_Select_Column_Episodes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  HasNextEpisode = 'has_next_episode',
  /** column name */
  HasPrevEpisode = 'has_prev_episode'
}

/** select "episodes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "episodes" */
export enum Episodes_Select_Column_Episodes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  HasNextEpisode = 'has_next_episode',
  /** column name */
  HasPrevEpisode = 'has_prev_episode'
}

/** input type for updating data in table "episodes" */
export type Episodes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  has_next_episode?: InputMaybe<Scalars['Boolean']>;
  has_prev_episode?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  next_episode_id?: InputMaybe<Scalars['uuid']>;
  number?: InputMaybe<Scalars['Int']>;
  prev_episode_id?: InputMaybe<Scalars['uuid']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Episodes_Stddev_Fields = {
  __typename?: 'episodes_stddev_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "episodes" */
export type Episodes_Stddev_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Episodes_Stddev_Pop_Fields = {
  __typename?: 'episodes_stddev_pop_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "episodes" */
export type Episodes_Stddev_Pop_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Episodes_Stddev_Samp_Fields = {
  __typename?: 'episodes_stddev_samp_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "episodes" */
export type Episodes_Stddev_Samp_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "episodes" */
export type Episodes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Episodes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Episodes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  has_next_episode?: InputMaybe<Scalars['Boolean']>;
  has_prev_episode?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  next_episode_id?: InputMaybe<Scalars['uuid']>;
  number?: InputMaybe<Scalars['Int']>;
  prev_episode_id?: InputMaybe<Scalars['uuid']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  work_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Episodes_Sum_Fields = {
  __typename?: 'episodes_sum_fields';
  number?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "episodes" */
export type Episodes_Sum_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** update columns of table "episodes" */
export enum Episodes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  HasNextEpisode = 'has_next_episode',
  /** column name */
  HasPrevEpisode = 'has_prev_episode',
  /** column name */
  Id = 'id',
  /** column name */
  NextEpisodeId = 'next_episode_id',
  /** column name */
  Number = 'number',
  /** column name */
  PrevEpisodeId = 'prev_episode_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id'
}

export type Episodes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Episodes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Episodes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Episodes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Episodes_Var_Pop_Fields = {
  __typename?: 'episodes_var_pop_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "episodes" */
export type Episodes_Var_Pop_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Episodes_Var_Samp_Fields = {
  __typename?: 'episodes_var_samp_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "episodes" */
export type Episodes_Var_Samp_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Episodes_Variance_Fields = {
  __typename?: 'episodes_variance_fields';
  number?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "episodes" */
export type Episodes_Variance_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "media_types" */
export type Media_Types = {
  __typename?: 'media_types';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
};


/** columns and relationships of "media_types" */
export type Media_TypesWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


/** columns and relationships of "media_types" */
export type Media_TypesWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};

/** aggregated selection of "media_types" */
export type Media_Types_Aggregate = {
  __typename?: 'media_types_aggregate';
  aggregate?: Maybe<Media_Types_Aggregate_Fields>;
  nodes: Array<Media_Types>;
};

/** aggregate fields of "media_types" */
export type Media_Types_Aggregate_Fields = {
  __typename?: 'media_types_aggregate_fields';
  avg?: Maybe<Media_Types_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Media_Types_Max_Fields>;
  min?: Maybe<Media_Types_Min_Fields>;
  stddev?: Maybe<Media_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Media_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Media_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Media_Types_Sum_Fields>;
  var_pop?: Maybe<Media_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Media_Types_Var_Samp_Fields>;
  variance?: Maybe<Media_Types_Variance_Fields>;
};


/** aggregate fields of "media_types" */
export type Media_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Media_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Media_Types_Avg_Fields = {
  __typename?: 'media_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "media_types". All fields are combined with a logical 'AND'. */
export type Media_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Types_Bool_Exp>>;
  _not?: InputMaybe<Media_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Types_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  works?: InputMaybe<Works_Bool_Exp>;
  works_aggregate?: InputMaybe<Works_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "media_types" */
export enum Media_Types_Constraint {
  /** unique or primary key constraint on columns "name" */
  MediaTypesNameKey = 'media_types_name_key',
  /** unique or primary key constraint on columns "id" */
  MediaTypesPkey = 'media_types_pkey'
}

/** input type for incrementing numeric columns in table "media_types" */
export type Media_Types_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "media_types" */
export type Media_Types_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  works?: InputMaybe<Works_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Media_Types_Max_Fields = {
  __typename?: 'media_types_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Media_Types_Min_Fields = {
  __typename?: 'media_types_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "media_types" */
export type Media_Types_Mutation_Response = {
  __typename?: 'media_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Media_Types>;
};

/** input type for inserting object relation for remote table "media_types" */
export type Media_Types_Obj_Rel_Insert_Input = {
  data: Media_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Media_Types_On_Conflict>;
};

/** on_conflict condition type for table "media_types" */
export type Media_Types_On_Conflict = {
  constraint: Media_Types_Constraint;
  update_columns?: Array<Media_Types_Update_Column>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "media_types". */
export type Media_Types_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  works_aggregate?: InputMaybe<Works_Aggregate_Order_By>;
};

/** primary key columns input for table: media_types */
export type Media_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "media_types" */
export enum Media_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "media_types" */
export type Media_Types_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Media_Types_Stddev_Fields = {
  __typename?: 'media_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Media_Types_Stddev_Pop_Fields = {
  __typename?: 'media_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Media_Types_Stddev_Samp_Fields = {
  __typename?: 'media_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "media_types" */
export type Media_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Types_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Media_Types_Sum_Fields = {
  __typename?: 'media_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "media_types" */
export enum Media_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Media_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Media_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Media_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Media_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Media_Types_Var_Pop_Fields = {
  __typename?: 'media_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Media_Types_Var_Samp_Fields = {
  __typename?: 'media_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Media_Types_Variance_Fields = {
  __typename?: 'media_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "chat_comments" */
  delete_chat_comments?: Maybe<Chat_Comments_Mutation_Response>;
  /** delete single row from the table: "chat_comments" */
  delete_chat_comments_by_pk?: Maybe<Chat_Comments>;
  /** delete data from the table: "episode_likes" */
  delete_episode_likes?: Maybe<Episode_Likes_Mutation_Response>;
  /** delete single row from the table: "episode_likes" */
  delete_episode_likes_by_pk?: Maybe<Episode_Likes>;
  /** delete data from the table: "episodes" */
  delete_episodes?: Maybe<Episodes_Mutation_Response>;
  /** delete single row from the table: "episodes" */
  delete_episodes_by_pk?: Maybe<Episodes>;
  /** delete data from the table: "media_types" */
  delete_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** delete single row from the table: "media_types" */
  delete_media_types_by_pk?: Maybe<Media_Types>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "works" */
  delete_works?: Maybe<Works_Mutation_Response>;
  /** delete single row from the table: "works" */
  delete_works_by_pk?: Maybe<Works>;
  /** insert data into the table: "chat_comments" */
  insert_chat_comments?: Maybe<Chat_Comments_Mutation_Response>;
  /** insert a single row into the table: "chat_comments" */
  insert_chat_comments_one?: Maybe<Chat_Comments>;
  /** insert data into the table: "episode_likes" */
  insert_episode_likes?: Maybe<Episode_Likes_Mutation_Response>;
  /** insert a single row into the table: "episode_likes" */
  insert_episode_likes_one?: Maybe<Episode_Likes>;
  /** insert data into the table: "episodes" */
  insert_episodes?: Maybe<Episodes_Mutation_Response>;
  /** insert a single row into the table: "episodes" */
  insert_episodes_one?: Maybe<Episodes>;
  /** insert data into the table: "media_types" */
  insert_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** insert a single row into the table: "media_types" */
  insert_media_types_one?: Maybe<Media_Types>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "works" */
  insert_works?: Maybe<Works_Mutation_Response>;
  /** insert a single row into the table: "works" */
  insert_works_one?: Maybe<Works>;
  /** update data of the table: "chat_comments" */
  update_chat_comments?: Maybe<Chat_Comments_Mutation_Response>;
  /** update single row of the table: "chat_comments" */
  update_chat_comments_by_pk?: Maybe<Chat_Comments>;
  /** update multiples rows of table: "chat_comments" */
  update_chat_comments_many?: Maybe<Array<Maybe<Chat_Comments_Mutation_Response>>>;
  /** update data of the table: "episode_likes" */
  update_episode_likes?: Maybe<Episode_Likes_Mutation_Response>;
  /** update single row of the table: "episode_likes" */
  update_episode_likes_by_pk?: Maybe<Episode_Likes>;
  /** update multiples rows of table: "episode_likes" */
  update_episode_likes_many?: Maybe<Array<Maybe<Episode_Likes_Mutation_Response>>>;
  /** update data of the table: "episodes" */
  update_episodes?: Maybe<Episodes_Mutation_Response>;
  /** update single row of the table: "episodes" */
  update_episodes_by_pk?: Maybe<Episodes>;
  /** update multiples rows of table: "episodes" */
  update_episodes_many?: Maybe<Array<Maybe<Episodes_Mutation_Response>>>;
  /** update data of the table: "media_types" */
  update_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** update single row of the table: "media_types" */
  update_media_types_by_pk?: Maybe<Media_Types>;
  /** update multiples rows of table: "media_types" */
  update_media_types_many?: Maybe<Array<Maybe<Media_Types_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "works" */
  update_works?: Maybe<Works_Mutation_Response>;
  /** update single row of the table: "works" */
  update_works_by_pk?: Maybe<Works>;
  /** update multiples rows of table: "works" */
  update_works_many?: Maybe<Array<Maybe<Works_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Chat_CommentsArgs = {
  where: Chat_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Episode_LikesArgs = {
  where: Episode_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Episode_Likes_By_PkArgs = {
  episode_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_EpisodesArgs = {
  where: Episodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Episodes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Media_TypesArgs = {
  where: Media_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_WorksArgs = {
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Chat_CommentsArgs = {
  objects: Array<Chat_Comments_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Comments_OneArgs = {
  object: Chat_Comments_Insert_Input;
  on_conflict?: InputMaybe<Chat_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Episode_LikesArgs = {
  objects: Array<Episode_Likes_Insert_Input>;
  on_conflict?: InputMaybe<Episode_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Episode_Likes_OneArgs = {
  object: Episode_Likes_Insert_Input;
  on_conflict?: InputMaybe<Episode_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EpisodesArgs = {
  objects: Array<Episodes_Insert_Input>;
  on_conflict?: InputMaybe<Episodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Episodes_OneArgs = {
  object: Episodes_Insert_Input;
  on_conflict?: InputMaybe<Episodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_TypesArgs = {
  objects: Array<Media_Types_Insert_Input>;
  on_conflict?: InputMaybe<Media_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Types_OneArgs = {
  object: Media_Types_Insert_Input;
  on_conflict?: InputMaybe<Media_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorksArgs = {
  objects: Array<Works_Insert_Input>;
  on_conflict?: InputMaybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_OneArgs = {
  object: Works_Insert_Input;
  on_conflict?: InputMaybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_CommentsArgs = {
  _inc?: InputMaybe<Chat_Comments_Inc_Input>;
  _set?: InputMaybe<Chat_Comments_Set_Input>;
  where: Chat_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Comments_By_PkArgs = {
  _inc?: InputMaybe<Chat_Comments_Inc_Input>;
  _set?: InputMaybe<Chat_Comments_Set_Input>;
  pk_columns: Chat_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Comments_ManyArgs = {
  updates: Array<Chat_Comments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Episode_LikesArgs = {
  _set?: InputMaybe<Episode_Likes_Set_Input>;
  where: Episode_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Episode_Likes_By_PkArgs = {
  _set?: InputMaybe<Episode_Likes_Set_Input>;
  pk_columns: Episode_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Episode_Likes_ManyArgs = {
  updates: Array<Episode_Likes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EpisodesArgs = {
  _inc?: InputMaybe<Episodes_Inc_Input>;
  _set?: InputMaybe<Episodes_Set_Input>;
  where: Episodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Episodes_By_PkArgs = {
  _inc?: InputMaybe<Episodes_Inc_Input>;
  _set?: InputMaybe<Episodes_Set_Input>;
  pk_columns: Episodes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Episodes_ManyArgs = {
  updates: Array<Episodes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Media_TypesArgs = {
  _inc?: InputMaybe<Media_Types_Inc_Input>;
  _set?: InputMaybe<Media_Types_Set_Input>;
  where: Media_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Types_By_PkArgs = {
  _inc?: InputMaybe<Media_Types_Inc_Input>;
  _set?: InputMaybe<Media_Types_Set_Input>;
  pk_columns: Media_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Types_ManyArgs = {
  updates: Array<Media_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorksArgs = {
  _inc?: InputMaybe<Works_Inc_Input>;
  _set?: InputMaybe<Works_Set_Input>;
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_By_PkArgs = {
  _inc?: InputMaybe<Works_Inc_Input>;
  _set?: InputMaybe<Works_Set_Input>;
  pk_columns: Works_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Works_ManyArgs = {
  updates: Array<Works_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  chat_comments: Array<Chat_Comments>;
  /** An aggregate relationship */
  chat_comments_aggregate: Chat_Comments_Aggregate;
  /** fetch data from the table: "chat_comments" using primary key columns */
  chat_comments_by_pk?: Maybe<Chat_Comments>;
  /** An array relationship */
  episode_likes: Array<Episode_Likes>;
  /** An aggregate relationship */
  episode_likes_aggregate: Episode_Likes_Aggregate;
  /** fetch data from the table: "episode_likes" using primary key columns */
  episode_likes_by_pk?: Maybe<Episode_Likes>;
  /** An array relationship */
  episodes: Array<Episodes>;
  /** An aggregate relationship */
  episodes_aggregate: Episodes_Aggregate;
  /** fetch data from the table: "episodes" using primary key columns */
  episodes_by_pk?: Maybe<Episodes>;
  /** fetch data from the table: "media_types" */
  media_types: Array<Media_Types>;
  /** fetch aggregated fields from the table: "media_types" */
  media_types_aggregate: Media_Types_Aggregate;
  /** fetch data from the table: "media_types" using primary key columns */
  media_types_by_pk?: Maybe<Media_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
};


export type Query_RootChat_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


export type Query_RootChat_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


export type Query_RootChat_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEpisode_LikesArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


export type Query_RootEpisode_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


export type Query_RootEpisode_Likes_By_PkArgs = {
  episode_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Query_RootEpisodesArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Query_RootEpisodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Query_RootEpisodes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMedia_TypesArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Query_RootMedia_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Query_RootMedia_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  chat_comments: Array<Chat_Comments>;
  /** An aggregate relationship */
  chat_comments_aggregate: Chat_Comments_Aggregate;
  /** fetch data from the table: "chat_comments" using primary key columns */
  chat_comments_by_pk?: Maybe<Chat_Comments>;
  /** fetch data from the table in a streaming manner: "chat_comments" */
  chat_comments_stream: Array<Chat_Comments>;
  /** An array relationship */
  episode_likes: Array<Episode_Likes>;
  /** An aggregate relationship */
  episode_likes_aggregate: Episode_Likes_Aggregate;
  /** fetch data from the table: "episode_likes" using primary key columns */
  episode_likes_by_pk?: Maybe<Episode_Likes>;
  /** fetch data from the table in a streaming manner: "episode_likes" */
  episode_likes_stream: Array<Episode_Likes>;
  /** An array relationship */
  episodes: Array<Episodes>;
  /** An aggregate relationship */
  episodes_aggregate: Episodes_Aggregate;
  /** fetch data from the table: "episodes" using primary key columns */
  episodes_by_pk?: Maybe<Episodes>;
  /** fetch data from the table in a streaming manner: "episodes" */
  episodes_stream: Array<Episodes>;
  /** fetch data from the table: "media_types" */
  media_types: Array<Media_Types>;
  /** fetch aggregated fields from the table: "media_types" */
  media_types_aggregate: Media_Types_Aggregate;
  /** fetch data from the table: "media_types" using primary key columns */
  media_types_by_pk?: Maybe<Media_Types>;
  /** fetch data from the table in a streaming manner: "media_types" */
  media_types_stream: Array<Media_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table in a streaming manner: "works" */
  works_stream: Array<Works>;
};


export type Subscription_RootChat_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


export type Subscription_RootChat_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


export type Subscription_RootChat_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_Comments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chat_Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


export type Subscription_RootEpisode_LikesArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


export type Subscription_RootEpisode_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


export type Subscription_RootEpisode_Likes_By_PkArgs = {
  episode_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Subscription_RootEpisode_Likes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Episode_Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


export type Subscription_RootEpisodesArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootEpisodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootEpisodes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEpisodes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Episodes_Stream_Cursor_Input>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootMedia_TypesArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMedia_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMedia_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMedia_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Media_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootWorks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Works_Stream_Cursor_Input>>;
  where?: InputMaybe<Works_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  anonymous: Scalars['Boolean'];
  /** An array relationship */
  chat_comments: Array<Chat_Comments>;
  /** An aggregate relationship */
  chat_comments_aggregate: Chat_Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  episode_likes: Array<Episode_Likes>;
  /** An aggregate relationship */
  episode_likes_aggregate: Episode_Likes_Aggregate;
  id: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_name: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersChat_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersEpisode_LikesArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersEpisode_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episode_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episode_Likes_Order_By>>;
  where?: InputMaybe<Episode_Likes_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  chat_comments?: InputMaybe<Chat_Comments_Bool_Exp>;
  chat_comments_aggregate?: InputMaybe<Chat_Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  episode_likes?: InputMaybe<Episode_Likes_Bool_Exp>;
  episode_likes_aggregate?: InputMaybe<Episode_Likes_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  photo_url?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  chat_comments?: InputMaybe<Chat_Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  episode_likes?: InputMaybe<Episode_Likes_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  anonymous?: InputMaybe<Order_By>;
  chat_comments_aggregate?: InputMaybe<Chat_Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_likes_aggregate?: InputMaybe<Episode_Likes_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  photo_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserName = 'user_name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  photo_url?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserName = 'user_name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "works" */
export type Works = {
  __typename?: 'works';
  /** An array relationship */
  chat_comments: Array<Chat_Comments>;
  /** An aggregate relationship */
  chat_comments_aggregate: Chat_Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  episodes: Array<Episodes>;
  /** An aggregate relationship */
  episodes_aggregate: Episodes_Aggregate;
  has_episodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** An object relationship */
  media_type?: Maybe<Media_Types>;
  media_type_id?: Maybe<Scalars['Int']>;
  season_name?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['Int']>;
  series_id?: Maybe<Scalars['String']>;
  series_title: Scalars['String'];
  tid?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  uid: Scalars['uuid'];
};


/** columns and relationships of "works" */
export type WorksChat_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksChat_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chat_Comments_Order_By>>;
  where?: InputMaybe<Chat_Comments_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksEpisodesArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksEpisodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};

/** aggregated selection of "works" */
export type Works_Aggregate = {
  __typename?: 'works_aggregate';
  aggregate?: Maybe<Works_Aggregate_Fields>;
  nodes: Array<Works>;
};

export type Works_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Works_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Works_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Works_Aggregate_Bool_Exp_Count>;
};

export type Works_Aggregate_Bool_Exp_Bool_And = {
  arguments: Works_Select_Column_Works_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Works_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Works_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Works_Select_Column_Works_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Works_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Works_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Works_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "works" */
export type Works_Aggregate_Fields = {
  __typename?: 'works_aggregate_fields';
  avg?: Maybe<Works_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Works_Max_Fields>;
  min?: Maybe<Works_Min_Fields>;
  stddev?: Maybe<Works_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Sum_Fields>;
  var_pop?: Maybe<Works_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Var_Samp_Fields>;
  variance?: Maybe<Works_Variance_Fields>;
};


/** aggregate fields of "works" */
export type Works_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "works" */
export type Works_Aggregate_Order_By = {
  avg?: InputMaybe<Works_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Works_Max_Order_By>;
  min?: InputMaybe<Works_Min_Order_By>;
  stddev?: InputMaybe<Works_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Works_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Works_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Works_Sum_Order_By>;
  var_pop?: InputMaybe<Works_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Works_Var_Samp_Order_By>;
  variance?: InputMaybe<Works_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "works" */
export type Works_Arr_Rel_Insert_Input = {
  data: Array<Works_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Works_On_Conflict>;
};

/** aggregate avg on columns */
export type Works_Avg_Fields = {
  __typename?: 'works_avg_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works" */
export type Works_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works". All fields are combined with a logical 'AND'. */
export type Works_Bool_Exp = {
  _and?: InputMaybe<Array<Works_Bool_Exp>>;
  _not?: InputMaybe<Works_Bool_Exp>;
  _or?: InputMaybe<Array<Works_Bool_Exp>>;
  chat_comments?: InputMaybe<Chat_Comments_Bool_Exp>;
  chat_comments_aggregate?: InputMaybe<Chat_Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  episodes?: InputMaybe<Episodes_Bool_Exp>;
  episodes_aggregate?: InputMaybe<Episodes_Aggregate_Bool_Exp>;
  has_episodes?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  media_type?: InputMaybe<Media_Types_Bool_Exp>;
  media_type_id?: InputMaybe<Int_Comparison_Exp>;
  season_name?: InputMaybe<String_Comparison_Exp>;
  season_year?: InputMaybe<Int_Comparison_Exp>;
  series_id?: InputMaybe<String_Comparison_Exp>;
  series_title?: InputMaybe<String_Comparison_Exp>;
  tid?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "works" */
export enum Works_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorksPkey = 'works_pkey',
  /** unique or primary key constraint on columns "series_title", "title", "media_type_id" */
  WorksTitleSeriesTitleMediaTypeIdKey = 'works_title_series_title_media_type_id_key',
  /** unique or primary key constraint on columns "uid" */
  WorksUidKey = 'works_uid_key'
}

/** input type for incrementing numeric columns in table "works" */
export type Works_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  season_year?: InputMaybe<Scalars['Int']>;
  tid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  chat_comments?: InputMaybe<Chat_Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  episodes?: InputMaybe<Episodes_Arr_Rel_Insert_Input>;
  has_episodes?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  media_type?: InputMaybe<Media_Types_Obj_Rel_Insert_Input>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  season_name?: InputMaybe<Scalars['String']>;
  season_year?: InputMaybe<Scalars['Int']>;
  series_id?: InputMaybe<Scalars['String']>;
  series_title?: InputMaybe<Scalars['String']>;
  tid?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  media_type_id?: Maybe<Scalars['Int']>;
  season_name?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['Int']>;
  series_id?: Maybe<Scalars['String']>;
  series_title?: Maybe<Scalars['String']>;
  tid?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "works" */
export type Works_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_name?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  series_title?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  media_type_id?: Maybe<Scalars['Int']>;
  season_name?: Maybe<Scalars['String']>;
  season_year?: Maybe<Scalars['Int']>;
  series_id?: Maybe<Scalars['String']>;
  series_title?: Maybe<Scalars['String']>;
  tid?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "works" */
export type Works_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_name?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  series_title?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Works>;
};

/** input type for inserting object relation for remote table "works" */
export type Works_Obj_Rel_Insert_Input = {
  data: Works_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Works_On_Conflict>;
};

/** on_conflict condition type for table "works" */
export type Works_On_Conflict = {
  constraint: Works_Constraint;
  update_columns?: Array<Works_Update_Column>;
  where?: InputMaybe<Works_Bool_Exp>;
};

/** Ordering options when selecting data from "works". */
export type Works_Order_By = {
  chat_comments_aggregate?: InputMaybe<Chat_Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  episodes_aggregate?: InputMaybe<Episodes_Aggregate_Order_By>;
  has_episodes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Media_Types_Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_name?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  series_title?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: works */
export type Works_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "works" */
export enum Works_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HasEpisodes = 'has_episodes',
  /** column name */
  Id = 'id',
  /** column name */
  MediaTypeId = 'media_type_id',
  /** column name */
  SeasonName = 'season_name',
  /** column name */
  SeasonYear = 'season_year',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  SeriesTitle = 'series_title',
  /** column name */
  Tid = 'tid',
  /** column name */
  Title = 'title',
  /** column name */
  Uid = 'uid'
}

/** select "works_aggregate_bool_exp_bool_and_arguments_columns" columns of table "works" */
export enum Works_Select_Column_Works_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  HasEpisodes = 'has_episodes'
}

/** select "works_aggregate_bool_exp_bool_or_arguments_columns" columns of table "works" */
export enum Works_Select_Column_Works_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  HasEpisodes = 'has_episodes'
}

/** input type for updating data in table "works" */
export type Works_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  has_episodes?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  season_name?: InputMaybe<Scalars['String']>;
  season_year?: InputMaybe<Scalars['Int']>;
  series_id?: InputMaybe<Scalars['String']>;
  series_title?: InputMaybe<Scalars['String']>;
  tid?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Works_Stddev_Fields = {
  __typename?: 'works_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works" */
export type Works_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Stddev_Pop_Fields = {
  __typename?: 'works_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works" */
export type Works_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Stddev_Samp_Fields = {
  __typename?: 'works_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works" */
export type Works_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "works" */
export type Works_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Works_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Works_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  has_episodes?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  season_name?: InputMaybe<Scalars['String']>;
  season_year?: InputMaybe<Scalars['Int']>;
  series_id?: InputMaybe<Scalars['String']>;
  series_title?: InputMaybe<Scalars['String']>;
  tid?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Works_Sum_Fields = {
  __typename?: 'works_sum_fields';
  id?: Maybe<Scalars['Int']>;
  media_type_id?: Maybe<Scalars['Int']>;
  season_year?: Maybe<Scalars['Int']>;
  tid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "works" */
export type Works_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** update columns of table "works" */
export enum Works_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HasEpisodes = 'has_episodes',
  /** column name */
  Id = 'id',
  /** column name */
  MediaTypeId = 'media_type_id',
  /** column name */
  SeasonName = 'season_name',
  /** column name */
  SeasonYear = 'season_year',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  SeriesTitle = 'series_title',
  /** column name */
  Tid = 'tid',
  /** column name */
  Title = 'title',
  /** column name */
  Uid = 'uid'
}

export type Works_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Works_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Works_Set_Input>;
  /** filter the rows which have to be updated */
  where: Works_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Works_Var_Pop_Fields = {
  __typename?: 'works_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works" */
export type Works_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Var_Samp_Fields = {
  __typename?: 'works_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works" */
export type Works_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Variance_Fields = {
  __typename?: 'works_variance_fields';
  id?: Maybe<Scalars['Float']>;
  media_type_id?: Maybe<Scalars['Float']>;
  season_year?: Maybe<Scalars['Float']>;
  tid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works" */
export type Works_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

export type GetChatCommentsQueryVariables = Exact<{
  episode_id: Scalars['uuid'];
}>;


export type GetChatCommentsQuery = { __typename?: 'query_root', chat_comments: Array<{ __typename?: 'chat_comments', content: string, anonymous: boolean, created_at: any, episode_id?: any | null, id: any, time: number, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, photo_url?: string | null, id: string } }> };

export type InsertChatCommentMutationVariables = Exact<{
  object: Chat_Comments_Insert_Input;
}>;


export type InsertChatCommentMutation = { __typename?: 'mutation_root', insert_chat_comments_one?: { __typename?: 'chat_comments', content: string, work_id?: number | null, user_id: string, time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user: { __typename?: 'users', anonymous: boolean, user_name: string, photo_url?: string | null, id: string } } | null };

export type UpdateTodayEpisodeMutationVariables = Exact<{
  tid: Scalars['Int'];
  number: Scalars['Int'];
  episodes_set_input: Episodes_Set_Input;
}>;


export type UpdateTodayEpisodeMutation = { __typename?: 'mutation_root', update_episodes?: { __typename?: 'episodes_mutation_response', returning: Array<{ __typename?: 'episodes', id: any, start_time?: any | null, end_time?: any | null }> } | null };

export type GetTodayEpisodesQueryVariables = Exact<{
  where: Episodes_Bool_Exp;
}>;


export type GetTodayEpisodesQuery = { __typename?: 'query_root', episodes: Array<{ __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, work: { __typename?: 'works', series_title: string, title: string, id: number, series_id?: string | null, tid?: number | null }, episode_likes_aggregate: { __typename?: 'episode_likes_aggregate', aggregate?: { __typename?: 'episode_likes_aggregate_fields', count: number } | null } }> };

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetEpisodeQuery = { __typename?: 'query_root', episodes_by_pk?: { __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, next_episode_id?: any | null, prev_episode_id?: any | null, work: { __typename?: 'works', series_title: string, title: string, id: number, series_id?: string | null, tid?: number | null } } | null };

export type InsertEpisodeLikesMutationVariables = Exact<{
  object: Episode_Likes_Insert_Input;
}>;


export type InsertEpisodeLikesMutation = { __typename?: 'mutation_root', insert_episode_likes_one?: { __typename?: 'episode_likes', user_id: string, episode_id: any } | null };

export type GetEpisodeLikesQueryVariables = Exact<{
  episodeIds: Array<Scalars['uuid']> | Scalars['uuid'];
}>;


export type GetEpisodeLikesQuery = { __typename?: 'query_root', episode_likes: Array<{ __typename?: 'episode_likes', episode_id: any, user_id: string }> };

export type DeleteEpisodeLikesMutationVariables = Exact<{
  episodeId: Scalars['uuid'];
  userId: Scalars['String'];
}>;


export type DeleteEpisodeLikesMutation = { __typename?: 'mutation_root', delete_episode_likes_by_pk?: { __typename?: 'episode_likes', user_id: string, episode_id: any } | null };

export type GetMediaTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMediaTypesQuery = { __typename?: 'query_root', media_types: Array<{ __typename?: 'media_types', id: number, name: string }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, anonymous: boolean, photo_url?: string | null, user_name: string } | null };

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  anonymous: Scalars['Boolean'];
  photo_url: Scalars['String'];
  user_name: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string } | null };

export type GetSeasonWorksQueryVariables = Exact<{
  season: Scalars['String'];
  year: Scalars['Int'];
}>;


export type GetSeasonWorksQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', title: string, tid?: number | null, series_title: string, series_id?: string | null, season_year?: number | null, season_name?: string | null, id: number, has_episodes?: boolean | null, media_type_id?: number | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_prev_episode: boolean, has_next_episode: boolean, end_time?: any | null }> }> };


export const GetChatCommentsDocument = `
    query GetChatComments($episode_id: uuid!) {
  chat_comments(
    where: {_and: {episode_id: {_eq: $episode_id}, time: {_gt: 0}}}
    order_by: {time: asc, created_at: asc}
  ) {
    content
    anonymous
    created_at
    episode_id
    id
    time
    commenter_name
    user {
      anonymous
      user_name
      photo_url
      id
    }
  }
}
    `;
export const useGetChatCommentsQuery = <
      TData = GetChatCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetChatCommentsQueryVariables,
      options?: UseQueryOptions<GetChatCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetChatCommentsQuery, TError, TData>(
      ['GetChatComments', variables],
      fetcher<GetChatCommentsQuery, GetChatCommentsQueryVariables>(client, GetChatCommentsDocument, variables, headers),
      options
    );

useGetChatCommentsQuery.getKey = (variables: GetChatCommentsQueryVariables) => ['GetChatComments', variables];
;

useGetChatCommentsQuery.fetcher = (client: GraphQLClient, variables: GetChatCommentsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetChatCommentsQuery, GetChatCommentsQueryVariables>(client, GetChatCommentsDocument, variables, headers);
export const InsertChatCommentDocument = `
    mutation InsertChatComment($object: chat_comments_insert_input!) {
  insert_chat_comments_one(object: $object) {
    content
    work_id
    user_id
    time
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      user_name
      photo_url
      id
    }
  }
}
    `;
export const useInsertChatCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertChatCommentMutation, TError, InsertChatCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertChatCommentMutation, TError, InsertChatCommentMutationVariables, TContext>(
      ['InsertChatComment'],
      (variables?: InsertChatCommentMutationVariables) => fetcher<InsertChatCommentMutation, InsertChatCommentMutationVariables>(client, InsertChatCommentDocument, variables, headers)(),
      options
    );
useInsertChatCommentMutation.fetcher = (client: GraphQLClient, variables: InsertChatCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertChatCommentMutation, InsertChatCommentMutationVariables>(client, InsertChatCommentDocument, variables, headers);
export const UpdateTodayEpisodeDocument = `
    mutation UpdateTodayEpisode($tid: Int!, $number: Int!, $episodes_set_input: episodes_set_input!) {
  update_episodes(
    where: {_and: {number: {_eq: $number}, work: {tid: {_eq: $tid}}}}
    _set: $episodes_set_input
  ) {
    returning {
      id
      start_time
      end_time
    }
  }
}
    `;
export const useUpdateTodayEpisodeMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateTodayEpisodeMutation, TError, UpdateTodayEpisodeMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateTodayEpisodeMutation, TError, UpdateTodayEpisodeMutationVariables, TContext>(
      ['UpdateTodayEpisode'],
      (variables?: UpdateTodayEpisodeMutationVariables) => fetcher<UpdateTodayEpisodeMutation, UpdateTodayEpisodeMutationVariables>(client, UpdateTodayEpisodeDocument, variables, headers)(),
      options
    );
useUpdateTodayEpisodeMutation.fetcher = (client: GraphQLClient, variables: UpdateTodayEpisodeMutationVariables, headers?: RequestInit['headers']) => fetcher<UpdateTodayEpisodeMutation, UpdateTodayEpisodeMutationVariables>(client, UpdateTodayEpisodeDocument, variables, headers);
export const GetTodayEpisodesDocument = `
    query GetTodayEpisodes($where: episodes_bool_exp!) {
  episodes(where: $where, order_by: {start_time: asc}) {
    id
    title
    end_time
    start_time
    number
    has_next_episode
    has_prev_episode
    work {
      series_title
      title
      id
      series_id
      tid
    }
    episode_likes_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const useGetTodayEpisodesQuery = <
      TData = GetTodayEpisodesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetTodayEpisodesQueryVariables,
      options?: UseQueryOptions<GetTodayEpisodesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTodayEpisodesQuery, TError, TData>(
      ['GetTodayEpisodes', variables],
      fetcher<GetTodayEpisodesQuery, GetTodayEpisodesQueryVariables>(client, GetTodayEpisodesDocument, variables, headers),
      options
    );

useGetTodayEpisodesQuery.getKey = (variables: GetTodayEpisodesQueryVariables) => ['GetTodayEpisodes', variables];
;

useGetTodayEpisodesQuery.fetcher = (client: GraphQLClient, variables: GetTodayEpisodesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetTodayEpisodesQuery, GetTodayEpisodesQueryVariables>(client, GetTodayEpisodesDocument, variables, headers);
export const GetEpisodeDocument = `
    query GetEpisode($id: uuid!) {
  episodes_by_pk(id: $id) {
    id
    title
    end_time
    start_time
    number
    has_next_episode
    has_prev_episode
    next_episode_id
    prev_episode_id
    work {
      series_title
      title
      id
      series_id
      tid
    }
  }
}
    `;
export const useGetEpisodeQuery = <
      TData = GetEpisodeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetEpisodeQueryVariables,
      options?: UseQueryOptions<GetEpisodeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetEpisodeQuery, TError, TData>(
      ['GetEpisode', variables],
      fetcher<GetEpisodeQuery, GetEpisodeQueryVariables>(client, GetEpisodeDocument, variables, headers),
      options
    );

useGetEpisodeQuery.getKey = (variables: GetEpisodeQueryVariables) => ['GetEpisode', variables];
;

useGetEpisodeQuery.fetcher = (client: GraphQLClient, variables: GetEpisodeQueryVariables, headers?: RequestInit['headers']) => fetcher<GetEpisodeQuery, GetEpisodeQueryVariables>(client, GetEpisodeDocument, variables, headers);
export const InsertEpisodeLikesDocument = `
    mutation InsertEpisodeLikes($object: episode_likes_insert_input!) {
  insert_episode_likes_one(object: $object) {
    user_id
    episode_id
  }
}
    `;
export const useInsertEpisodeLikesMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertEpisodeLikesMutation, TError, InsertEpisodeLikesMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertEpisodeLikesMutation, TError, InsertEpisodeLikesMutationVariables, TContext>(
      ['InsertEpisodeLikes'],
      (variables?: InsertEpisodeLikesMutationVariables) => fetcher<InsertEpisodeLikesMutation, InsertEpisodeLikesMutationVariables>(client, InsertEpisodeLikesDocument, variables, headers)(),
      options
    );
useInsertEpisodeLikesMutation.fetcher = (client: GraphQLClient, variables: InsertEpisodeLikesMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertEpisodeLikesMutation, InsertEpisodeLikesMutationVariables>(client, InsertEpisodeLikesDocument, variables, headers);
export const GetEpisodeLikesDocument = `
    query GetEpisodeLikes($episodeIds: [uuid!]!) {
  episode_likes(where: {episode_id: {_in: $episodeIds}}) {
    episode_id
    user_id
  }
}
    `;
export const useGetEpisodeLikesQuery = <
      TData = GetEpisodeLikesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetEpisodeLikesQueryVariables,
      options?: UseQueryOptions<GetEpisodeLikesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetEpisodeLikesQuery, TError, TData>(
      ['GetEpisodeLikes', variables],
      fetcher<GetEpisodeLikesQuery, GetEpisodeLikesQueryVariables>(client, GetEpisodeLikesDocument, variables, headers),
      options
    );

useGetEpisodeLikesQuery.getKey = (variables: GetEpisodeLikesQueryVariables) => ['GetEpisodeLikes', variables];
;

useGetEpisodeLikesQuery.fetcher = (client: GraphQLClient, variables: GetEpisodeLikesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetEpisodeLikesQuery, GetEpisodeLikesQueryVariables>(client, GetEpisodeLikesDocument, variables, headers);
export const DeleteEpisodeLikesDocument = `
    mutation DeleteEpisodeLikes($episodeId: uuid!, $userId: String!) {
  delete_episode_likes_by_pk(episode_id: $episodeId, user_id: $userId) {
    user_id
    episode_id
  }
}
    `;
export const useDeleteEpisodeLikesMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteEpisodeLikesMutation, TError, DeleteEpisodeLikesMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteEpisodeLikesMutation, TError, DeleteEpisodeLikesMutationVariables, TContext>(
      ['DeleteEpisodeLikes'],
      (variables?: DeleteEpisodeLikesMutationVariables) => fetcher<DeleteEpisodeLikesMutation, DeleteEpisodeLikesMutationVariables>(client, DeleteEpisodeLikesDocument, variables, headers)(),
      options
    );
useDeleteEpisodeLikesMutation.fetcher = (client: GraphQLClient, variables: DeleteEpisodeLikesMutationVariables, headers?: RequestInit['headers']) => fetcher<DeleteEpisodeLikesMutation, DeleteEpisodeLikesMutationVariables>(client, DeleteEpisodeLikesDocument, variables, headers);
export const GetMediaTypesDocument = `
    query GetMediaTypes {
  media_types(order_by: {id: asc}) {
    id
    name
  }
}
    `;
export const useGetMediaTypesQuery = <
      TData = GetMediaTypesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMediaTypesQueryVariables,
      options?: UseQueryOptions<GetMediaTypesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMediaTypesQuery, TError, TData>(
      variables === undefined ? ['GetMediaTypes'] : ['GetMediaTypes', variables],
      fetcher<GetMediaTypesQuery, GetMediaTypesQueryVariables>(client, GetMediaTypesDocument, variables, headers),
      options
    );

useGetMediaTypesQuery.getKey = (variables?: GetMediaTypesQueryVariables) => variables === undefined ? ['GetMediaTypes'] : ['GetMediaTypes', variables];
;

useGetMediaTypesQuery.fetcher = (client: GraphQLClient, variables?: GetMediaTypesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetMediaTypesQuery, GetMediaTypesQueryVariables>(client, GetMediaTypesDocument, variables, headers);
export const GetUserDocument = `
    query GetUser($id: String!) {
  users_by_pk(id: $id) {
    id
    anonymous
    photo_url
    user_name
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['GetUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(client, GetUserDocument, variables, headers),
      options
    );

useGetUserQuery.getKey = (variables: GetUserQueryVariables) => ['GetUser', variables];
;

useGetUserQuery.fetcher = (client: GraphQLClient, variables: GetUserQueryVariables, headers?: RequestInit['headers']) => fetcher<GetUserQuery, GetUserQueryVariables>(client, GetUserDocument, variables, headers);
export const CreateUserDocument = `
    mutation createUser($id: String!, $anonymous: Boolean!, $photo_url: String!, $user_name: String!) {
  insert_users_one(
    object: {anonymous: $anonymous, photo_url: $photo_url, id: $id, user_name: $user_name}
  ) {
    id
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['createUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers)(),
      options
    );
useCreateUserMutation.fetcher = (client: GraphQLClient, variables: CreateUserMutationVariables, headers?: RequestInit['headers']) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers);
export const GetSeasonWorksDocument = `
    query GetSeasonWorks($season: String!, $year: Int!) {
  works(
    where: {_and: {season_year: {_eq: $year}, season_name: {_eq: $season}, has_episodes: {_eq: true}}}
  ) {
    title
    tid
    series_title
    series_id
    season_year
    season_name
    id
    has_episodes
    media_type_id
    episodes(order_by: {number: desc_nulls_last}, limit: 8) {
      title
      start_time
      number
      id
      has_prev_episode
      has_next_episode
      end_time
    }
  }
}
    `;
export const useGetSeasonWorksQuery = <
      TData = GetSeasonWorksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetSeasonWorksQueryVariables,
      options?: UseQueryOptions<GetSeasonWorksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetSeasonWorksQuery, TError, TData>(
      ['GetSeasonWorks', variables],
      fetcher<GetSeasonWorksQuery, GetSeasonWorksQueryVariables>(client, GetSeasonWorksDocument, variables, headers),
      options
    );

useGetSeasonWorksQuery.getKey = (variables: GetSeasonWorksQueryVariables) => ['GetSeasonWorks', variables];
;

useGetSeasonWorksQuery.fetcher = (client: GraphQLClient, variables: GetSeasonWorksQueryVariables, headers?: RequestInit['headers']) => fetcher<GetSeasonWorksQuery, GetSeasonWorksQueryVariables>(client, GetSeasonWorksDocument, variables, headers);