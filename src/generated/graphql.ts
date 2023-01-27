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

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  key: Scalars['String'];
  /** An array relationship */
  topics: Array<Topics>;
  /** An aggregate relationship */
  topics_aggregate: Topics_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "category" */
export type CategoryInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryTopicsArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryTopics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  invites?: InputMaybe<Invites_Bool_Exp>;
  invites_aggregate?: InputMaybe<Invites_Aggregate_Bool_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  topics?: InputMaybe<Topics_Bool_Exp>;
  topics_aggregate?: InputMaybe<Topics_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "key" */
  CategoryPkey = 'category_pkey'
}

export enum Category_Enum {
  /** Anime */
  Anime = 'Anime',
  /** Doujinshi */
  Doujinshi = 'Doujinshi',
  /** Drama */
  Drama = 'Drama',
  /** Manga */
  Manga = 'Manga',
  /** Movie */
  Movie = 'Movie',
  /** Music */
  Music = 'Music',
  /** TV */
  Tv = 'TV',
  /** Weekly_Magazine */
  WeeklyMagazine = 'Weekly_Magazine',
  /** Youtube */
  Youtube = 'Youtube'
}

/** Boolean expression to compare columns of type "category_enum". All fields are combined with logical 'AND'. */
export type Category_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Category_Enum>;
  _in?: InputMaybe<Array<Category_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Category_Enum>;
  _nin?: InputMaybe<Array<Category_Enum>>;
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  invites?: InputMaybe<Invites_Arr_Rel_Insert_Input>;
  key?: InputMaybe<Scalars['String']>;
  topics?: InputMaybe<Topics_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  invites_aggregate?: InputMaybe<Invites_Aggregate_Order_By>;
  key?: InputMaybe<Order_By>;
  topics_aggregate?: InputMaybe<Topics_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

export type Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Category_Bool_Exp;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  invite: Invites;
  invite_id: Scalars['uuid'];
  spoiler: Scalars['Boolean'];
  time: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Comments_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Comments_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Bool_And = {
  arguments: Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Comments_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  avg?: Maybe<Comments_Avg_Fields>;
  count: Scalars['Int'];
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
  distinct?: InputMaybe<Scalars['Boolean']>;
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
  time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invite?: InputMaybe<Invites_Bool_Exp>;
  invite_id?: InputMaybe<Uuid_Comparison_Exp>;
  spoiler?: InputMaybe<Boolean_Comparison_Exp>;
  time?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for incrementing numeric columns in table "comments" */
export type Comments_Inc_Input = {
  time?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invite?: InputMaybe<Invites_Obj_Rel_Insert_Input>;
  invite_id?: InputMaybe<Scalars['uuid']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invite_id?: Maybe<Scalars['uuid']>;
  time?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invite_id?: Maybe<Scalars['uuid']>;
  time?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite?: InputMaybe<Invites_Order_By>;
  invite_id?: InputMaybe<Order_By>;
  spoiler?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InviteId = 'invite_id',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  Time = 'time',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "comments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "comments" */
export enum Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Spoiler = 'spoiler'
}

/** select "comments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "comments" */
export enum Comments_Select_Column_Comments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Spoiler = 'spoiler'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invite_id?: InputMaybe<Scalars['uuid']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
  __typename?: 'comments_stddev_fields';
  time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
  __typename?: 'comments_stddev_pop_fields';
  time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
  __typename?: 'comments_stddev_samp_fields';
  time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
  time?: InputMaybe<Order_By>;
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
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invite_id?: InputMaybe<Scalars['uuid']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
  __typename?: 'comments_sum_fields';
  time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InviteId = 'invite_id',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  Time = 'time',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
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
  time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
  __typename?: 'comments_var_samp_fields';
  time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
  __typename?: 'comments_variance_fields';
  time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
  time?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "invite_likes" */
export type Invite_Likes = {
  __typename?: 'invite_likes';
  id: Scalars['Int'];
  /** An object relationship */
  invite: Invites;
  invite_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "invite_likes" */
export type Invite_Likes_Aggregate = {
  __typename?: 'invite_likes_aggregate';
  aggregate?: Maybe<Invite_Likes_Aggregate_Fields>;
  nodes: Array<Invite_Likes>;
};

export type Invite_Likes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Invite_Likes_Aggregate_Bool_Exp_Count>;
};

export type Invite_Likes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Invite_Likes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "invite_likes" */
export type Invite_Likes_Aggregate_Fields = {
  __typename?: 'invite_likes_aggregate_fields';
  avg?: Maybe<Invite_Likes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Invite_Likes_Max_Fields>;
  min?: Maybe<Invite_Likes_Min_Fields>;
  stddev?: Maybe<Invite_Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Invite_Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Invite_Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Invite_Likes_Sum_Fields>;
  var_pop?: Maybe<Invite_Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Invite_Likes_Var_Samp_Fields>;
  variance?: Maybe<Invite_Likes_Variance_Fields>;
};


/** aggregate fields of "invite_likes" */
export type Invite_Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invite_likes" */
export type Invite_Likes_Aggregate_Order_By = {
  avg?: InputMaybe<Invite_Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Invite_Likes_Max_Order_By>;
  min?: InputMaybe<Invite_Likes_Min_Order_By>;
  stddev?: InputMaybe<Invite_Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Invite_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Invite_Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Invite_Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Invite_Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Invite_Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Invite_Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "invite_likes" */
export type Invite_Likes_Arr_Rel_Insert_Input = {
  data: Array<Invite_Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Invite_Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Invite_Likes_Avg_Fields = {
  __typename?: 'invite_likes_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "invite_likes" */
export type Invite_Likes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "invite_likes". All fields are combined with a logical 'AND'. */
export type Invite_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Invite_Likes_Bool_Exp>>;
  _not?: InputMaybe<Invite_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Invite_Likes_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  invite?: InputMaybe<Invites_Bool_Exp>;
  invite_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "invite_likes" */
export enum Invite_Likes_Constraint {
  /** unique or primary key constraint on columns "id" */
  InviteLikesPkey = 'invite_likes_pkey'
}

/** input type for incrementing numeric columns in table "invite_likes" */
export type Invite_Likes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "invite_likes" */
export type Invite_Likes_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  invite?: InputMaybe<Invites_Obj_Rel_Insert_Input>;
  invite_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Invite_Likes_Max_Fields = {
  __typename?: 'invite_likes_max_fields';
  id?: Maybe<Scalars['Int']>;
  invite_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "invite_likes" */
export type Invite_Likes_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  invite_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Invite_Likes_Min_Fields = {
  __typename?: 'invite_likes_min_fields';
  id?: Maybe<Scalars['Int']>;
  invite_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "invite_likes" */
export type Invite_Likes_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  invite_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "invite_likes" */
export type Invite_Likes_Mutation_Response = {
  __typename?: 'invite_likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invite_Likes>;
};

/** on_conflict condition type for table "invite_likes" */
export type Invite_Likes_On_Conflict = {
  constraint: Invite_Likes_Constraint;
  update_columns?: Array<Invite_Likes_Update_Column>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "invite_likes". */
export type Invite_Likes_Order_By = {
  id?: InputMaybe<Order_By>;
  invite?: InputMaybe<Invites_Order_By>;
  invite_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invite_likes */
export type Invite_Likes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "invite_likes" */
export enum Invite_Likes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InviteId = 'invite_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "invite_likes" */
export type Invite_Likes_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  invite_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Invite_Likes_Stddev_Fields = {
  __typename?: 'invite_likes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "invite_likes" */
export type Invite_Likes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Invite_Likes_Stddev_Pop_Fields = {
  __typename?: 'invite_likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "invite_likes" */
export type Invite_Likes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Invite_Likes_Stddev_Samp_Fields = {
  __typename?: 'invite_likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "invite_likes" */
export type Invite_Likes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "invite_likes" */
export type Invite_Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Invite_Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Invite_Likes_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  invite_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Invite_Likes_Sum_Fields = {
  __typename?: 'invite_likes_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "invite_likes" */
export type Invite_Likes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "invite_likes" */
export enum Invite_Likes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InviteId = 'invite_id',
  /** column name */
  UserId = 'user_id'
}

export type Invite_Likes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Invite_Likes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Invite_Likes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Invite_Likes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Invite_Likes_Var_Pop_Fields = {
  __typename?: 'invite_likes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "invite_likes" */
export type Invite_Likes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Invite_Likes_Var_Samp_Fields = {
  __typename?: 'invite_likes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "invite_likes" */
export type Invite_Likes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Invite_Likes_Variance_Fields = {
  __typename?: 'invite_likes_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "invite_likes" */
export type Invite_Likes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "invites" */
export type Invites = {
  __typename?: 'invites';
  anonymous: Scalars['Boolean'];
  author_name: Scalars['String'];
  category: Category_Enum;
  /** An object relationship */
  categoryByCategory: Category;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  invite_likes: Array<Invite_Likes>;
  /** An aggregate relationship */
  invite_likes_aggregate: Invite_Likes_Aggregate;
  /** An array relationship */
  invites_topics: Array<Invites_Topics>;
  /** An aggregate relationship */
  invites_topics_aggregate: Invites_Topics_Aggregate;
  is_finished: Scalars['Boolean'];
  is_start: Scalars['Boolean'];
  site?: Maybe<Scalars['String']>;
  spoiler: Scalars['Boolean'];
  start_time: Scalars['timestamptz'];
  sub_title?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "invites" */
export type InvitesCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "invites" */
export type InvitesComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "invites" */
export type InvitesInvite_LikesArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


/** columns and relationships of "invites" */
export type InvitesInvite_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


/** columns and relationships of "invites" */
export type InvitesInvites_TopicsArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


/** columns and relationships of "invites" */
export type InvitesInvites_Topics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};

/** aggregated selection of "invites" */
export type Invites_Aggregate = {
  __typename?: 'invites_aggregate';
  aggregate?: Maybe<Invites_Aggregate_Fields>;
  nodes: Array<Invites>;
};

export type Invites_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Invites_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Invites_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Invites_Aggregate_Bool_Exp_Count>;
};

export type Invites_Aggregate_Bool_Exp_Bool_And = {
  arguments: Invites_Select_Column_Invites_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Invites_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Invites_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Invites_Select_Column_Invites_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Invites_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Invites_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Invites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Invites_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "invites" */
export type Invites_Aggregate_Fields = {
  __typename?: 'invites_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invites_Max_Fields>;
  min?: Maybe<Invites_Min_Fields>;
};


/** aggregate fields of "invites" */
export type Invites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invites" */
export type Invites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Invites_Max_Order_By>;
  min?: InputMaybe<Invites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "invites" */
export type Invites_Arr_Rel_Insert_Input = {
  data: Array<Invites_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "invites". All fields are combined with a logical 'AND'. */
export type Invites_Bool_Exp = {
  _and?: InputMaybe<Array<Invites_Bool_Exp>>;
  _not?: InputMaybe<Invites_Bool_Exp>;
  _or?: InputMaybe<Array<Invites_Bool_Exp>>;
  anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  author_name?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Category_Enum_Comparison_Exp>;
  categoryByCategory?: InputMaybe<Category_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invite_likes?: InputMaybe<Invite_Likes_Bool_Exp>;
  invite_likes_aggregate?: InputMaybe<Invite_Likes_Aggregate_Bool_Exp>;
  invites_topics?: InputMaybe<Invites_Topics_Bool_Exp>;
  invites_topics_aggregate?: InputMaybe<Invites_Topics_Aggregate_Bool_Exp>;
  is_finished?: InputMaybe<Boolean_Comparison_Exp>;
  is_start?: InputMaybe<Boolean_Comparison_Exp>;
  site?: InputMaybe<String_Comparison_Exp>;
  spoiler?: InputMaybe<Boolean_Comparison_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  sub_title?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "invites" */
export enum Invites_Constraint {
  /** unique or primary key constraint on columns "id" */
  InvitesPkey = 'invites_pkey'
}

/** input type for inserting data into table "invites" */
export type Invites_Insert_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  author_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category_Enum>;
  categoryByCategory?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  invite_likes?: InputMaybe<Invite_Likes_Arr_Rel_Insert_Input>;
  invites_topics?: InputMaybe<Invites_Topics_Arr_Rel_Insert_Input>;
  is_finished?: InputMaybe<Scalars['Boolean']>;
  is_start?: InputMaybe<Scalars['Boolean']>;
  site?: InputMaybe<Scalars['String']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Invites_Max_Fields = {
  __typename?: 'invites_max_fields';
  author_name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  site?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "invites" */
export type Invites_Max_Order_By = {
  author_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  site?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Invites_Min_Fields = {
  __typename?: 'invites_min_fields';
  author_name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  site?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "invites" */
export type Invites_Min_Order_By = {
  author_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  site?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "invites" */
export type Invites_Mutation_Response = {
  __typename?: 'invites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invites>;
};

/** input type for inserting object relation for remote table "invites" */
export type Invites_Obj_Rel_Insert_Input = {
  data: Invites_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};

/** on_conflict condition type for table "invites" */
export type Invites_On_Conflict = {
  constraint: Invites_Constraint;
  update_columns?: Array<Invites_Update_Column>;
  where?: InputMaybe<Invites_Bool_Exp>;
};

/** Ordering options when selecting data from "invites". */
export type Invites_Order_By = {
  anonymous?: InputMaybe<Order_By>;
  author_name?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  categoryByCategory?: InputMaybe<Category_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_likes_aggregate?: InputMaybe<Invite_Likes_Aggregate_Order_By>;
  invites_topics_aggregate?: InputMaybe<Invites_Topics_Aggregate_Order_By>;
  is_finished?: InputMaybe<Order_By>;
  is_start?: InputMaybe<Order_By>;
  site?: InputMaybe<Order_By>;
  spoiler?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invites */
export type Invites_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "invites" */
export enum Invites_Select_Column {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  AuthorName = 'author_name',
  /** column name */
  Category = 'category',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsFinished = 'is_finished',
  /** column name */
  IsStart = 'is_start',
  /** column name */
  Site = 'site',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  SubTitle = 'sub_title',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id'
}

/** select "invites_aggregate_bool_exp_bool_and_arguments_columns" columns of table "invites" */
export enum Invites_Select_Column_Invites_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  IsFinished = 'is_finished',
  /** column name */
  IsStart = 'is_start',
  /** column name */
  Spoiler = 'spoiler'
}

/** select "invites_aggregate_bool_exp_bool_or_arguments_columns" columns of table "invites" */
export enum Invites_Select_Column_Invites_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  IsFinished = 'is_finished',
  /** column name */
  IsStart = 'is_start',
  /** column name */
  Spoiler = 'spoiler'
}

/** input type for updating data in table "invites" */
export type Invites_Set_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  author_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category_Enum>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_finished?: InputMaybe<Scalars['Boolean']>;
  is_start?: InputMaybe<Scalars['Boolean']>;
  site?: InputMaybe<Scalars['String']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "invites" */
export type Invites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Invites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Invites_Stream_Cursor_Value_Input = {
  anonymous?: InputMaybe<Scalars['Boolean']>;
  author_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category_Enum>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_finished?: InputMaybe<Scalars['Boolean']>;
  is_start?: InputMaybe<Scalars['Boolean']>;
  site?: InputMaybe<Scalars['String']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "invites_topics" */
export type Invites_Topics = {
  __typename?: 'invites_topics';
  id: Scalars['uuid'];
  /** An object relationship */
  invite: Invites;
  invites_id: Scalars['uuid'];
  /** An object relationship */
  topic: Topics;
  topics_key: Scalars['String'];
};

/** aggregated selection of "invites_topics" */
export type Invites_Topics_Aggregate = {
  __typename?: 'invites_topics_aggregate';
  aggregate?: Maybe<Invites_Topics_Aggregate_Fields>;
  nodes: Array<Invites_Topics>;
};

export type Invites_Topics_Aggregate_Bool_Exp = {
  count?: InputMaybe<Invites_Topics_Aggregate_Bool_Exp_Count>;
};

export type Invites_Topics_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Invites_Topics_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "invites_topics" */
export type Invites_Topics_Aggregate_Fields = {
  __typename?: 'invites_topics_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invites_Topics_Max_Fields>;
  min?: Maybe<Invites_Topics_Min_Fields>;
};


/** aggregate fields of "invites_topics" */
export type Invites_Topics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invites_topics" */
export type Invites_Topics_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Invites_Topics_Max_Order_By>;
  min?: InputMaybe<Invites_Topics_Min_Order_By>;
};

/** input type for inserting array relation for remote table "invites_topics" */
export type Invites_Topics_Arr_Rel_Insert_Input = {
  data: Array<Invites_Topics_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Invites_Topics_On_Conflict>;
};

/** Boolean expression to filter rows from the table "invites_topics". All fields are combined with a logical 'AND'. */
export type Invites_Topics_Bool_Exp = {
  _and?: InputMaybe<Array<Invites_Topics_Bool_Exp>>;
  _not?: InputMaybe<Invites_Topics_Bool_Exp>;
  _or?: InputMaybe<Array<Invites_Topics_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invite?: InputMaybe<Invites_Bool_Exp>;
  invites_id?: InputMaybe<Uuid_Comparison_Exp>;
  topic?: InputMaybe<Topics_Bool_Exp>;
  topics_key?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "invites_topics" */
export enum Invites_Topics_Constraint {
  /** unique or primary key constraint on columns "id" */
  InvitesTopicsPkey = 'invites_topics_pkey'
}

/** input type for inserting data into table "invites_topics" */
export type Invites_Topics_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  invite?: InputMaybe<Invites_Obj_Rel_Insert_Input>;
  invites_id?: InputMaybe<Scalars['uuid']>;
  topic?: InputMaybe<Topics_Obj_Rel_Insert_Input>;
  topics_key?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Invites_Topics_Max_Fields = {
  __typename?: 'invites_topics_max_fields';
  id?: Maybe<Scalars['uuid']>;
  invites_id?: Maybe<Scalars['uuid']>;
  topics_key?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "invites_topics" */
export type Invites_Topics_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  invites_id?: InputMaybe<Order_By>;
  topics_key?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Invites_Topics_Min_Fields = {
  __typename?: 'invites_topics_min_fields';
  id?: Maybe<Scalars['uuid']>;
  invites_id?: Maybe<Scalars['uuid']>;
  topics_key?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "invites_topics" */
export type Invites_Topics_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  invites_id?: InputMaybe<Order_By>;
  topics_key?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "invites_topics" */
export type Invites_Topics_Mutation_Response = {
  __typename?: 'invites_topics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invites_Topics>;
};

/** on_conflict condition type for table "invites_topics" */
export type Invites_Topics_On_Conflict = {
  constraint: Invites_Topics_Constraint;
  update_columns?: Array<Invites_Topics_Update_Column>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};

/** Ordering options when selecting data from "invites_topics". */
export type Invites_Topics_Order_By = {
  id?: InputMaybe<Order_By>;
  invite?: InputMaybe<Invites_Order_By>;
  invites_id?: InputMaybe<Order_By>;
  topic?: InputMaybe<Topics_Order_By>;
  topics_key?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invites_topics */
export type Invites_Topics_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "invites_topics" */
export enum Invites_Topics_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InvitesId = 'invites_id',
  /** column name */
  TopicsKey = 'topics_key'
}

/** input type for updating data in table "invites_topics" */
export type Invites_Topics_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  invites_id?: InputMaybe<Scalars['uuid']>;
  topics_key?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "invites_topics" */
export type Invites_Topics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Invites_Topics_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Invites_Topics_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  invites_id?: InputMaybe<Scalars['uuid']>;
  topics_key?: InputMaybe<Scalars['String']>;
};

/** update columns of table "invites_topics" */
export enum Invites_Topics_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InvitesId = 'invites_id',
  /** column name */
  TopicsKey = 'topics_key'
}

export type Invites_Topics_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Invites_Topics_Set_Input>;
  /** filter the rows which have to be updated */
  where: Invites_Topics_Bool_Exp;
};

/** update columns of table "invites" */
export enum Invites_Update_Column {
  /** column name */
  Anonymous = 'anonymous',
  /** column name */
  AuthorName = 'author_name',
  /** column name */
  Category = 'category',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsFinished = 'is_finished',
  /** column name */
  IsStart = 'is_start',
  /** column name */
  Site = 'site',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  SubTitle = 'sub_title',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id'
}

export type Invites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Invites_Set_Input>;
  /** filter the rows which have to be updated */
  where: Invites_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "invite_likes" */
  delete_invite_likes?: Maybe<Invite_Likes_Mutation_Response>;
  /** delete single row from the table: "invite_likes" */
  delete_invite_likes_by_pk?: Maybe<Invite_Likes>;
  /** delete data from the table: "invites" */
  delete_invites?: Maybe<Invites_Mutation_Response>;
  /** delete single row from the table: "invites" */
  delete_invites_by_pk?: Maybe<Invites>;
  /** delete data from the table: "invites_topics" */
  delete_invites_topics?: Maybe<Invites_Topics_Mutation_Response>;
  /** delete single row from the table: "invites_topics" */
  delete_invites_topics_by_pk?: Maybe<Invites_Topics>;
  /** delete data from the table: "topics" */
  delete_topics?: Maybe<Topics_Mutation_Response>;
  /** delete single row from the table: "topics" */
  delete_topics_by_pk?: Maybe<Topics>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "invite_likes" */
  insert_invite_likes?: Maybe<Invite_Likes_Mutation_Response>;
  /** insert a single row into the table: "invite_likes" */
  insert_invite_likes_one?: Maybe<Invite_Likes>;
  /** insert data into the table: "invites" */
  insert_invites?: Maybe<Invites_Mutation_Response>;
  /** insert a single row into the table: "invites" */
  insert_invites_one?: Maybe<Invites>;
  /** insert data into the table: "invites_topics" */
  insert_invites_topics?: Maybe<Invites_Topics_Mutation_Response>;
  /** insert a single row into the table: "invites_topics" */
  insert_invites_topics_one?: Maybe<Invites_Topics>;
  /** insert data into the table: "topics" */
  insert_topics?: Maybe<Topics_Mutation_Response>;
  /** insert a single row into the table: "topics" */
  insert_topics_one?: Maybe<Topics>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "invite_likes" */
  update_invite_likes?: Maybe<Invite_Likes_Mutation_Response>;
  /** update single row of the table: "invite_likes" */
  update_invite_likes_by_pk?: Maybe<Invite_Likes>;
  /** update multiples rows of table: "invite_likes" */
  update_invite_likes_many?: Maybe<Array<Maybe<Invite_Likes_Mutation_Response>>>;
  /** update data of the table: "invites" */
  update_invites?: Maybe<Invites_Mutation_Response>;
  /** update single row of the table: "invites" */
  update_invites_by_pk?: Maybe<Invites>;
  /** update multiples rows of table: "invites" */
  update_invites_many?: Maybe<Array<Maybe<Invites_Mutation_Response>>>;
  /** update data of the table: "invites_topics" */
  update_invites_topics?: Maybe<Invites_Topics_Mutation_Response>;
  /** update single row of the table: "invites_topics" */
  update_invites_topics_by_pk?: Maybe<Invites_Topics>;
  /** update multiples rows of table: "invites_topics" */
  update_invites_topics_many?: Maybe<Array<Maybe<Invites_Topics_Mutation_Response>>>;
  /** update data of the table: "topics" */
  update_topics?: Maybe<Topics_Mutation_Response>;
  /** update single row of the table: "topics" */
  update_topics_by_pk?: Maybe<Topics>;
  /** update multiples rows of table: "topics" */
  update_topics_many?: Maybe<Array<Maybe<Topics_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Invite_LikesArgs = {
  where: Invite_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invite_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InvitesArgs = {
  where: Invites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invites_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Invites_TopicsArgs = {
  where: Invites_Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invites_Topics_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TopicsArgs = {
  where: Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topics_By_PkArgs = {
  key: Scalars['String'];
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
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
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
export type Mutation_RootInsert_Invite_LikesArgs = {
  objects: Array<Invite_Likes_Insert_Input>;
  on_conflict?: InputMaybe<Invite_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invite_Likes_OneArgs = {
  object: Invite_Likes_Insert_Input;
  on_conflict?: InputMaybe<Invite_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvitesArgs = {
  objects: Array<Invites_Insert_Input>;
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invites_OneArgs = {
  object: Invites_Insert_Input;
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invites_TopicsArgs = {
  objects: Array<Invites_Topics_Insert_Input>;
  on_conflict?: InputMaybe<Invites_Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invites_Topics_OneArgs = {
  object: Invites_Topics_Insert_Input;
  on_conflict?: InputMaybe<Invites_Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TopicsArgs = {
  objects: Array<Topics_Insert_Input>;
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topics_OneArgs = {
  object: Topics_Insert_Input;
  on_conflict?: InputMaybe<Topics_On_Conflict>;
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
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
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
export type Mutation_RootUpdate_Invite_LikesArgs = {
  _inc?: InputMaybe<Invite_Likes_Inc_Input>;
  _set?: InputMaybe<Invite_Likes_Set_Input>;
  where: Invite_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invite_Likes_By_PkArgs = {
  _inc?: InputMaybe<Invite_Likes_Inc_Input>;
  _set?: InputMaybe<Invite_Likes_Set_Input>;
  pk_columns: Invite_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Invite_Likes_ManyArgs = {
  updates: Array<Invite_Likes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InvitesArgs = {
  _set?: InputMaybe<Invites_Set_Input>;
  where: Invites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invites_By_PkArgs = {
  _set?: InputMaybe<Invites_Set_Input>;
  pk_columns: Invites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Invites_ManyArgs = {
  updates: Array<Invites_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Invites_TopicsArgs = {
  _set?: InputMaybe<Invites_Topics_Set_Input>;
  where: Invites_Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invites_Topics_By_PkArgs = {
  _set?: InputMaybe<Invites_Topics_Set_Input>;
  pk_columns: Invites_Topics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Invites_Topics_ManyArgs = {
  updates: Array<Invites_Topics_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TopicsArgs = {
  _set?: InputMaybe<Topics_Set_Input>;
  where: Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topics_By_PkArgs = {
  _set?: InputMaybe<Topics_Set_Input>;
  pk_columns: Topics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Topics_ManyArgs = {
  updates: Array<Topics_Updates>;
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
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  invite_likes: Array<Invite_Likes>;
  /** An aggregate relationship */
  invite_likes_aggregate: Invite_Likes_Aggregate;
  /** fetch data from the table: "invite_likes" using primary key columns */
  invite_likes_by_pk?: Maybe<Invite_Likes>;
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  /** fetch data from the table: "invites" using primary key columns */
  invites_by_pk?: Maybe<Invites>;
  /** An array relationship */
  invites_topics: Array<Invites_Topics>;
  /** An aggregate relationship */
  invites_topics_aggregate: Invites_Topics_Aggregate;
  /** fetch data from the table: "invites_topics" using primary key columns */
  invites_topics_by_pk?: Maybe<Invites_Topics>;
  /** An array relationship */
  topics: Array<Topics>;
  /** An aggregate relationship */
  topics_aggregate: Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  key: Scalars['String'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInvite_LikesArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


export type Query_RootInvite_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


export type Query_RootInvite_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Query_RootInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Query_RootInvites_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInvites_TopicsArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


export type Query_RootInvites_Topics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


export type Query_RootInvites_Topics_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTopicsArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Query_RootTopics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Query_RootTopics_By_PkArgs = {
  key: Scalars['String'];
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** An array relationship */
  invite_likes: Array<Invite_Likes>;
  /** An aggregate relationship */
  invite_likes_aggregate: Invite_Likes_Aggregate;
  /** fetch data from the table: "invite_likes" using primary key columns */
  invite_likes_by_pk?: Maybe<Invite_Likes>;
  /** fetch data from the table in a streaming manner: "invite_likes" */
  invite_likes_stream: Array<Invite_Likes>;
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  /** fetch data from the table: "invites" using primary key columns */
  invites_by_pk?: Maybe<Invites>;
  /** fetch data from the table in a streaming manner: "invites" */
  invites_stream: Array<Invites>;
  /** An array relationship */
  invites_topics: Array<Invites_Topics>;
  /** An aggregate relationship */
  invites_topics_aggregate: Invites_Topics_Aggregate;
  /** fetch data from the table: "invites_topics" using primary key columns */
  invites_topics_by_pk?: Maybe<Invites_Topics>;
  /** fetch data from the table in a streaming manner: "invites_topics" */
  invites_topics_stream: Array<Invites_Topics>;
  /** An array relationship */
  topics: Array<Topics>;
  /** An aggregate relationship */
  topics_aggregate: Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table in a streaming manner: "topics" */
  topics_stream: Array<Topics>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  key: Scalars['String'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootInvite_LikesArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


export type Subscription_RootInvite_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


export type Subscription_RootInvite_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvite_Likes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Invite_Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


export type Subscription_RootInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Subscription_RootInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Subscription_RootInvites_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInvites_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Invites_Stream_Cursor_Input>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Subscription_RootInvites_TopicsArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


export type Subscription_RootInvites_Topics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


export type Subscription_RootInvites_Topics_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInvites_Topics_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Invites_Topics_Stream_Cursor_Input>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


export type Subscription_RootTopicsArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Subscription_RootTopics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topics_Order_By>>;
  where?: InputMaybe<Topics_Bool_Exp>;
};


export type Subscription_RootTopics_By_PkArgs = {
  key: Scalars['String'];
};


export type Subscription_RootTopics_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Topics_Stream_Cursor_Input>>;
  where?: InputMaybe<Topics_Bool_Exp>;
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

/** columns and relationships of "topics" */
export type Topics = {
  __typename?: 'topics';
  category: Category_Enum;
  /** An object relationship */
  categoryByCategory: Category;
  /** An array relationship */
  invites_topics: Array<Invites_Topics>;
  /** An aggregate relationship */
  invites_topics_aggregate: Invites_Topics_Aggregate;
  key: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
};


/** columns and relationships of "topics" */
export type TopicsInvites_TopicsArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TopicsInvites_Topics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Topics_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Topics_Order_By>>;
  where?: InputMaybe<Invites_Topics_Bool_Exp>;
};

/** aggregated selection of "topics" */
export type Topics_Aggregate = {
  __typename?: 'topics_aggregate';
  aggregate?: Maybe<Topics_Aggregate_Fields>;
  nodes: Array<Topics>;
};

export type Topics_Aggregate_Bool_Exp = {
  count?: InputMaybe<Topics_Aggregate_Bool_Exp_Count>;
};

export type Topics_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Topics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Topics_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "topics" */
export type Topics_Aggregate_Fields = {
  __typename?: 'topics_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Topics_Max_Fields>;
  min?: Maybe<Topics_Min_Fields>;
};


/** aggregate fields of "topics" */
export type Topics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topics_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topics" */
export type Topics_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Topics_Max_Order_By>;
  min?: InputMaybe<Topics_Min_Order_By>;
};

/** input type for inserting array relation for remote table "topics" */
export type Topics_Arr_Rel_Insert_Input = {
  data: Array<Topics_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};

/** Boolean expression to filter rows from the table "topics". All fields are combined with a logical 'AND'. */
export type Topics_Bool_Exp = {
  _and?: InputMaybe<Array<Topics_Bool_Exp>>;
  _not?: InputMaybe<Topics_Bool_Exp>;
  _or?: InputMaybe<Array<Topics_Bool_Exp>>;
  category?: InputMaybe<Category_Enum_Comparison_Exp>;
  categoryByCategory?: InputMaybe<Category_Bool_Exp>;
  invites_topics?: InputMaybe<Invites_Topics_Bool_Exp>;
  invites_topics_aggregate?: InputMaybe<Invites_Topics_Aggregate_Bool_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  photo?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "topics" */
export enum Topics_Constraint {
  /** unique or primary key constraint on columns "key" */
  TopicsPkey = 'topics_pkey'
}

/** input type for inserting data into table "topics" */
export type Topics_Insert_Input = {
  category?: InputMaybe<Category_Enum>;
  categoryByCategory?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  invites_topics?: InputMaybe<Invites_Topics_Arr_Rel_Insert_Input>;
  key?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Topics_Max_Fields = {
  __typename?: 'topics_max_fields';
  key?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "topics" */
export type Topics_Max_Order_By = {
  key?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Topics_Min_Fields = {
  __typename?: 'topics_min_fields';
  key?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "topics" */
export type Topics_Min_Order_By = {
  key?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "topics" */
export type Topics_Mutation_Response = {
  __typename?: 'topics_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Topics>;
};

/** input type for inserting object relation for remote table "topics" */
export type Topics_Obj_Rel_Insert_Input = {
  data: Topics_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Topics_On_Conflict>;
};

/** on_conflict condition type for table "topics" */
export type Topics_On_Conflict = {
  constraint: Topics_Constraint;
  update_columns?: Array<Topics_Update_Column>;
  where?: InputMaybe<Topics_Bool_Exp>;
};

/** Ordering options when selecting data from "topics". */
export type Topics_Order_By = {
  category?: InputMaybe<Order_By>;
  categoryByCategory?: InputMaybe<Category_Order_By>;
  invites_topics_aggregate?: InputMaybe<Invites_Topics_Aggregate_Order_By>;
  key?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
};

/** primary key columns input for table: topics */
export type Topics_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "topics" */
export enum Topics_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Key = 'key',
  /** column name */
  Photo = 'photo'
}

/** input type for updating data in table "topics" */
export type Topics_Set_Input = {
  category?: InputMaybe<Category_Enum>;
  key?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "topics" */
export type Topics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topics_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topics_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Category_Enum>;
  key?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

/** update columns of table "topics" */
export enum Topics_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Key = 'key',
  /** column name */
  Photo = 'photo'
}

export type Topics_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Topics_Set_Input>;
  /** filter the rows which have to be updated */
  where: Topics_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  anonymous: Scalars['Boolean'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  invite_likes: Array<Invite_Likes>;
  /** An aggregate relationship */
  invite_likes_aggregate: Invite_Likes_Aggregate;
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_name: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInvite_LikesArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInvite_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invite_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invite_Likes_Order_By>>;
  where?: InputMaybe<Invite_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
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
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  invite_likes?: InputMaybe<Invite_Likes_Bool_Exp>;
  invite_likes_aggregate?: InputMaybe<Invite_Likes_Aggregate_Bool_Exp>;
  invites?: InputMaybe<Invites_Bool_Exp>;
  invites_aggregate?: InputMaybe<Invites_Aggregate_Bool_Exp>;
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
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  invite_likes?: InputMaybe<Invite_Likes_Arr_Rel_Insert_Input>;
  invites?: InputMaybe<Invites_Arr_Rel_Insert_Input>;
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
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_likes_aggregate?: InputMaybe<Invite_Likes_Aggregate_Order_By>;
  invites_aggregate?: InputMaybe<Invites_Aggregate_Order_By>;
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

export type GetCommentsQueryVariables = Exact<{
  invite_id: Scalars['uuid'];
}>;


export type GetCommentsQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', user_id: string, updated_at: any, time: number, invite_id: any, id: any, created_at: any, content: string, user: { __typename?: 'users', photo_url?: string | null, user_name: string } }> };

export type InsertCommentMutationVariables = Exact<{
  object: Comments_Insert_Input;
}>;


export type InsertCommentMutation = { __typename?: 'mutation_root', insert_comments_one?: { __typename?: 'comments', content: string, updated_at: any, user_id: string, time: number, invite_id: any, id: any, created_at: any, user: { __typename?: 'users', photo_url?: string | null, user_name: string } } | null };

export type SubscriptionCommentsSubscriptionVariables = Exact<{
  invite_id: Scalars['uuid'];
}>;


export type SubscriptionCommentsSubscription = { __typename?: 'subscription_root', comments: Array<{ __typename?: 'comments', user_id: string, updated_at: any, time: number, invite_id: any, id: any, created_at: any, content: string, user: { __typename?: 'users', photo_url?: string | null, user_name: string } }> };

export type GetInvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInvitesQuery = { __typename?: 'query_root', invites: Array<{ __typename?: 'invites', id: any, user_id: string, anonymous: boolean, author_name: string, category: Category_Enum, content?: string | null, created_at: any, title: string, sub_title?: string | null, start_time: any, spoiler: boolean, site?: string | null, is_start: boolean, is_finished: boolean, url: string, user: { __typename?: 'users', photo_url?: string | null, user_name: string } }> };

export type GetInviteQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetInviteQuery = { __typename?: 'query_root', invites_by_pk?: { __typename?: 'invites', id: any, user_id: string, anonymous: boolean, author_name: string, category: Category_Enum, content?: string | null, created_at: any, title: string, sub_title?: string | null, start_time: any, spoiler: boolean, site?: string | null, is_start: boolean, is_finished: boolean, url: string, user: { __typename?: 'users', photo_url?: string | null, user_name: string } } | null };

export type GetInvitesByCategoryQueryVariables = Exact<{
  category: Category_Enum;
}>;


export type GetInvitesByCategoryQuery = { __typename?: 'query_root', invites: Array<{ __typename?: 'invites', id: any, user_id: string, anonymous: boolean, author_name: string, category: Category_Enum, content?: string | null, created_at: any, title: string, sub_title?: string | null, start_time: any, spoiler: boolean, site?: string | null, is_start: boolean, is_finished: boolean, url: string, user: { __typename?: 'users', photo_url?: string | null, user_name: string } }> };


export const GetCommentsDocument = `
    query GetComments($invite_id: uuid!) {
  comments(
    where: {invite_id: {_eq: $invite_id}}
    order_by: {time: asc, created_at: asc}
  ) {
    user_id
    updated_at
    time
    invite_id
    id
    created_at
    content
    user {
      photo_url
      user_name
    }
  }
}
    `;
export const useGetCommentsQuery = <
      TData = GetCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentsQueryVariables,
      options?: UseQueryOptions<GetCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsQuery, TError, TData>(
      ['GetComments', variables],
      fetcher<GetCommentsQuery, GetCommentsQueryVariables>(client, GetCommentsDocument, variables, headers),
      options
    );

useGetCommentsQuery.getKey = (variables: GetCommentsQueryVariables) => ['GetComments', variables];
;

useGetCommentsQuery.fetcher = (client: GraphQLClient, variables: GetCommentsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCommentsQuery, GetCommentsQueryVariables>(client, GetCommentsDocument, variables, headers);
export const InsertCommentDocument = `
    mutation InsertComment($object: comments_insert_input!) {
  insert_comments_one(object: $object) {
    content
    updated_at
    user_id
    time
    invite_id
    id
    created_at
    user {
      photo_url
      user_name
    }
  }
}
    `;
export const useInsertCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertCommentMutation, TError, InsertCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertCommentMutation, TError, InsertCommentMutationVariables, TContext>(
      ['InsertComment'],
      (variables?: InsertCommentMutationVariables) => fetcher<InsertCommentMutation, InsertCommentMutationVariables>(client, InsertCommentDocument, variables, headers)(),
      options
    );
useInsertCommentMutation.fetcher = (client: GraphQLClient, variables: InsertCommentMutationVariables, headers?: RequestInit['headers']) => fetcher<InsertCommentMutation, InsertCommentMutationVariables>(client, InsertCommentDocument, variables, headers);
export const SubscriptionCommentsDocument = `
    subscription SubscriptionComments($invite_id: uuid!) {
  comments(
    where: {invite_id: {_eq: $invite_id}}
    order_by: {time: asc, created_at: asc}
  ) {
    user_id
    updated_at
    time
    invite_id
    id
    created_at
    content
    user {
      photo_url
      user_name
    }
  }
}
    `;
export const GetInvitesDocument = `
    query GetInvites {
  invites(order_by: {created_at: desc}) {
    id
    user_id
    anonymous
    author_name
    category
    content
    created_at
    title
    sub_title
    start_time
    spoiler
    site
    is_start
    is_finished
    url
    user {
      photo_url
      user_name
    }
  }
}
    `;
export const useGetInvitesQuery = <
      TData = GetInvitesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetInvitesQueryVariables,
      options?: UseQueryOptions<GetInvitesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetInvitesQuery, TError, TData>(
      variables === undefined ? ['GetInvites'] : ['GetInvites', variables],
      fetcher<GetInvitesQuery, GetInvitesQueryVariables>(client, GetInvitesDocument, variables, headers),
      options
    );

useGetInvitesQuery.getKey = (variables?: GetInvitesQueryVariables) => variables === undefined ? ['GetInvites'] : ['GetInvites', variables];
;

useGetInvitesQuery.fetcher = (client: GraphQLClient, variables?: GetInvitesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetInvitesQuery, GetInvitesQueryVariables>(client, GetInvitesDocument, variables, headers);
export const GetInviteDocument = `
    query GetInvite($id: uuid!) {
  invites_by_pk(id: $id) {
    id
    user_id
    anonymous
    author_name
    category
    content
    created_at
    title
    sub_title
    start_time
    spoiler
    site
    is_start
    is_finished
    url
    user {
      photo_url
      user_name
    }
  }
}
    `;
export const useGetInviteQuery = <
      TData = GetInviteQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetInviteQueryVariables,
      options?: UseQueryOptions<GetInviteQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetInviteQuery, TError, TData>(
      ['GetInvite', variables],
      fetcher<GetInviteQuery, GetInviteQueryVariables>(client, GetInviteDocument, variables, headers),
      options
    );

useGetInviteQuery.getKey = (variables: GetInviteQueryVariables) => ['GetInvite', variables];
;

useGetInviteQuery.fetcher = (client: GraphQLClient, variables: GetInviteQueryVariables, headers?: RequestInit['headers']) => fetcher<GetInviteQuery, GetInviteQueryVariables>(client, GetInviteDocument, variables, headers);
export const GetInvitesByCategoryDocument = `
    query GetInvitesByCategory($category: category_enum!) {
  invites(where: {category: {_eq: $category}}, order_by: {created_at: desc}) {
    id
    user_id
    anonymous
    author_name
    category
    content
    created_at
    title
    sub_title
    start_time
    spoiler
    site
    is_start
    is_finished
    url
    user {
      photo_url
      user_name
    }
  }
}
    `;
export const useGetInvitesByCategoryQuery = <
      TData = GetInvitesByCategoryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetInvitesByCategoryQueryVariables,
      options?: UseQueryOptions<GetInvitesByCategoryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetInvitesByCategoryQuery, TError, TData>(
      ['GetInvitesByCategory', variables],
      fetcher<GetInvitesByCategoryQuery, GetInvitesByCategoryQueryVariables>(client, GetInvitesByCategoryDocument, variables, headers),
      options
    );

useGetInvitesByCategoryQuery.getKey = (variables: GetInvitesByCategoryQueryVariables) => ['GetInvitesByCategory', variables];
;

useGetInvitesByCategoryQuery.fetcher = (client: GraphQLClient, variables: GetInvitesByCategoryQueryVariables, headers?: RequestInit['headers']) => fetcher<GetInvitesByCategoryQuery, GetInvitesByCategoryQueryVariables>(client, GetInvitesByCategoryDocument, variables, headers);