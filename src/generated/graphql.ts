import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

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
  id: Scalars['uuid'];
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
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  id: Scalars['uuid'];
};


export type Subscription_RootWorks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Works_Stream_Cursor_Input>>;
  where?: InputMaybe<Works_Bool_Exp>;
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
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_name: Scalars['String'];
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
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  created_at?: InputMaybe<Scalars['timestamptz']>;
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

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  anonymous?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
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
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  has_episodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  /** An object relationship */
  media_type?: Maybe<Media_Types>;
  media_type_id?: Maybe<Scalars['Int']>;
  official_site?: Maybe<Scalars['String']>;
  official_twitter_name?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['String']>;
  series_title: Scalars['String'];
  sub_title?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  twitter_hash_tag?: Maybe<Scalars['String']>;
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
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works" */
export type Works_Avg_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works". All fields are combined with a logical 'AND'. */
export type Works_Bool_Exp = {
  _and?: InputMaybe<Array<Works_Bool_Exp>>;
  _not?: InputMaybe<Works_Bool_Exp>;
  _or?: InputMaybe<Array<Works_Bool_Exp>>;
  copyright?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  has_episodes?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  media_type?: InputMaybe<Media_Types_Bool_Exp>;
  media_type_id?: InputMaybe<Int_Comparison_Exp>;
  official_site?: InputMaybe<String_Comparison_Exp>;
  official_twitter_name?: InputMaybe<String_Comparison_Exp>;
  series_id?: InputMaybe<String_Comparison_Exp>;
  series_title?: InputMaybe<String_Comparison_Exp>;
  sub_title?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  twitter_hash_tag?: InputMaybe<String_Comparison_Exp>;
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
  media_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  copyright?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  has_episodes?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  media_type?: InputMaybe<Media_Types_Obj_Rel_Insert_Input>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  official_site?: InputMaybe<Scalars['String']>;
  official_twitter_name?: InputMaybe<Scalars['String']>;
  series_id?: InputMaybe<Scalars['String']>;
  series_title?: InputMaybe<Scalars['String']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitter_hash_tag?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  media_type_id?: Maybe<Scalars['Int']>;
  official_site?: Maybe<Scalars['String']>;
  official_twitter_name?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['String']>;
  series_title?: Maybe<Scalars['String']>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter_hash_tag?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "works" */
export type Works_Max_Order_By = {
  copyright?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  official_site?: InputMaybe<Order_By>;
  official_twitter_name?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  series_title?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  twitter_hash_tag?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  copyright?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  media_type_id?: Maybe<Scalars['Int']>;
  official_site?: Maybe<Scalars['String']>;
  official_twitter_name?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['String']>;
  series_title?: Maybe<Scalars['String']>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitter_hash_tag?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "works" */
export type Works_Min_Order_By = {
  copyright?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  official_site?: InputMaybe<Order_By>;
  official_twitter_name?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  series_title?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  twitter_hash_tag?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Works>;
};

/** on_conflict condition type for table "works" */
export type Works_On_Conflict = {
  constraint: Works_Constraint;
  update_columns?: Array<Works_Update_Column>;
  where?: InputMaybe<Works_Bool_Exp>;
};

/** Ordering options when selecting data from "works". */
export type Works_Order_By = {
  copyright?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  has_episodes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  media_type?: InputMaybe<Media_Types_Order_By>;
  media_type_id?: InputMaybe<Order_By>;
  official_site?: InputMaybe<Order_By>;
  official_twitter_name?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  series_title?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  twitter_hash_tag?: InputMaybe<Order_By>;
};

/** primary key columns input for table: works */
export type Works_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "works" */
export enum Works_Select_Column {
  /** column name */
  Copyright = 'copyright',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HasEpisodes = 'has_episodes',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MediaTypeId = 'media_type_id',
  /** column name */
  OfficialSite = 'official_site',
  /** column name */
  OfficialTwitterName = 'official_twitter_name',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  SeriesTitle = 'series_title',
  /** column name */
  SubTitle = 'sub_title',
  /** column name */
  Title = 'title',
  /** column name */
  TwitterHashTag = 'twitter_hash_tag'
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
  copyright?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  has_episodes?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  official_site?: InputMaybe<Scalars['String']>;
  official_twitter_name?: InputMaybe<Scalars['String']>;
  series_id?: InputMaybe<Scalars['String']>;
  series_title?: InputMaybe<Scalars['String']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitter_hash_tag?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Works_Stddev_Fields = {
  __typename?: 'works_stddev_fields';
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works" */
export type Works_Stddev_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Stddev_Pop_Fields = {
  __typename?: 'works_stddev_pop_fields';
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works" */
export type Works_Stddev_Pop_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Stddev_Samp_Fields = {
  __typename?: 'works_stddev_samp_fields';
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works" */
export type Works_Stddev_Samp_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
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
  copyright?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  has_episodes?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  media_type_id?: InputMaybe<Scalars['Int']>;
  official_site?: InputMaybe<Scalars['String']>;
  official_twitter_name?: InputMaybe<Scalars['String']>;
  series_id?: InputMaybe<Scalars['String']>;
  series_title?: InputMaybe<Scalars['String']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitter_hash_tag?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Works_Sum_Fields = {
  __typename?: 'works_sum_fields';
  media_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "works" */
export type Works_Sum_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

/** update columns of table "works" */
export enum Works_Update_Column {
  /** column name */
  Copyright = 'copyright',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HasEpisodes = 'has_episodes',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MediaTypeId = 'media_type_id',
  /** column name */
  OfficialSite = 'official_site',
  /** column name */
  OfficialTwitterName = 'official_twitter_name',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  SeriesTitle = 'series_title',
  /** column name */
  SubTitle = 'sub_title',
  /** column name */
  Title = 'title',
  /** column name */
  TwitterHashTag = 'twitter_hash_tag'
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
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works" */
export type Works_Var_Pop_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Var_Samp_Fields = {
  __typename?: 'works_var_samp_fields';
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works" */
export type Works_Var_Samp_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Variance_Fields = {
  __typename?: 'works_variance_fields';
  media_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works" */
export type Works_Variance_Order_By = {
  media_type_id?: InputMaybe<Order_By>;
};

export type GetMediaTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMediaTypesQuery = { __typename?: 'query_root', media_types: Array<{ __typename?: 'media_types', id: number, name: string }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: string, anonymous: boolean, photo_url?: string | null, user_name: string } | null };


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