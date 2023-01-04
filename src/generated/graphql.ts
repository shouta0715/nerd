export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  name: any;
  timestamptz: any;
  timetz: any;
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

/** columns and relationships of "Categories" */
export type Categories = {
  __typename?: 'Categories';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "Categories" */
export type Categories_Aggregate = {
  __typename?: 'Categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "Categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'Categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "Categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  key?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "key" */
  CategoriesPkey = 'Categories_pkey'
}

/** input type for inserting data into table "Categories" */
export type Categories_Insert_Input = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'Categories_max_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'Categories_min_fields';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Categories" */
export type Categories_Mutation_Response = {
  __typename?: 'Categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** on_conflict condition type for table "Categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "Categories". */
export type Categories_Order_By = {
  key?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Categories */
export type Categories_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "Categories" */
export enum Categories_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "Categories" */
export type Categories_Set_Input = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Categories" */
export enum Categories_Update_Column {
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
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

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  key: Scalars['String'];
  /** An array relationship */
  recruitments: Array<Recruitments>;
  /** An aggregate relationship */
  recruitments_aggregate: Recruitments_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesRecruitmentsArgs = {
  distinct_on?: InputMaybe<Array<Recruitments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recruitments_Order_By>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesRecruitments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recruitments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recruitments_Order_By>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  key?: InputMaybe<String_Comparison_Exp>;
  recruitments?: InputMaybe<Recruitments_Bool_Exp>;
  recruitments_aggregate?: InputMaybe<Recruitments_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "key" */
  CategoriesPkey = 'categories_pkey'
}

export enum Categories_Enum {
  Anime = 'Anime',
  Movie = 'Movie'
}

/** Boolean expression to compare columns of type "categories_enum". All fields are combined with logical 'AND'. */
export type Categories_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Categories_Enum>;
  _in?: InputMaybe<Array<Categories_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Categories_Enum>;
  _nin?: InputMaybe<Array<Categories_Enum>>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  key?: InputMaybe<Scalars['String']>;
  recruitments?: InputMaybe<Recruitments_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  key?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  key?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  key?: InputMaybe<Order_By>;
  recruitments_aggregate?: InputMaybe<Recruitments_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  key: Scalars['String'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Key = 'key'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  key?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  key?: InputMaybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Key = 'key'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Categories" */
  delete_Categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "Categories" */
  delete_Categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "recruitments" */
  delete_recruitments?: Maybe<Recruitments_Mutation_Response>;
  /** delete single row from the table: "recruitments" */
  delete_recruitments_by_pk?: Maybe<Recruitments>;
  /** insert data into the table: "Categories" */
  insert_Categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "Categories" */
  insert_Categories_one?: Maybe<Categories>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "recruitments" */
  insert_recruitments?: Maybe<Recruitments_Mutation_Response>;
  /** insert a single row into the table: "recruitments" */
  insert_recruitments_one?: Maybe<Recruitments>;
  /** update data of the table: "Categories" */
  update_Categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "Categories" */
  update_Categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "Categories" */
  update_Categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "recruitments" */
  update_recruitments?: Maybe<Recruitments_Mutation_Response>;
  /** update single row of the table: "recruitments" */
  update_recruitments_by_pk?: Maybe<Recruitments>;
  /** update multiples rows of table: "recruitments" */
  update_recruitments_many?: Maybe<Array<Maybe<Recruitments_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RecruitmentsArgs = {
  where: Recruitments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recruitments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecruitmentsArgs = {
  objects: Array<Recruitments_Insert_Input>;
  on_conflict?: InputMaybe<Recruitments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recruitments_OneArgs = {
  object: Recruitments_Insert_Input;
  on_conflict?: InputMaybe<Recruitments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RecruitmentsArgs = {
  _set?: InputMaybe<Recruitments_Set_Input>;
  where: Recruitments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recruitments_By_PkArgs = {
  _set?: InputMaybe<Recruitments_Set_Input>;
  pk_columns: Recruitments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Recruitments_ManyArgs = {
  updates: Array<Recruitments_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']>;
  _gt?: InputMaybe<Scalars['name']>;
  _gte?: InputMaybe<Scalars['name']>;
  _in?: InputMaybe<Array<Scalars['name']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['name']>;
  _lte?: InputMaybe<Scalars['name']>;
  _neq?: InputMaybe<Scalars['name']>;
  _nin?: InputMaybe<Array<Scalars['name']>>;
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

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  bio?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  recruitment?: Maybe<Recruitments>;
  recruitments_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  username: Scalars['name'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

export type Profiles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Profiles_Aggregate_Bool_Exp_Count>;
};

export type Profiles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Profiles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profiles" */
export type Profiles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profiles_Max_Order_By>;
  min?: InputMaybe<Profiles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profiles" */
export type Profiles_Arr_Rel_Insert_Input = {
  data: Array<Profiles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  recruitment?: InputMaybe<Recruitments_Bool_Exp>;
  recruitments_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<Name_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey',
  /** unique or primary key constraint on columns "user_id" */
  ProfilesUserIdKey = 'profiles_user_id_key',
  /** unique or primary key constraint on columns "username" */
  ProfilesUsernameKey = 'profiles_username_key'
}

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  recruitment?: InputMaybe<Recruitments_Obj_Rel_Insert_Input>;
  recruitments_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['name']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  recruitments_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profiles" */
export type Profiles_Max_Order_By = {
  bio?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recruitments_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  recruitments_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profiles" */
export type Profiles_Min_Order_By = {
  bio?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recruitments_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  bio?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recruitment?: InputMaybe<Recruitments_Order_By>;
  recruitments_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RecruitmentsId = 'recruitments_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  recruitments_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['name']>;
  website?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  recruitments_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['name']>;
  website?: InputMaybe<Scalars['String']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RecruitmentsId = 'recruitments_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username',
  /** column name */
  Website = 'website'
}

export type Profiles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Categories" */
  Categories: Array<Categories>;
  /** fetch aggregated fields from the table: "Categories" */
  Categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "Categories" using primary key columns */
  Categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** An array relationship */
  recruitments: Array<Recruitments>;
  /** An aggregate relationship */
  recruitments_aggregate: Recruitments_Aggregate;
  /** fetch data from the table: "recruitments" using primary key columns */
  recruitments_by_pk?: Maybe<Recruitments>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  key: Scalars['String'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  key: Scalars['String'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRecruitmentsArgs = {
  distinct_on?: InputMaybe<Array<Recruitments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recruitments_Order_By>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};


export type Query_RootRecruitments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recruitments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recruitments_Order_By>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};


export type Query_RootRecruitments_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "recruitments" */
export type Recruitments = {
  __typename?: 'recruitments';
  author_name?: Maybe<Scalars['String']>;
  category?: Maybe<Categories_Enum>;
  /** An object relationship */
  categoryByCategory?: Maybe<Categories>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_write_anonymous: Scalars['Boolean'];
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  spoiler: Scalars['Boolean'];
  start_time: Scalars['timetz'];
  sub_title?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};


/** columns and relationships of "recruitments" */
export type RecruitmentsProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "recruitments" */
export type RecruitmentsProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "recruitments" */
export type Recruitments_Aggregate = {
  __typename?: 'recruitments_aggregate';
  aggregate?: Maybe<Recruitments_Aggregate_Fields>;
  nodes: Array<Recruitments>;
};

export type Recruitments_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Recruitments_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Recruitments_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Recruitments_Aggregate_Bool_Exp_Count>;
};

export type Recruitments_Aggregate_Bool_Exp_Bool_And = {
  arguments: Recruitments_Select_Column_Recruitments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Recruitments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Recruitments_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Recruitments_Select_Column_Recruitments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Recruitments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Recruitments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Recruitments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Recruitments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "recruitments" */
export type Recruitments_Aggregate_Fields = {
  __typename?: 'recruitments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Recruitments_Max_Fields>;
  min?: Maybe<Recruitments_Min_Fields>;
};


/** aggregate fields of "recruitments" */
export type Recruitments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recruitments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recruitments" */
export type Recruitments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recruitments_Max_Order_By>;
  min?: InputMaybe<Recruitments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "recruitments" */
export type Recruitments_Arr_Rel_Insert_Input = {
  data: Array<Recruitments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Recruitments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "recruitments". All fields are combined with a logical 'AND'. */
export type Recruitments_Bool_Exp = {
  _and?: InputMaybe<Array<Recruitments_Bool_Exp>>;
  _not?: InputMaybe<Recruitments_Bool_Exp>;
  _or?: InputMaybe<Array<Recruitments_Bool_Exp>>;
  author_name?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<Categories_Enum_Comparison_Exp>;
  categoryByCategory?: InputMaybe<Categories_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_write_anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  profiles?: InputMaybe<Profiles_Bool_Exp>;
  profiles_aggregate?: InputMaybe<Profiles_Aggregate_Bool_Exp>;
  spoiler?: InputMaybe<Boolean_Comparison_Exp>;
  start_time?: InputMaybe<Timetz_Comparison_Exp>;
  sub_title?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "recruitments" */
export enum Recruitments_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecruitmentsPkey = 'recruitments_pkey'
}

/** input type for inserting data into table "recruitments" */
export type Recruitments_Insert_Input = {
  author_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Categories_Enum>;
  categoryByCategory?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_write_anonymous?: InputMaybe<Scalars['Boolean']>;
  profiles?: InputMaybe<Profiles_Arr_Rel_Insert_Input>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['timetz']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Recruitments_Max_Fields = {
  __typename?: 'recruitments_max_fields';
  author_name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timetz']>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "recruitments" */
export type Recruitments_Max_Order_By = {
  author_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recruitments_Min_Fields = {
  __typename?: 'recruitments_min_fields';
  author_name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start_time?: Maybe<Scalars['timetz']>;
  sub_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "recruitments" */
export type Recruitments_Min_Order_By = {
  author_name?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recruitments" */
export type Recruitments_Mutation_Response = {
  __typename?: 'recruitments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Recruitments>;
};

/** input type for inserting object relation for remote table "recruitments" */
export type Recruitments_Obj_Rel_Insert_Input = {
  data: Recruitments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Recruitments_On_Conflict>;
};

/** on_conflict condition type for table "recruitments" */
export type Recruitments_On_Conflict = {
  constraint: Recruitments_Constraint;
  update_columns?: Array<Recruitments_Update_Column>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};

/** Ordering options when selecting data from "recruitments". */
export type Recruitments_Order_By = {
  author_name?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  categoryByCategory?: InputMaybe<Categories_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_write_anonymous?: InputMaybe<Order_By>;
  profiles_aggregate?: InputMaybe<Profiles_Aggregate_Order_By>;
  spoiler?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  sub_title?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recruitments */
export type Recruitments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "recruitments" */
export enum Recruitments_Select_Column {
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
  IsWriteAnonymous = 'is_write_anonymous',
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
  UserId = 'user_id'
}

/** select "recruitments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "recruitments" */
export enum Recruitments_Select_Column_Recruitments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsWriteAnonymous = 'is_write_anonymous',
  /** column name */
  Spoiler = 'spoiler'
}

/** select "recruitments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "recruitments" */
export enum Recruitments_Select_Column_Recruitments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsWriteAnonymous = 'is_write_anonymous',
  /** column name */
  Spoiler = 'spoiler'
}

/** input type for updating data in table "recruitments" */
export type Recruitments_Set_Input = {
  author_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Categories_Enum>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_write_anonymous?: InputMaybe<Scalars['Boolean']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['timetz']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "recruitments" */
export type Recruitments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Recruitments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Recruitments_Stream_Cursor_Value_Input = {
  author_name?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Categories_Enum>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_write_anonymous?: InputMaybe<Scalars['Boolean']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['timetz']>;
  sub_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "recruitments" */
export enum Recruitments_Update_Column {
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
  IsWriteAnonymous = 'is_write_anonymous',
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
  UserId = 'user_id'
}

export type Recruitments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Recruitments_Set_Input>;
  where: Recruitments_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Categories" */
  Categories: Array<Categories>;
  /** fetch aggregated fields from the table: "Categories" */
  Categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "Categories" using primary key columns */
  Categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "Categories" */
  Categories_stream: Array<Categories>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
  /** An array relationship */
  recruitments: Array<Recruitments>;
  /** An aggregate relationship */
  recruitments_aggregate: Recruitments_Aggregate;
  /** fetch data from the table: "recruitments" using primary key columns */
  recruitments_by_pk?: Maybe<Recruitments>;
  /** fetch data from the table in a streaming manner: "recruitments" */
  recruitments_stream: Array<Recruitments>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  key: Scalars['String'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  key: Scalars['String'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootRecruitmentsArgs = {
  distinct_on?: InputMaybe<Array<Recruitments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recruitments_Order_By>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};


export type Subscription_RootRecruitments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recruitments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recruitments_Order_By>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
};


export type Subscription_RootRecruitments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRecruitments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Recruitments_Stream_Cursor_Input>>;
  where?: InputMaybe<Recruitments_Bool_Exp>;
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

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timetz']>;
  _gt?: InputMaybe<Scalars['timetz']>;
  _gte?: InputMaybe<Scalars['timetz']>;
  _in?: InputMaybe<Array<Scalars['timetz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timetz']>;
  _lte?: InputMaybe<Scalars['timetz']>;
  _neq?: InputMaybe<Scalars['timetz']>;
  _nin?: InputMaybe<Array<Scalars['timetz']>>;
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

export type GetRecruitmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecruitmentsQuery = { __typename?: 'query_root', recruitments: Array<{ __typename?: 'recruitments', title: string, user_id: string, sub_title?: string | null, start_time: any, spoiler: boolean, is_write_anonymous: boolean, id: any, created_at: any, content?: string | null, category?: Categories_Enum | null, author_name?: string | null }> };
