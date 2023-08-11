/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "chats" */
export type Chats = {
  __typename?: 'chats';
  comment_time: Scalars['Int']['output'];
  commenter_name: Scalars['String']['output'];
  content: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  episode?: Maybe<Episodes>;
  episode_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  work?: Maybe<Works>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "chats" */
export type Chats_Aggregate = {
  __typename?: 'chats_aggregate';
  aggregate?: Maybe<Chats_Aggregate_Fields>;
  nodes: Array<Chats>;
};

export type Chats_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chats_Aggregate_Bool_Exp_Count>;
};

export type Chats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chats_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chats" */
export type Chats_Aggregate_Fields = {
  __typename?: 'chats_aggregate_fields';
  avg?: Maybe<Chats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Chats_Max_Fields>;
  min?: Maybe<Chats_Min_Fields>;
  stddev?: Maybe<Chats_Stddev_Fields>;
  stddev_pop?: Maybe<Chats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chats_Stddev_Samp_Fields>;
  sum?: Maybe<Chats_Sum_Fields>;
  var_pop?: Maybe<Chats_Var_Pop_Fields>;
  var_samp?: Maybe<Chats_Var_Samp_Fields>;
  variance?: Maybe<Chats_Variance_Fields>;
};


/** aggregate fields of "chats" */
export type Chats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chats" */
export type Chats_Aggregate_Order_By = {
  avg?: InputMaybe<Chats_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chats_Max_Order_By>;
  min?: InputMaybe<Chats_Min_Order_By>;
  stddev?: InputMaybe<Chats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chats_Sum_Order_By>;
  var_pop?: InputMaybe<Chats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chats_Var_Samp_Order_By>;
  variance?: InputMaybe<Chats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chats" */
export type Chats_Arr_Rel_Insert_Input = {
  data: Array<Chats_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};

/** aggregate avg on columns */
export type Chats_Avg_Fields = {
  __typename?: 'chats_avg_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "chats" */
export type Chats_Avg_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chats". All fields are combined with a logical 'AND'. */
export type Chats_Bool_Exp = {
  _and?: InputMaybe<Array<Chats_Bool_Exp>>;
  _not?: InputMaybe<Chats_Bool_Exp>;
  _or?: InputMaybe<Array<Chats_Bool_Exp>>;
  comment_time?: InputMaybe<Int_Comparison_Exp>;
  commenter_name?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  episode?: InputMaybe<Episodes_Bool_Exp>;
  episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  work?: InputMaybe<Works_Bool_Exp>;
  work_id?: InputMaybe<Int_Comparison_Exp>;
};

export type Chats_By_Episode_Id_Args = {
  _episode_id?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  get_limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Chats_By_Work_Id_Args = {
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _work_id?: InputMaybe<Scalars['Int']['input']>;
  get_limit?: InputMaybe<Scalars['Int']['input']>;
};

/** unique or primary key constraints on table "chats" */
export enum Chats_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatCommentsPkey = 'chat_comments_pkey'
}

/** input type for incrementing numeric columns in table "chats" */
export type Chats_Inc_Input = {
  comment_time?: InputMaybe<Scalars['Int']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "chats" */
export type Chats_Insert_Input = {
  comment_time?: InputMaybe<Scalars['Int']['input']>;
  commenter_name?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episode?: InputMaybe<Episodes_Obj_Rel_Insert_Input>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Chats_Max_Fields = {
  __typename?: 'chats_max_fields';
  comment_time?: Maybe<Scalars['Int']['output']>;
  commenter_name?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  episode_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "chats" */
export type Chats_Max_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chats_Min_Fields = {
  __typename?: 'chats_min_fields';
  comment_time?: Maybe<Scalars['Int']['output']>;
  commenter_name?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  episode_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "chats" */
export type Chats_Min_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chats" */
export type Chats_Mutation_Response = {
  __typename?: 'chats_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chats>;
};

/** on_conflict condition type for table "chats" */
export type Chats_On_Conflict = {
  constraint: Chats_Constraint;
  update_columns?: Array<Chats_Update_Column>;
  where?: InputMaybe<Chats_Bool_Exp>;
};

/** Ordering options when selecting data from "chats". */
export type Chats_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode?: InputMaybe<Episodes_Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  work?: InputMaybe<Works_Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chats */
export type Chats_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "chats" */
export enum Chats_Select_Column {
  /** column name */
  CommentTime = 'comment_time',
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
  Ip = 'ip',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "chats" */
export type Chats_Set_Input = {
  comment_time?: InputMaybe<Scalars['Int']['input']>;
  commenter_name?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Chats_Stddev_Fields = {
  __typename?: 'chats_stddev_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "chats" */
export type Chats_Stddev_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chats_Stddev_Pop_Fields = {
  __typename?: 'chats_stddev_pop_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "chats" */
export type Chats_Stddev_Pop_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chats_Stddev_Samp_Fields = {
  __typename?: 'chats_stddev_samp_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "chats" */
export type Chats_Stddev_Samp_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "chats" */
export type Chats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chats_Stream_Cursor_Value_Input = {
  comment_time?: InputMaybe<Scalars['Int']['input']>;
  commenter_name?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Chats_Sum_Fields = {
  __typename?: 'chats_sum_fields';
  comment_time?: Maybe<Scalars['Int']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "chats" */
export type Chats_Sum_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** update columns of table "chats" */
export enum Chats_Update_Column {
  /** column name */
  CommentTime = 'comment_time',
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
  Ip = 'ip',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

export type Chats_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chats_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chats_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chats_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chats_Var_Pop_Fields = {
  __typename?: 'chats_var_pop_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "chats" */
export type Chats_Var_Pop_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chats_Var_Samp_Fields = {
  __typename?: 'chats_var_samp_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "chats" */
export type Chats_Var_Samp_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chats_Variance_Fields = {
  __typename?: 'chats_variance_fields';
  comment_time?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "chats" */
export type Chats_Variance_Order_By = {
  comment_time?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  /** An object relationship */
  comment?: Maybe<Comments>;
  commenter_name: Scalars['String']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  content: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  episode?: Maybe<Episodes>;
  episode_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "comment_is_like" */
  is_like?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  replied_to_commenter_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "reply_count" */
  reply_count?: Maybe<Scalars['bigint']['output']>;
  reply_to?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  work?: Maybe<Works>;
  work_id?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "comments" */
export type CommentsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
  stddev?: Maybe<Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Comments_Sum_Fields>;
  var_pop?: Maybe<Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Comments_Var_Samp_Fields>;
  variance?: Maybe<Comments_Variance_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  avg?: InputMaybe<Comments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
  stddev?: InputMaybe<Comments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comments_Sum_Order_By>;
  var_pop?: InputMaybe<Comments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comments_Var_Samp_Order_By>;
  variance?: InputMaybe<Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
  __typename?: 'comments_avg_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  commenter_name?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  episode?: InputMaybe<Episodes_Bool_Exp>;
  episode_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  is_like?: InputMaybe<Boolean_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Bool_Exp>;
  replied_to_commenter_name?: InputMaybe<String_Comparison_Exp>;
  reply_count?: InputMaybe<Bigint_Comparison_Exp>;
  reply_to?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  work?: InputMaybe<Works_Bool_Exp>;
  work_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  FinishCommentsPkey = 'finish_comments_pkey'
}

/** input type for incrementing numeric columns in table "comments" */
export type Comments_Inc_Input = {
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  commenter_name?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episode?: InputMaybe<Episodes_Obj_Rel_Insert_Input>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  replied_to_commenter_name?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  commenter_name?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  episode_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  replied_to_commenter_name?: Maybe<Scalars['String']['output']>;
  reply_to?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  replied_to_commenter_name?: InputMaybe<Order_By>;
  reply_to?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  commenter_name?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  episode_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  replied_to_commenter_name?: Maybe<Scalars['String']['output']>;
  reply_to?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  commenter_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  replied_to_commenter_name?: InputMaybe<Order_By>;
  reply_to?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  commenter_name?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  episode?: InputMaybe<Episodes_Order_By>;
  episode_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  is_like?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  replied_to_commenter_name?: InputMaybe<Order_By>;
  reply_count?: InputMaybe<Order_By>;
  reply_to?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  work?: InputMaybe<Works_Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
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
  Ip = 'ip',
  /** column name */
  RepliedToCommenterName = 'replied_to_commenter_name',
  /** column name */
  ReplyTo = 'reply_to',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  commenter_name?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  replied_to_commenter_name?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  commenter_name?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episode_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  replied_to_commenter_name?: InputMaybe<Scalars['String']['input']>;
  reply_to?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  work_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
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
  Ip = 'ip',
  /** column name */
  RepliedToCommenterName = 'replied_to_commenter_name',
  /** column name */
  ReplyTo = 'reply_to',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkId = 'work_id'
}

export type Comments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Comments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Comments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
  __typename?: 'comments_var_pop_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  work_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Daily_Episodes_Ranking_Args = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Daily_Works_Ranking_Args = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "episodes" */
export type Episodes = {
  __typename?: 'episodes';
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamp']['output']>;
  has_next_episode: Scalars['Boolean']['output'];
  has_prev_episode: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  next_episode_id?: Maybe<Scalars['uuid']['output']>;
  number: Scalars['Int']['output'];
  prev_episode_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamp']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  work: Works;
  work_id: Scalars['Int']['output'];
};


/** columns and relationships of "episodes" */
export type EpisodesChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "episodes" */
export type EpisodesChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "episodes" */
export type EpisodesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "episodes" */
export type EpisodesComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Episodes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Episodes_Select_Column_Episodes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Episodes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Episodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Episodes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "episodes" */
export type Episodes_Aggregate_Fields = {
  __typename?: 'episodes_aggregate_fields';
  avg?: Maybe<Episodes_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
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
  chats?: InputMaybe<Chats_Bool_Exp>;
  chats_aggregate?: InputMaybe<Chats_Aggregate_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
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
  number?: InputMaybe<Scalars['Int']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "episodes" */
export type Episodes_Insert_Input = {
  chats?: InputMaybe<Chats_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamp']['input']>;
  has_next_episode?: InputMaybe<Scalars['Boolean']['input']>;
  has_prev_episode?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  next_episode_id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  prev_episode_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  work?: InputMaybe<Works_Obj_Rel_Insert_Input>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Episodes_Max_Fields = {
  __typename?: 'episodes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  next_episode_id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  prev_episode_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
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
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  next_episode_id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  prev_episode_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
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
  affected_rows: Scalars['Int']['output'];
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
  chats_aggregate?: InputMaybe<Chats_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
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
  id: Scalars['uuid']['input'];
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamp']['input']>;
  has_next_episode?: InputMaybe<Scalars['Boolean']['input']>;
  has_prev_episode?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  next_episode_id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  prev_episode_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Episodes_Stddev_Fields = {
  __typename?: 'episodes_stddev_fields';
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "episodes" */
export type Episodes_Stddev_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Episodes_Stddev_Pop_Fields = {
  __typename?: 'episodes_stddev_pop_fields';
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "episodes" */
export type Episodes_Stddev_Pop_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Episodes_Stddev_Samp_Fields = {
  __typename?: 'episodes_stddev_samp_fields';
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamp']['input']>;
  has_next_episode?: InputMaybe<Scalars['Boolean']['input']>;
  has_prev_episode?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  next_episode_id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  prev_episode_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  work_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Episodes_Sum_Fields = {
  __typename?: 'episodes_sum_fields';
  number?: Maybe<Scalars['Int']['output']>;
  work_id?: Maybe<Scalars['Int']['output']>;
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
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "episodes" */
export type Episodes_Var_Pop_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Episodes_Var_Samp_Fields = {
  __typename?: 'episodes_var_samp_fields';
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "episodes" */
export type Episodes_Var_Samp_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Episodes_Variance_Fields = {
  __typename?: 'episodes_variance_fields';
  number?: Maybe<Scalars['Float']['output']>;
  work_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "episodes" */
export type Episodes_Variance_Order_By = {
  number?: InputMaybe<Order_By>;
  work_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  /** An object relationship */
  comment: Comments;
  comment_id: Scalars['uuid']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "likes" */
export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

export type Likes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Likes_Aggregate_Bool_Exp_Count>;
};

export type Likes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Likes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'likes_aggregate_fields';
  avg?: Maybe<Likes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
  stddev?: Maybe<Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Likes_Sum_Fields>;
  var_pop?: Maybe<Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Likes_Var_Samp_Fields>;
  variance?: Maybe<Likes_Variance_Fields>;
};


/** aggregate fields of "likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  avg?: InputMaybe<Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Likes_Max_Order_By>;
  min?: InputMaybe<Likes_Min_Order_By>;
  stddev?: InputMaybe<Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "likes" */
export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Likes_Avg_Fields = {
  __typename?: 'likes_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "likes" */
export type Likes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Likes_Bool_Exp>>;
  _not?: InputMaybe<Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Likes_Bool_Exp>>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint on columns "id" */
  LikesPkey = 'likes_pkey',
  /** unique or primary key constraint on columns "comment_id", "user_id" */
  LikesUserIdCommentIdKey = 'likes_user_id_comment_id_key'
}

/** input type for incrementing numeric columns in table "likes" */
export type Likes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "likes" */
export type Likes_Insert_Input = {
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  comment_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "likes" */
export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on_conflict condition type for table "likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns?: Array<Likes_Update_Column>;
  where?: InputMaybe<Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "likes". */
export type Likes_Order_By = {
  comment?: InputMaybe<Comments_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: likes */
export type Likes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "likes" */
export type Likes_Set_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Likes_Stddev_Fields = {
  __typename?: 'likes_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "likes" */
export type Likes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Likes_Stddev_Pop_Fields = {
  __typename?: 'likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "likes" */
export type Likes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Likes_Stddev_Samp_Fields = {
  __typename?: 'likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "likes" */
export type Likes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "likes" */
export type Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Likes_Stream_Cursor_Value_Input = {
  comment_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Likes_Sum_Fields = {
  __typename?: 'likes_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "likes" */
export type Likes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "likes" */
export enum Likes_Update_Column {
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Likes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Likes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Likes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Likes_Var_Pop_Fields = {
  __typename?: 'likes_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "likes" */
export type Likes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Likes_Var_Samp_Fields = {
  __typename?: 'likes_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "likes" */
export type Likes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Likes_Variance_Fields = {
  __typename?: 'likes_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "likes" */
export type Likes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "media_types" */
export type Media_Types = {
  __typename?: 'media_types';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
};


/** columns and relationships of "media_types" */
export type Media_TypesWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


/** columns and relationships of "media_types" */
export type Media_TypesWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Media_Types_Avg_Fields = {
  __typename?: 'media_types_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
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
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "media_types" */
export type Media_Types_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  works?: InputMaybe<Works_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Media_Types_Max_Fields = {
  __typename?: 'media_types_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Media_Types_Min_Fields = {
  __typename?: 'media_types_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "media_types" */
export type Media_Types_Mutation_Response = {
  __typename?: 'media_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  id: Scalars['Int']['input'];
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
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Media_Types_Stddev_Fields = {
  __typename?: 'media_types_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Media_Types_Stddev_Pop_Fields = {
  __typename?: 'media_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Media_Types_Stddev_Samp_Fields = {
  __typename?: 'media_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
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
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Media_Types_Sum_Fields = {
  __typename?: 'media_types_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
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
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Media_Types_Var_Samp_Fields = {
  __typename?: 'media_types_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Media_Types_Variance_Fields = {
  __typename?: 'media_types_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "chats" */
  delete_chats?: Maybe<Chats_Mutation_Response>;
  /** delete single row from the table: "chats" */
  delete_chats_by_pk?: Maybe<Chats>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "episodes" */
  delete_episodes?: Maybe<Episodes_Mutation_Response>;
  /** delete single row from the table: "episodes" */
  delete_episodes_by_pk?: Maybe<Episodes>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "media_types" */
  delete_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** delete single row from the table: "media_types" */
  delete_media_types_by_pk?: Maybe<Media_Types>;
  /** delete data from the table: "request_works" */
  delete_request_works?: Maybe<Request_Works_Mutation_Response>;
  /** delete single row from the table: "request_works" */
  delete_request_works_by_pk?: Maybe<Request_Works>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "works" */
  delete_works?: Maybe<Works_Mutation_Response>;
  /** delete single row from the table: "works" */
  delete_works_by_pk?: Maybe<Works>;
  /** insert data into the table: "chats" */
  insert_chats?: Maybe<Chats_Mutation_Response>;
  /** insert a single row into the table: "chats" */
  insert_chats_one?: Maybe<Chats>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "episodes" */
  insert_episodes?: Maybe<Episodes_Mutation_Response>;
  /** insert a single row into the table: "episodes" */
  insert_episodes_one?: Maybe<Episodes>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "media_types" */
  insert_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** insert a single row into the table: "media_types" */
  insert_media_types_one?: Maybe<Media_Types>;
  /** insert data into the table: "request_works" */
  insert_request_works?: Maybe<Request_Works_Mutation_Response>;
  /** insert a single row into the table: "request_works" */
  insert_request_works_one?: Maybe<Request_Works>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "works" */
  insert_works?: Maybe<Works_Mutation_Response>;
  /** insert a single row into the table: "works" */
  insert_works_one?: Maybe<Works>;
  /** update data of the table: "chats" */
  update_chats?: Maybe<Chats_Mutation_Response>;
  /** update single row of the table: "chats" */
  update_chats_by_pk?: Maybe<Chats>;
  /** update multiples rows of table: "chats" */
  update_chats_many?: Maybe<Array<Maybe<Chats_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "episodes" */
  update_episodes?: Maybe<Episodes_Mutation_Response>;
  /** update single row of the table: "episodes" */
  update_episodes_by_pk?: Maybe<Episodes>;
  /** update multiples rows of table: "episodes" */
  update_episodes_many?: Maybe<Array<Maybe<Episodes_Mutation_Response>>>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update multiples rows of table: "likes" */
  update_likes_many?: Maybe<Array<Maybe<Likes_Mutation_Response>>>;
  /** update data of the table: "media_types" */
  update_media_types?: Maybe<Media_Types_Mutation_Response>;
  /** update single row of the table: "media_types" */
  update_media_types_by_pk?: Maybe<Media_Types>;
  /** update multiples rows of table: "media_types" */
  update_media_types_many?: Maybe<Array<Maybe<Media_Types_Mutation_Response>>>;
  /** update data of the table: "request_works" */
  update_request_works?: Maybe<Request_Works_Mutation_Response>;
  /** update single row of the table: "request_works" */
  update_request_works_by_pk?: Maybe<Request_Works>;
  /** update multiples rows of table: "request_works" */
  update_request_works_many?: Maybe<Array<Maybe<Request_Works_Mutation_Response>>>;
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
export type Mutation_RootDelete_ChatsArgs = {
  where: Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EpisodesArgs = {
  where: Episodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Episodes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Media_TypesArgs = {
  where: Media_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Request_WorksArgs = {
  where: Request_Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Request_Works_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorksArgs = {
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ChatsArgs = {
  objects: Array<Chats_Insert_Input>;
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chats_OneArgs = {
  object: Chats_Insert_Input;
  on_conflict?: InputMaybe<Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
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
export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: InputMaybe<Likes_On_Conflict>;
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
export type Mutation_RootInsert_Request_WorksArgs = {
  objects: Array<Request_Works_Insert_Input>;
  on_conflict?: InputMaybe<Request_Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Request_Works_OneArgs = {
  object: Request_Works_Insert_Input;
  on_conflict?: InputMaybe<Request_Works_On_Conflict>;
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
export type Mutation_RootUpdate_ChatsArgs = {
  _inc?: InputMaybe<Chats_Inc_Input>;
  _set?: InputMaybe<Chats_Set_Input>;
  where: Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chats_By_PkArgs = {
  _inc?: InputMaybe<Chats_Inc_Input>;
  _set?: InputMaybe<Chats_Set_Input>;
  pk_columns: Chats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chats_ManyArgs = {
  updates: Array<Chats_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _inc?: InputMaybe<Comments_Inc_Input>;
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _inc?: InputMaybe<Comments_Inc_Input>;
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
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
export type Mutation_RootUpdate_LikesArgs = {
  _inc?: InputMaybe<Likes_Inc_Input>;
  _set?: InputMaybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _inc?: InputMaybe<Likes_Inc_Input>;
  _set?: InputMaybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_ManyArgs = {
  updates: Array<Likes_Updates>;
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
export type Mutation_RootUpdate_Request_WorksArgs = {
  _inc?: InputMaybe<Request_Works_Inc_Input>;
  _set?: InputMaybe<Request_Works_Set_Input>;
  where: Request_Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Request_Works_By_PkArgs = {
  _inc?: InputMaybe<Request_Works_Inc_Input>;
  _set?: InputMaybe<Request_Works_Set_Input>;
  pk_columns: Request_Works_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Request_Works_ManyArgs = {
  updates: Array<Request_Works_Updates>;
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
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** execute function "chats_by_episode_id" which returns "chats" */
  chats_by_episode_id: Array<Chats>;
  /** execute function "chats_by_episode_id" and query aggregates on result of table type "chats" */
  chats_by_episode_id_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** execute function "chats_by_work_id" which returns "chats" */
  chats_by_work_id: Array<Chats>;
  /** execute function "chats_by_work_id" and query aggregates on result of table type "chats" */
  chats_by_work_id_aggregate: Chats_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** execute function "daily_episodes_ranking" which returns "episodes" */
  daily_episodes_ranking: Array<Episodes>;
  /** execute function "daily_episodes_ranking" and query aggregates on result of table type "episodes" */
  daily_episodes_ranking_aggregate: Episodes_Aggregate;
  /** execute function "daily_works_ranking" which returns "works" */
  daily_works_ranking: Array<Works>;
  /** execute function "daily_works_ranking" and query aggregates on result of table type "works" */
  daily_works_ranking_aggregate: Works_Aggregate;
  /** An array relationship */
  episodes: Array<Episodes>;
  /** An aggregate relationship */
  episodes_aggregate: Episodes_Aggregate;
  /** fetch data from the table: "episodes" using primary key columns */
  episodes_by_pk?: Maybe<Episodes>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table: "media_types" */
  media_types: Array<Media_Types>;
  /** fetch aggregated fields from the table: "media_types" */
  media_types_aggregate: Media_Types_Aggregate;
  /** fetch data from the table: "media_types" using primary key columns */
  media_types_by_pk?: Maybe<Media_Types>;
  /** execute function "replies" which returns "comments" */
  replies: Array<Comments>;
  /** execute function "replies" and query aggregates on result of table type "comments" */
  replies_aggregate: Comments_Aggregate;
  /** An array relationship */
  request_works: Array<Request_Works>;
  /** An aggregate relationship */
  request_works_aggregate: Request_Works_Aggregate;
  /** fetch data from the table: "request_works" using primary key columns */
  request_works_by_pk?: Maybe<Request_Works>;
  /** execute function "search_works" which returns "works" */
  search_works: Array<Works>;
  /** execute function "search_works" and query aggregates on result of table type "works" */
  search_works_aggregate: Works_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** execute function "weekly_works" which returns "works" */
  weekly_works: Array<Works>;
  /** execute function "weekly_works" and query aggregates on result of table type "works" */
  weekly_works_aggregate: Works_Aggregate;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
  /** execute function "works_all_ranking" which returns "works" */
  works_all_ranking: Array<Works>;
  /** execute function "works_all_ranking" and query aggregates on result of table type "works" */
  works_all_ranking_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
};


export type Query_RootChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_By_Episode_IdArgs = {
  args: Chats_By_Episode_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_By_Episode_Id_AggregateArgs = {
  args: Chats_By_Episode_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootChats_By_Work_IdArgs = {
  args: Chats_By_Work_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootChats_By_Work_Id_AggregateArgs = {
  args: Chats_By_Work_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDaily_Episodes_RankingArgs = {
  args: Daily_Episodes_Ranking_Args;
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Query_RootDaily_Episodes_Ranking_AggregateArgs = {
  args: Daily_Episodes_Ranking_Args;
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Query_RootDaily_Works_RankingArgs = {
  args: Daily_Works_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootDaily_Works_Ranking_AggregateArgs = {
  args: Daily_Works_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootEpisodesArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Query_RootEpisodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Query_RootEpisodes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMedia_TypesArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Query_RootMedia_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Query_RootMedia_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRepliesArgs = {
  args: Replies_Args;
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootReplies_AggregateArgs = {
  args: Replies_Args;
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootRequest_WorksArgs = {
  distinct_on?: InputMaybe<Array<Request_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Works_Order_By>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};


export type Query_RootRequest_Works_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Works_Order_By>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};


export type Query_RootRequest_Works_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSearch_WorksArgs = {
  args: Search_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootSearch_Works_AggregateArgs = {
  args: Search_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootWeekly_WorksArgs = {
  args: Weekly_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWeekly_Works_AggregateArgs = {
  args: Weekly_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_All_RankingArgs = {
  args: Works_All_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_All_Ranking_AggregateArgs = {
  args: Works_All_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Query_RootWorks_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Replies_Args = {
  _reply_to?: InputMaybe<Scalars['uuid']['input']>;
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  reply_limit?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "request_works" */
export type Request_Works = {
  __typename?: 'request_works';
  created_at: Scalars['timestamptz']['output'];
  detail?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  official_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_title: Scalars['String']['output'];
};

/** aggregated selection of "request_works" */
export type Request_Works_Aggregate = {
  __typename?: 'request_works_aggregate';
  aggregate?: Maybe<Request_Works_Aggregate_Fields>;
  nodes: Array<Request_Works>;
};

export type Request_Works_Aggregate_Bool_Exp = {
  count?: InputMaybe<Request_Works_Aggregate_Bool_Exp_Count>;
};

export type Request_Works_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Request_Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Request_Works_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "request_works" */
export type Request_Works_Aggregate_Fields = {
  __typename?: 'request_works_aggregate_fields';
  avg?: Maybe<Request_Works_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Request_Works_Max_Fields>;
  min?: Maybe<Request_Works_Min_Fields>;
  stddev?: Maybe<Request_Works_Stddev_Fields>;
  stddev_pop?: Maybe<Request_Works_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Request_Works_Stddev_Samp_Fields>;
  sum?: Maybe<Request_Works_Sum_Fields>;
  var_pop?: Maybe<Request_Works_Var_Pop_Fields>;
  var_samp?: Maybe<Request_Works_Var_Samp_Fields>;
  variance?: Maybe<Request_Works_Variance_Fields>;
};


/** aggregate fields of "request_works" */
export type Request_Works_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Request_Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "request_works" */
export type Request_Works_Aggregate_Order_By = {
  avg?: InputMaybe<Request_Works_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Request_Works_Max_Order_By>;
  min?: InputMaybe<Request_Works_Min_Order_By>;
  stddev?: InputMaybe<Request_Works_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Request_Works_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Request_Works_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Request_Works_Sum_Order_By>;
  var_pop?: InputMaybe<Request_Works_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Request_Works_Var_Samp_Order_By>;
  variance?: InputMaybe<Request_Works_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "request_works" */
export type Request_Works_Arr_Rel_Insert_Input = {
  data: Array<Request_Works_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Request_Works_On_Conflict>;
};

/** aggregate avg on columns */
export type Request_Works_Avg_Fields = {
  __typename?: 'request_works_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "request_works" */
export type Request_Works_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "request_works". All fields are combined with a logical 'AND'. */
export type Request_Works_Bool_Exp = {
  _and?: InputMaybe<Array<Request_Works_Bool_Exp>>;
  _not?: InputMaybe<Request_Works_Bool_Exp>;
  _or?: InputMaybe<Array<Request_Works_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  detail?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  official_url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  work_title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "request_works" */
export enum Request_Works_Constraint {
  /** unique or primary key constraint on columns "id" */
  RequestWorksPkey = 'request_works_pkey'
}

/** input type for incrementing numeric columns in table "request_works" */
export type Request_Works_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "request_works" */
export type Request_Works_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  official_url?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Request_Works_Max_Fields = {
  __typename?: 'request_works_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  official_url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "request_works" */
export type Request_Works_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  official_url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Request_Works_Min_Fields = {
  __typename?: 'request_works_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  official_url?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  work_title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "request_works" */
export type Request_Works_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  official_url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "request_works" */
export type Request_Works_Mutation_Response = {
  __typename?: 'request_works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Request_Works>;
};

/** on_conflict condition type for table "request_works" */
export type Request_Works_On_Conflict = {
  constraint: Request_Works_Constraint;
  update_columns?: Array<Request_Works_Update_Column>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};

/** Ordering options when selecting data from "request_works". */
export type Request_Works_Order_By = {
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  official_url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  work_title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: request_works */
export type Request_Works_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "request_works" */
export enum Request_Works_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  OfficialUrl = 'official_url',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkTitle = 'work_title'
}

/** input type for updating data in table "request_works" */
export type Request_Works_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  official_url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Request_Works_Stddev_Fields = {
  __typename?: 'request_works_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "request_works" */
export type Request_Works_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Request_Works_Stddev_Pop_Fields = {
  __typename?: 'request_works_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "request_works" */
export type Request_Works_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Request_Works_Stddev_Samp_Fields = {
  __typename?: 'request_works_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "request_works" */
export type Request_Works_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "request_works" */
export type Request_Works_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Request_Works_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Request_Works_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  official_url?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  work_title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Request_Works_Sum_Fields = {
  __typename?: 'request_works_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "request_works" */
export type Request_Works_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "request_works" */
export enum Request_Works_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  OfficialUrl = 'official_url',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WorkTitle = 'work_title'
}

export type Request_Works_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Request_Works_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Request_Works_Set_Input>;
  /** filter the rows which have to be updated */
  where: Request_Works_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Request_Works_Var_Pop_Fields = {
  __typename?: 'request_works_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "request_works" */
export type Request_Works_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Request_Works_Var_Samp_Fields = {
  __typename?: 'request_works_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "request_works" */
export type Request_Works_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Request_Works_Variance_Fields = {
  __typename?: 'request_works_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "request_works" */
export type Request_Works_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Search_Works_Args = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** execute function "chats_by_episode_id" which returns "chats" */
  chats_by_episode_id: Array<Chats>;
  /** execute function "chats_by_episode_id" and query aggregates on result of table type "chats" */
  chats_by_episode_id_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** execute function "chats_by_work_id" which returns "chats" */
  chats_by_work_id: Array<Chats>;
  /** execute function "chats_by_work_id" and query aggregates on result of table type "chats" */
  chats_by_work_id_aggregate: Chats_Aggregate;
  /** fetch data from the table in a streaming manner: "chats" */
  chats_stream: Array<Chats>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** execute function "daily_episodes_ranking" which returns "episodes" */
  daily_episodes_ranking: Array<Episodes>;
  /** execute function "daily_episodes_ranking" and query aggregates on result of table type "episodes" */
  daily_episodes_ranking_aggregate: Episodes_Aggregate;
  /** execute function "daily_works_ranking" which returns "works" */
  daily_works_ranking: Array<Works>;
  /** execute function "daily_works_ranking" and query aggregates on result of table type "works" */
  daily_works_ranking_aggregate: Works_Aggregate;
  /** An array relationship */
  episodes: Array<Episodes>;
  /** An aggregate relationship */
  episodes_aggregate: Episodes_Aggregate;
  /** fetch data from the table: "episodes" using primary key columns */
  episodes_by_pk?: Maybe<Episodes>;
  /** fetch data from the table in a streaming manner: "episodes" */
  episodes_stream: Array<Episodes>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** fetch data from the table in a streaming manner: "likes" */
  likes_stream: Array<Likes>;
  /** fetch data from the table: "media_types" */
  media_types: Array<Media_Types>;
  /** fetch aggregated fields from the table: "media_types" */
  media_types_aggregate: Media_Types_Aggregate;
  /** fetch data from the table: "media_types" using primary key columns */
  media_types_by_pk?: Maybe<Media_Types>;
  /** fetch data from the table in a streaming manner: "media_types" */
  media_types_stream: Array<Media_Types>;
  /** execute function "replies" which returns "comments" */
  replies: Array<Comments>;
  /** execute function "replies" and query aggregates on result of table type "comments" */
  replies_aggregate: Comments_Aggregate;
  /** An array relationship */
  request_works: Array<Request_Works>;
  /** An aggregate relationship */
  request_works_aggregate: Request_Works_Aggregate;
  /** fetch data from the table: "request_works" using primary key columns */
  request_works_by_pk?: Maybe<Request_Works>;
  /** fetch data from the table in a streaming manner: "request_works" */
  request_works_stream: Array<Request_Works>;
  /** execute function "search_works" which returns "works" */
  search_works: Array<Works>;
  /** execute function "search_works" and query aggregates on result of table type "works" */
  search_works_aggregate: Works_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** execute function "weekly_works" which returns "works" */
  weekly_works: Array<Works>;
  /** execute function "weekly_works" and query aggregates on result of table type "works" */
  weekly_works_aggregate: Works_Aggregate;
  /** An array relationship */
  works: Array<Works>;
  /** An aggregate relationship */
  works_aggregate: Works_Aggregate;
  /** execute function "works_all_ranking" which returns "works" */
  works_all_ranking: Array<Works>;
  /** execute function "works_all_ranking" and query aggregates on result of table type "works" */
  works_all_ranking_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table in a streaming manner: "works" */
  works_stream: Array<Works>;
};


export type Subscription_RootChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_By_Episode_IdArgs = {
  args: Chats_By_Episode_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_By_Episode_Id_AggregateArgs = {
  args: Chats_By_Episode_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootChats_By_Work_IdArgs = {
  args: Chats_By_Work_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_By_Work_Id_AggregateArgs = {
  args: Chats_By_Work_Id_Args;
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootChats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chats_Stream_Cursor_Input>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootDaily_Episodes_RankingArgs = {
  args: Daily_Episodes_Ranking_Args;
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootDaily_Episodes_Ranking_AggregateArgs = {
  args: Daily_Episodes_Ranking_Args;
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootDaily_Works_RankingArgs = {
  args: Daily_Works_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootDaily_Works_Ranking_AggregateArgs = {
  args: Daily_Works_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootEpisodesArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootEpisodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootEpisodes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEpisodes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Episodes_Stream_Cursor_Input>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


export type Subscription_RootLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLikes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


export type Subscription_RootMedia_TypesArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMedia_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Media_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Types_Order_By>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootMedia_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMedia_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Types_Bool_Exp>;
};


export type Subscription_RootRepliesArgs = {
  args: Replies_Args;
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootReplies_AggregateArgs = {
  args: Replies_Args;
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootRequest_WorksArgs = {
  distinct_on?: InputMaybe<Array<Request_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Works_Order_By>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};


export type Subscription_RootRequest_Works_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Works_Order_By>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};


export type Subscription_RootRequest_Works_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRequest_Works_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Request_Works_Stream_Cursor_Input>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};


export type Subscription_RootSearch_WorksArgs = {
  args: Search_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootSearch_Works_AggregateArgs = {
  args: Search_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWeekly_WorksArgs = {
  args: Weekly_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWeekly_Works_AggregateArgs = {
  args: Weekly_Works_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorksArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_All_RankingArgs = {
  args: Works_All_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_All_Ranking_AggregateArgs = {
  args: Works_All_Ranking_Args;
  distinct_on?: InputMaybe<Array<Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Works_Order_By>>;
  where?: InputMaybe<Works_Bool_Exp>;
};


export type Subscription_RootWorks_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootWorks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Works_Stream_Cursor_Input>>;
  where?: InputMaybe<Works_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  anonymous: Scalars['Boolean']['output'];
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** An array relationship */
  request_works: Array<Request_Works>;
  /** An aggregate relationship */
  request_works_aggregate: Request_Works_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "users" */
export type UsersChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLikesArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Likes_Order_By>>;
  where?: InputMaybe<Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRequest_WorksArgs = {
  distinct_on?: InputMaybe<Array<Request_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Works_Order_By>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRequest_Works_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Works_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Works_Order_By>>;
  where?: InputMaybe<Request_Works_Bool_Exp>;
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
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  chats?: InputMaybe<Chats_Bool_Exp>;
  chats_aggregate?: InputMaybe<Chats_Aggregate_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  likes?: InputMaybe<Likes_Bool_Exp>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Bool_Exp>;
  request_works?: InputMaybe<Request_Works_Bool_Exp>;
  request_works_aggregate?: InputMaybe<Request_Works_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  chats?: InputMaybe<Chats_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Likes_Arr_Rel_Insert_Input>;
  request_works?: InputMaybe<Request_Works_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  chats_aggregate?: InputMaybe<Chats_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Likes_Aggregate_Order_By>;
  request_works_aggregate?: InputMaybe<Request_Works_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
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
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type Weekly_Works_Args = {
  limit_num?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "works" */
export type Works = {
  __typename?: 'works';
  /** An array relationship */
  chats: Array<Chats>;
  /** An aggregate relationship */
  chats_aggregate: Chats_Aggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  episodes: Array<Episodes>;
  /** An aggregate relationship */
  episodes_aggregate: Episodes_Aggregate;
  has_episodes?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  media_type?: Maybe<Media_Types>;
  media_type_id?: Maybe<Scalars['Int']['output']>;
  season_name?: Maybe<Scalars['String']['output']>;
  season_year?: Maybe<Scalars['Int']['output']>;
  series_id?: Maybe<Scalars['String']['output']>;
  series_title: Scalars['String']['output'];
  tid?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};


/** columns and relationships of "works" */
export type WorksChatsArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chats_Order_By>>;
  where?: InputMaybe<Chats_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksEpisodesArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Episodes_Order_By>>;
  where?: InputMaybe<Episodes_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksEpisodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Episodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Works_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Works_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Works_Select_Column_Works_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Works_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Works_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Works_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Works_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "works" */
export type Works_Aggregate_Fields = {
  __typename?: 'works_aggregate_fields';
  avg?: Maybe<Works_Avg_Fields>;
  count: Scalars['Int']['output'];
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
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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

export type Works_All_Ranking_Args = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
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
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
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
  chats?: InputMaybe<Chats_Bool_Exp>;
  chats_aggregate?: InputMaybe<Chats_Aggregate_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
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
};

/** unique or primary key constraints on table "works" */
export enum Works_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorksPkey = 'works_pkey',
  /** unique or primary key constraint on columns "series_title", "title", "media_type_id" */
  WorksTitleSeriesTitleMediaTypeIdKey = 'works_title_series_title_media_type_id_key'
}

/** input type for incrementing numeric columns in table "works" */
export type Works_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  media_type_id?: InputMaybe<Scalars['Int']['input']>;
  season_year?: InputMaybe<Scalars['Int']['input']>;
  tid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  chats?: InputMaybe<Chats_Arr_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  episodes?: InputMaybe<Episodes_Arr_Rel_Insert_Input>;
  has_episodes?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  media_type?: InputMaybe<Media_Types_Obj_Rel_Insert_Input>;
  media_type_id?: InputMaybe<Scalars['Int']['input']>;
  season_name?: InputMaybe<Scalars['String']['input']>;
  season_year?: InputMaybe<Scalars['Int']['input']>;
  series_id?: InputMaybe<Scalars['String']['input']>;
  series_title?: InputMaybe<Scalars['String']['input']>;
  tid?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  media_type_id?: Maybe<Scalars['Int']['output']>;
  season_name?: Maybe<Scalars['String']['output']>;
  season_year?: Maybe<Scalars['Int']['output']>;
  series_id?: Maybe<Scalars['String']['output']>;
  series_title?: Maybe<Scalars['String']['output']>;
  tid?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  media_type_id?: Maybe<Scalars['Int']['output']>;
  season_name?: Maybe<Scalars['String']['output']>;
  season_year?: Maybe<Scalars['Int']['output']>;
  series_id?: Maybe<Scalars['String']['output']>;
  series_title?: Maybe<Scalars['String']['output']>;
  tid?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  chats_aggregate?: InputMaybe<Chats_Aggregate_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
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
};

/** primary key columns input for table: works */
export type Works_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
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
  Title = 'title'
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  has_episodes?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  media_type_id?: InputMaybe<Scalars['Int']['input']>;
  season_name?: InputMaybe<Scalars['String']['input']>;
  season_year?: InputMaybe<Scalars['Int']['input']>;
  series_id?: InputMaybe<Scalars['String']['input']>;
  series_title?: InputMaybe<Scalars['String']['input']>;
  tid?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Works_Stddev_Fields = {
  __typename?: 'works_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
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
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
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
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  has_episodes?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  media_type_id?: InputMaybe<Scalars['Int']['input']>;
  season_name?: InputMaybe<Scalars['String']['input']>;
  season_year?: InputMaybe<Scalars['Int']['input']>;
  series_id?: InputMaybe<Scalars['String']['input']>;
  series_title?: InputMaybe<Scalars['String']['input']>;
  tid?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Works_Sum_Fields = {
  __typename?: 'works_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  media_type_id?: Maybe<Scalars['Int']['output']>;
  season_year?: Maybe<Scalars['Int']['output']>;
  tid?: Maybe<Scalars['Int']['output']>;
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
  Title = 'title'
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
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
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
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
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
  id?: Maybe<Scalars['Float']['output']>;
  media_type_id?: Maybe<Scalars['Float']['output']>;
  season_year?: Maybe<Scalars['Float']['output']>;
  tid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "works" */
export type Works_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  season_year?: InputMaybe<Order_By>;
  tid?: InputMaybe<Order_By>;
};

export type ChatFragmentFragment = { __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null };

export type GetChatsEpisodeQueryVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
  get_limit: Scalars['Int']['input'];
  _lt: Scalars['Int']['input'];
  _gte: Scalars['Int']['input'];
}>;


export type GetChatsEpisodeQuery = { __typename?: 'query_root', chats_by_episode_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };

export type GetChatsWorkQueryVariables = Exact<{
  work_id: Scalars['Int']['input'];
  get_limit: Scalars['Int']['input'];
  _lt: Scalars['Int']['input'];
  _gte: Scalars['Int']['input'];
}>;


export type GetChatsWorkQuery = { __typename?: 'query_root', chats_by_work_id: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };

export type InsertChatMutationVariables = Exact<{
  object: Chats_Insert_Input;
}>;


export type InsertChatMutation = { __typename?: 'mutation_root', insert_chats_one?: { __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null } | null };

export type SubscriptionChatsSubscriptionVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
  initial_created_at: Scalars['timestamptz']['input'];
}>;


export type SubscriptionChatsSubscription = { __typename?: 'subscription_root', chats_stream: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };

export type GetChatsQueryVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
}>;


export type GetChatsQuery = { __typename?: 'query_root', chats: Array<{ __typename?: 'chats', content: string, work_id?: number | null, user_id?: string | null, comment_time: number, id: any, episode_id?: any | null, created_at: any, commenter_name: string, user?: { __typename?: 'users', anonymous: boolean, id: string } | null }> };

export type CommentFragmentFragment = { __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } };

export type GetCommentsEpisodeQueryVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<Comments_Order_By> | Comments_Order_By>;
}>;


export type GetCommentsEpisodeQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetCommentsEpisodeByLikesQueryVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  likes_cursor?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<Comments_Order_By> | Comments_Order_By>;
}>;


export type GetCommentsEpisodeByLikesQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetLatestEpisodeCommentQueryVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<Comments_Order_By> | Comments_Order_By>;
}>;


export type GetLatestEpisodeCommentQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetLatestWorkCommentQueryVariables = Exact<{
  work_id: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<Comments_Order_By> | Comments_Order_By>;
}>;


export type GetLatestWorkCommentQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetCommentsWorkQueryVariables = Exact<{
  work_id: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<Comments_Order_By> | Comments_Order_By>;
}>;


export type GetCommentsWorkQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetCommentsWorkByLikesQueryVariables = Exact<{
  work_id: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['timestamptz']['input']>;
  likes_cursor?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<Comments_Order_By> | Comments_Order_By>;
}>;


export type GetCommentsWorkByLikesQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type GetRepliesQueryVariables = Exact<{
  _reply_to: Scalars['uuid']['input'];
  cursor: Scalars['timestamptz']['input'];
  reply_limit: Scalars['Int']['input'];
}>;


export type GetRepliesQuery = { __typename?: 'query_root', replies: Array<{ __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_to?: any | null, replied_to_commenter_name?: string | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } }> };

export type MutateEpisodeCommentMutationVariables = Exact<{
  episode_id: Scalars['uuid']['input'];
  content: Scalars['String']['input'];
  reply_to?: InputMaybe<Scalars['uuid']['input']>;
  replied_to_commenter_name?: InputMaybe<Scalars['String']['input']>;
  commenter_name: Scalars['String']['input'];
  ip?: InputMaybe<Scalars['String']['input']>;
}>;


export type MutateEpisodeCommentMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } } | null };

export type MutateWorkCommentMutationVariables = Exact<{
  work_id: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  reply_to?: InputMaybe<Scalars['uuid']['input']>;
  replied_to_commenter_name?: InputMaybe<Scalars['String']['input']>;
  commenter_name: Scalars['String']['input'];
  ip?: InputMaybe<Scalars['String']['input']>;
}>;


export type MutateWorkCommentMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', content: string, work_id?: number | null, user_id?: string | null, id: any, episode_id?: any | null, created_at: any, commenter_name: string, reply_count?: any | null, is_like?: boolean | null, user?: { __typename?: 'users', anonymous: boolean, id: string } | null, likes_aggregate: { __typename?: 'likes_aggregate', aggregate?: { __typename?: 'likes_aggregate_fields', count: number } | null } } | null };

export type GetTodayEpisodesQueryVariables = Exact<{
  where: Episodes_Bool_Exp;
}>;


export type GetTodayEpisodesQuery = { __typename?: 'query_root', episodes: Array<{ __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, next_episode_id?: any | null, work: { __typename?: 'works', id: number, title: string, series_title: string, series_id?: string | null, has_episodes?: boolean | null, tid?: number | null } }> };

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetEpisodeQuery = { __typename?: 'query_root', episodes_by_pk?: { __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, next_episode_id?: any | null, work: { __typename?: 'works', id: number, title: string, series_title: string, series_id?: string | null, has_episodes?: boolean | null } } | null };

export type GetLiveIdsQueryVariables = Exact<{
  where: Episodes_Bool_Exp;
}>;


export type GetLiveIdsQuery = { __typename?: 'query_root', episodes: Array<{ __typename?: 'episodes', id: any }> };

export type WorkFragmentFragment = { __typename?: 'works', id: number, title: string, series_title: string, series_id?: string | null, has_episodes?: boolean | null };

export type EpisodeFragmentFragment = { __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, next_episode_id?: any | null, work: { __typename?: 'works', id: number, title: string, series_title: string, series_id?: string | null, has_episodes?: boolean | null } };

export type TodayFragmentFragment = { __typename?: 'episodes', id: any, title: string, end_time?: any | null, start_time?: any | null, number: number, has_next_episode: boolean, has_prev_episode: boolean, next_episode_id?: any | null, work: { __typename?: 'works', id: number, title: string, series_title: string, series_id?: string | null, has_episodes?: boolean | null, tid?: number | null } };

export type FragmentWorkFragment = { __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null };

export type FragmentEpisodeFragment = { __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null };

export type InsertLikeMutationVariables = Exact<{
  object: Likes_Insert_Input;
}>;


export type InsertLikeMutation = { __typename?: 'mutation_root', insert_likes_one?: { __typename?: 'likes', id: number, user_id?: string | null, comment_id: any } | null };

export type DeleteLikeMutationVariables = Exact<{
  user_id: Scalars['String']['input'];
  comment_id: Scalars['uuid']['input'];
}>;


export type DeleteLikeMutation = { __typename?: 'mutation_root', delete_likes?: { __typename?: 'likes_mutation_response', returning: Array<{ __typename?: 'likes', id: number }> } | null };

export type InsertRequestMutationVariables = Exact<{
  object: Request_Works_Insert_Input;
}>;


export type InsertRequestMutation = { __typename?: 'mutation_root', insert_request_works_one?: { __typename?: 'request_works', id: number } | null };

export type GetSeasonWorksQueryVariables = Exact<{
  season: Scalars['String']['input'];
  year: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetSeasonWorksQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type SearchWorksQueryVariables = Exact<{
  search: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchWorksQuery = { __typename?: 'query_root', search_works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type GetWorkSeriesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  series_id: Scalars['String']['input'];
}>;


export type GetWorkSeriesQuery = { __typename?: 'query_root', works_by_pk?: { __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> } | null, works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type GetWorkQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWorkQuery = { __typename?: 'query_root', works_by_pk?: { __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null } | null };

export type GetSeriesQueryVariables = Exact<{
  series_id: Scalars['String']['input'];
}>;


export type GetSeriesQuery = { __typename?: 'query_root', works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export type GetWeeklyWorksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetWeeklyWorksQuery = { __typename?: 'query_root', weekly_works: Array<{ __typename?: 'works', title: string, series_title: string, series_id?: string | null, id: number, has_episodes?: boolean | null, episodes: Array<{ __typename?: 'episodes', title: string, start_time?: any | null, number: number, id: any, has_next_episode: boolean, next_episode_id?: any | null, end_time?: any | null }> }> };

export const ChatFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ChatFragmentFragment, unknown>;
export const CommentFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<CommentFragmentFragment, unknown>;
export const WorkFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}}]} as unknown as DocumentNode<WorkFragmentFragment, unknown>;
export const EpisodeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}}]}}]} as unknown as DocumentNode<EpisodeFragmentFragment, unknown>;
export const TodayFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodayFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"has_prev_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}},{"kind":"Field","name":{"kind":"Name","value":"tid"}}]}}]}}]} as unknown as DocumentNode<TodayFragmentFragment, unknown>;
export const FragmentWorkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}}]} as unknown as DocumentNode<FragmentWorkFragment, unknown>;
export const FragmentEpisodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEpisode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}}]}}]} as unknown as DocumentNode<FragmentEpisodeFragment, unknown>;
export const GetChatsEpisodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatsEpisode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"get_limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats_by_episode_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_episode_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"get_limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"get_limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"comment_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetChatsEpisodeQuery, GetChatsEpisodeQueryVariables>;
export const GetChatsWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatsWork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"get_limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats_by_work_id"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_work_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"get_limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"get_limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_gte"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_lt"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"comment_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetChatsWorkQuery, GetChatsWorkQueryVariables>;
export const InsertChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"chats_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_chats_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertChatMutation, InsertChatMutationVariables>;
export const SubscriptionChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscriptionChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"initial_created_at"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats_stream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"initial_value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"Variable","name":{"kind":"Name","value":"initial_created_at"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"ordering"},"value":{"kind":"EnumValue","value":"ASC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"batch_size"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"IntValue","value":"0"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionChatsSubscription, SubscriptionChatsSubscriptionVariables>;
export const GetChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment_time"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"IntValue","value":"0"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"comment_time"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"chats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_time"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetChatsQuery, GetChatsQueryVariables>;
export const GetCommentsEpisodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsEpisode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsEpisodeQuery, GetCommentsEpisodeQueryVariables>;
export const GetCommentsEpisodeByLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsEpisodeByLikes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likes_cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"likes_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likes_cursor"}}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsEpisodeByLikesQuery, GetCommentsEpisodeByLikesQueryVariables>;
export const GetLatestEpisodeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLatestEpisodeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetLatestEpisodeCommentQuery, GetLatestEpisodeCommentQueryVariables>;
export const GetLatestWorkCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLatestWorkComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"work_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetLatestWorkCommentQuery, GetLatestWorkCommentQueryVariables>;
export const GetCommentsWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsWork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"work_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsWorkQuery, GetCommentsWorkQueryVariables>;
export const GetCommentsWorkByLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsWorkByLikes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likes_cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"comments_order_by"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"work_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"likes_aggregate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"predicate"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likes_cursor"}}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsWorkByLikesQuery, GetCommentsWorkByLikesQueryVariables>;
export const GetRepliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReplies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_reply_to"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reply_limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_reply_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_reply_to"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reply_limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"reply_to"}},{"kind":"Field","name":{"kind":"Name","value":"replied_to_commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRepliesQuery, GetRepliesQueryVariables>;
export const MutateEpisodeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MutateEpisodeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reply_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"replied_to_commenter_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commenter_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_comments_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episode_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reply_to"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"replied_to_commenter_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"replied_to_commenter_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commenter_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commenter_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ip"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<MutateEpisodeCommentMutation, MutateEpisodeCommentMutationVariables>;
export const MutateWorkCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MutateWorkComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reply_to"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"replied_to_commenter_name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commenter_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_comments_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"work_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"work_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"reply_to"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reply_to"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"replied_to_commenter_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"replied_to_commenter_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commenter_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commenter_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ip"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"work_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"commenter_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reply_count"}},{"kind":"Field","name":{"kind":"Name","value":"is_like"}},{"kind":"Field","name":{"kind":"Name","value":"likes_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<MutateWorkCommentMutation, MutateWorkCommentMutationVariables>;
export const GetTodayEpisodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodayEpisodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"episodes_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodayFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodayFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"has_prev_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}},{"kind":"Field","name":{"kind":"Name","value":"tid"}}]}}]}}]} as unknown as DocumentNode<GetTodayEpisodesQuery, GetTodayEpisodesQueryVariables>;
export const GetEpisodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEpisode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}}]} as unknown as DocumentNode<GetEpisodeQuery, GetEpisodeQueryVariables>;
export const GetLiveIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLiveIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"episodes_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_time"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetLiveIdsQuery, GetLiveIdsQueryVariables>;
export const InsertLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"likes_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_likes_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"likes_user_id_comment_id_key"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment_id"}}]}}]}}]} as unknown as DocumentNode<InsertLikeMutation, InsertLikeMutationVariables>;
export const DeleteLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_likes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"comment_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteLikeMutation, DeleteLikeMutationVariables>;
export const InsertRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"request_works_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_request_works_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertRequestMutation, InsertRequestMutationVariables>;
export const GetSeasonWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSeasonWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"season"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"season_year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"season_name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"season"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentEpisode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEpisode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}}]}}]} as unknown as DocumentNode<GetSeasonWorksQuery, GetSeasonWorksQueryVariables>;
export const SearchWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search_works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"_limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"series_title"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentEpisode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEpisode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}}]}}]} as unknown as DocumentNode<SearchWorksQuery, SearchWorksQueryVariables>;
export const GetWorkSeriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkSeries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"series_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentEpisode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"series_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"series_id"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"has_episodes"},"value":{"kind":"EnumValue","value":"desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentEpisode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEpisode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}}]}}]} as unknown as DocumentNode<GetWorkSeriesQuery, GetWorkSeriesQueryVariables>;
export const GetWorkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}}]} as unknown as DocumentNode<GetWorkQuery, GetWorkQueryVariables>;
export const GetSeriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSeries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"series_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"series_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"series_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"has_episodes"},"value":{"kind":"EnumValue","value":"desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentEpisode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEpisode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}}]}}]} as unknown as DocumentNode<GetSeriesQuery, GetSeriesQueryVariables>;
export const GetWeeklyWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWeeklyWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weekly_works"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit_num"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentWork"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FragmentEpisode"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentWork"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"works"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"series_title"}},{"kind":"Field","name":{"kind":"Name","value":"series_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_episodes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FragmentEpisode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"episodes"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"start_time"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"has_next_episode"}},{"kind":"Field","name":{"kind":"Name","value":"next_episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"end_time"}}]}}]} as unknown as DocumentNode<GetWeeklyWorksQuery, GetWeeklyWorksQueryVariables>;