/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetChatsEpisode(\n    $episode_id: uuid!\n    $get_limit: Int!\n    $_lt: Int!\n    $_gte: Int!\n  ) {\n    chats_by_episode_id(\n      args: {\n        _episode_id: $episode_id\n        get_limit: $get_limit\n        _gte: $_gte\n        _lt: $_lt\n      }\n      order_by: { comment_time: asc }\n    ) {\n      ...ChatFragment\n    }\n  }\n": types.GetChatsEpisodeDocument,
    "\n  query GetChatsWork(\n    $work_id: Int!\n    $get_limit: Int!\n    $_lt: Int!\n    $_gte: Int!\n  ) {\n    chats_by_work_id(\n      args: {\n        _work_id: $work_id\n        get_limit: $get_limit\n        _gte: $_gte\n        _lt: $_lt\n      }\n      order_by: { comment_time: asc }\n    ) {\n      ...ChatFragment\n    }\n  }\n": types.GetChatsWorkDocument,
    "\n  mutation InsertChat($object: chats_insert_input!) {\n    insert_chats_one(object: $object) {\n      ...ChatFragment\n    }\n  }\n": types.InsertChatDocument,
    "\n  subscription SubscriptionChats(\n    $episode_id: uuid!\n    $initial_created_at: timestamptz!\n  ) {\n    chats_stream(\n      cursor: {\n        initial_value: { created_at: $initial_created_at }\n        ordering: ASC\n      }\n      batch_size: 100\n      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }\n    ) {\n      content\n      work_id\n      user_id\n      comment_time\n      id\n      episode_id\n      created_at\n      commenter_name\n      user {\n        anonymous\n        id\n      }\n    }\n  }\n": types.SubscriptionChatsDocument,
    "\n  query GetChats($episode_id: uuid!) {\n    chats(\n      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }\n      order_by: { comment_time: asc }\n      limit: 100\n    ) {\n      ...ChatFragment\n    }\n  }\n": types.GetChatsDocument,
    "\n  query GetCommentsEpisode(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        created_at: { _lt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.GetCommentsEpisodeDocument,
    "\n  query GetCommentsEpisodeByLikes(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $likes_cursor: Int\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        _and: {\n          created_at: { _lt: $cursor }\n          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }\n        }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.GetCommentsEpisodeByLikesDocument,
    "\n  query GetLatestEpisodeComment(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        created_at: { _gt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.GetLatestEpisodeCommentDocument,
    "\n  query GetLatestWorkComment(\n    $work_id: Int!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        created_at: { _gt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.GetLatestWorkCommentDocument,
    "\n  query GetCommentsWork(\n    $work_id: Int!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        created_at: { _lt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.GetCommentsWorkDocument,
    "\n  query GetCommentsWorkByLikes(\n    $work_id: Int!\n    $cursor: timestamptz\n    $likes_cursor: Int\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        _and: {\n          created_at: { _lt: $cursor }\n          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }\n        }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.GetCommentsWorkByLikesDocument,
    "\n  query GetReplies(\n    $_reply_to: uuid!\n    $cursor: timestamptz!\n    $reply_limit: Int!\n  ) {\n    replies(\n      args: {\n        _reply_to: $_reply_to\n        cursor: $cursor\n        reply_limit: $reply_limit\n      }\n    ) {\n      content\n      work_id\n      user_id\n      id\n      episode_id\n      created_at\n      commenter_name\n      reply_to\n      replied_to_commenter_name\n      user {\n        anonymous\n        id\n      }\n      is_like\n      likes_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n": types.GetRepliesDocument,
    "\n  mutation MutateEpisodeComment(\n    $episode_id: uuid!\n    $content: String!\n    $reply_to: uuid\n    $replied_to_commenter_name: String\n    $commenter_name: String!\n    $ip: String\n  ) {\n    insert_comments_one(\n      object: {\n        episode_id: $episode_id\n        content: $content\n        reply_to: $reply_to\n        replied_to_commenter_name: $replied_to_commenter_name\n        commenter_name: $commenter_name\n        ip: $ip\n      }\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.MutateEpisodeCommentDocument,
    "\n  mutation MutateWorkComment(\n    $work_id: Int!\n    $content: String!\n    $reply_to: uuid\n    $replied_to_commenter_name: String\n    $commenter_name: String!\n    $ip: String\n  ) {\n    insert_comments_one(\n      object: {\n        work_id: $work_id\n        content: $content\n        reply_to: $reply_to\n        replied_to_commenter_name: $replied_to_commenter_name\n        commenter_name: $commenter_name\n        ip: $ip\n      }\n    ) {\n      ...CommentFragment\n    }\n  }\n": types.MutateWorkCommentDocument,
    "\n  query GetTodayEpisodes($where: episodes_bool_exp!) {\n    episodes(where: $where, order_by: { start_time: asc }) {\n      ...TodayFragment\n    }\n  }\n": types.GetTodayEpisodesDocument,
    "\n  query GetEpisode($id: uuid!) {\n    episodes_by_pk(id: $id) {\n      ...EpisodeFragment\n      work {\n        ...WorkFragment\n      }\n    }\n  }\n": types.GetEpisodeDocument,
    "\n  query GetLiveIds($where: episodes_bool_exp!) {\n    episodes(where: $where, order_by: { start_time: asc }) {\n      id\n    }\n  }\n": types.GetLiveIdsDocument,
    "\n  fragment ChatFragment on chats {\n    content\n    work_id\n    user_id\n    comment_time\n    id\n    episode_id\n    created_at\n    commenter_name\n    user {\n      anonymous\n      id\n    }\n  }\n": types.ChatFragmentFragmentDoc,
    "\n  fragment CommentFragment on comments {\n    content\n    work_id\n    user_id\n    id\n    episode_id\n    created_at\n    commenter_name\n    user {\n      anonymous\n      id\n    }\n    reply_count\n    is_like\n    likes_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.CommentFragmentFragmentDoc,
    "\n  fragment EpisodeFragment on episodes {\n    id\n    title\n    end_time\n    start_time\n    number\n    has_next_episode\n    next_episode_id\n    work {\n      id\n      title\n      series_title\n      series_id\n      has_episodes\n    }\n  }\n": types.EpisodeFragmentFragmentDoc,
    "\n  fragment TodayFragment on episodes {\n    id\n    title\n    end_time\n    start_time\n    number\n    has_next_episode\n    has_prev_episode\n    next_episode_id\n    work {\n      id\n      title\n      series_title\n      series_id\n      has_episodes\n      tid\n    }\n  }\n": types.TodayFragmentFragmentDoc,
    "\n  fragment RankingEpisodeFragment on episodes {\n    id\n    title\n    start_time\n    number\n    end_time\n    has_next_episode\n    next_episode_id\n    comments_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.RankingEpisodeFragmentFragmentDoc,
    "\n  fragment DailyEpisodeFragment on episodes {\n    id\n    title\n    start_time\n    number\n    end_time\n    has_next_episode\n    next_episode_id\n  }\n": types.DailyEpisodeFragmentFragmentDoc,
    "\n  fragment RequestFragment on request_works {\n    id\n    approval_status\n    detail\n    official_url\n    user_id\n    work_title\n    created_at\n    updated_at\n  }\n": types.RequestFragmentFragmentDoc,
    "\n  fragment WorkFragment on works {\n    id\n    title\n    series_title\n    series_id\n    has_episodes\n  }\n": types.WorkFragmentFragmentDoc,
    "\n  fragment FragmentEpisode on episodes {\n    title\n    start_time\n    number\n    id\n    has_next_episode\n    next_episode_id\n    end_time\n  }\n": types.FragmentEpisodeFragmentDoc,
    "\n  mutation InsertLike($object: likes_insert_input!) {\n    insert_likes_one(\n      object: $object\n      on_conflict: { constraint: likes_user_id_comment_id_key }\n    ) {\n      id\n      user_id\n      comment_id\n    }\n  }\n": types.InsertLikeDocument,
    "\n  mutation DeleteLike($user_id: String!, $comment_id: uuid!) {\n    delete_likes(\n      where: { user_id: { _eq: $user_id }, comment_id: { _eq: $comment_id } }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n": types.DeleteLikeDocument,
    "\n  query GetRanking {\n    works_all_ranking(args: { _limit: 5 }) {\n      ...WorkFragment\n      comments_aggregate {\n        aggregate {\n          count\n        }\n      }\n      episodes(limit: 1, order_by: { comments_aggregate: { count: desc } }) {\n        ...RankingEpisodeFragment\n      }\n    }\n  }\n": types.GetRankingDocument,
    "\n  query GetDailyEpisodeRanking($_gte: timestamptz!) {\n    daily_episodes_ranking(args: { _limit: 5 }) {\n      ...DailyEpisodeFragment\n      comments_aggregate(where: { created_at: { _gte: $_gte } }) {\n        aggregate {\n          count\n        }\n      }\n      work {\n        ...WorkFragment\n      }\n    }\n  }\n": types.GetDailyEpisodeRankingDocument,
    "\n  query GetDailyWorkRanking($_gte: timestamptz!) {\n    daily_works_ranking(args: { _limit: 5 }) {\n      ...WorkFragment\n      comments_aggregate(where: { created_at: { _gte: $_gte } }) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n": types.GetDailyWorkRankingDocument,
    "\n  mutation InsertRequest($object: request_works_insert_input!) {\n    insert_request_works_one(object: $object) {\n      ...RequestFragment\n    }\n  }\n": types.InsertRequestDocument,
    "\n  mutation DeleteRequest($id: Int!) {\n    delete_request_works_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteRequestDocument,
    "\n  query GetRequests($user_id: String!, $limit: Int!, $offset: Int!) {\n    request_works(\n      where: { user_id: { _eq: $user_id } }\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      ...RequestFragment\n    }\n    request_works_aggregate(where: { user_id: { _eq: $user_id } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.GetRequestsDocument,
    "\n  query GetRequestByStatus(\n    $status: status_enum!\n    $user_id: String!\n    $limit: Int!\n    $offset: Int!\n  ) {\n    request_works(\n      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }\n      order_by: { created_at: desc }\n      limit: $limit\n      offset: $offset\n    ) {\n      ...RequestFragment\n    }\n    request_works_aggregate(\n      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.GetRequestByStatusDocument,
    "\n  query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {\n    works(\n      where: {\n        _and: {\n          season_year: { _eq: $year }\n          season_name: { _eq: $season }\n          tid: { _is_null: false }\n        }\n      }\n      limit: $limit\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n": types.GetSeasonWorksDocument,
    "\n  query SearchWorks($search: String!, $limit: Int) {\n    search_works(\n      args: { search: $search, _limit: $limit }\n      order_by: { series_title: asc }\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n": types.SearchWorksDocument,
    "\n  query GetWorkSeries($id: Int!, $series_id: String!) {\n    works_by_pk(id: $id) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }) {\n        ...FragmentEpisode\n      }\n    }\n    works(\n      where: { _and: { id: { _neq: $id }, series_id: { _eq: $series_id } } }\n      order_by: [{ has_episodes: desc }]\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n": types.GetWorkSeriesDocument,
    "\n  query GetWork($id: Int!) {\n    works_by_pk(id: $id) {\n      ...WorkFragment\n    }\n  }\n": types.GetWorkDocument,
    "\n  query GetSeries($series_id: String!) {\n    works(\n      where: { series_id: { _eq: $series_id } }\n      order_by: [{ has_episodes: desc }]\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n": types.GetSeriesDocument,
    "\n  query GetWeeklyWorks($limit: Int) {\n    weekly_works(args: { limit_num: $limit }) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n": types.GetWeeklyWorksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChatsEpisode(\n    $episode_id: uuid!\n    $get_limit: Int!\n    $_lt: Int!\n    $_gte: Int!\n  ) {\n    chats_by_episode_id(\n      args: {\n        _episode_id: $episode_id\n        get_limit: $get_limit\n        _gte: $_gte\n        _lt: $_lt\n      }\n      order_by: { comment_time: asc }\n    ) {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  query GetChatsEpisode(\n    $episode_id: uuid!\n    $get_limit: Int!\n    $_lt: Int!\n    $_gte: Int!\n  ) {\n    chats_by_episode_id(\n      args: {\n        _episode_id: $episode_id\n        get_limit: $get_limit\n        _gte: $_gte\n        _lt: $_lt\n      }\n      order_by: { comment_time: asc }\n    ) {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChatsWork(\n    $work_id: Int!\n    $get_limit: Int!\n    $_lt: Int!\n    $_gte: Int!\n  ) {\n    chats_by_work_id(\n      args: {\n        _work_id: $work_id\n        get_limit: $get_limit\n        _gte: $_gte\n        _lt: $_lt\n      }\n      order_by: { comment_time: asc }\n    ) {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  query GetChatsWork(\n    $work_id: Int!\n    $get_limit: Int!\n    $_lt: Int!\n    $_gte: Int!\n  ) {\n    chats_by_work_id(\n      args: {\n        _work_id: $work_id\n        get_limit: $get_limit\n        _gte: $_gte\n        _lt: $_lt\n      }\n      order_by: { comment_time: asc }\n    ) {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertChat($object: chats_insert_input!) {\n    insert_chats_one(object: $object) {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  mutation InsertChat($object: chats_insert_input!) {\n    insert_chats_one(object: $object) {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SubscriptionChats(\n    $episode_id: uuid!\n    $initial_created_at: timestamptz!\n  ) {\n    chats_stream(\n      cursor: {\n        initial_value: { created_at: $initial_created_at }\n        ordering: ASC\n      }\n      batch_size: 100\n      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }\n    ) {\n      content\n      work_id\n      user_id\n      comment_time\n      id\n      episode_id\n      created_at\n      commenter_name\n      user {\n        anonymous\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription SubscriptionChats(\n    $episode_id: uuid!\n    $initial_created_at: timestamptz!\n  ) {\n    chats_stream(\n      cursor: {\n        initial_value: { created_at: $initial_created_at }\n        ordering: ASC\n      }\n      batch_size: 100\n      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }\n    ) {\n      content\n      work_id\n      user_id\n      comment_time\n      id\n      episode_id\n      created_at\n      commenter_name\n      user {\n        anonymous\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChats($episode_id: uuid!) {\n    chats(\n      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }\n      order_by: { comment_time: asc }\n      limit: 100\n    ) {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  query GetChats($episode_id: uuid!) {\n    chats(\n      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }\n      order_by: { comment_time: asc }\n      limit: 100\n    ) {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsEpisode(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        created_at: { _lt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsEpisode(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        created_at: { _lt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsEpisodeByLikes(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $likes_cursor: Int\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        _and: {\n          created_at: { _lt: $cursor }\n          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }\n        }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsEpisodeByLikes(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $likes_cursor: Int\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        _and: {\n          created_at: { _lt: $cursor }\n          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }\n        }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLatestEpisodeComment(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        created_at: { _gt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query GetLatestEpisodeComment(\n    $episode_id: uuid!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        episode_id: { _eq: $episode_id }\n        created_at: { _gt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLatestWorkComment(\n    $work_id: Int!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        created_at: { _gt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query GetLatestWorkComment(\n    $work_id: Int!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        created_at: { _gt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsWork(\n    $work_id: Int!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        created_at: { _lt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsWork(\n    $work_id: Int!\n    $cursor: timestamptz\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        created_at: { _lt: $cursor }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsWorkByLikes(\n    $work_id: Int!\n    $cursor: timestamptz\n    $likes_cursor: Int\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        _and: {\n          created_at: { _lt: $cursor }\n          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }\n        }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsWorkByLikes(\n    $work_id: Int!\n    $cursor: timestamptz\n    $likes_cursor: Int\n    $limit: Int!\n    $order_by: [comments_order_by!]\n  ) {\n    comments(\n      where: {\n        work_id: { _eq: $work_id }\n        _and: {\n          created_at: { _lt: $cursor }\n          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }\n        }\n        reply_to: { _is_null: true }\n      }\n      order_by: $order_by\n      limit: $limit\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReplies(\n    $_reply_to: uuid!\n    $cursor: timestamptz!\n    $reply_limit: Int!\n  ) {\n    replies(\n      args: {\n        _reply_to: $_reply_to\n        cursor: $cursor\n        reply_limit: $reply_limit\n      }\n    ) {\n      content\n      work_id\n      user_id\n      id\n      episode_id\n      created_at\n      commenter_name\n      reply_to\n      replied_to_commenter_name\n      user {\n        anonymous\n        id\n      }\n      is_like\n      likes_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetReplies(\n    $_reply_to: uuid!\n    $cursor: timestamptz!\n    $reply_limit: Int!\n  ) {\n    replies(\n      args: {\n        _reply_to: $_reply_to\n        cursor: $cursor\n        reply_limit: $reply_limit\n      }\n    ) {\n      content\n      work_id\n      user_id\n      id\n      episode_id\n      created_at\n      commenter_name\n      reply_to\n      replied_to_commenter_name\n      user {\n        anonymous\n        id\n      }\n      is_like\n      likes_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MutateEpisodeComment(\n    $episode_id: uuid!\n    $content: String!\n    $reply_to: uuid\n    $replied_to_commenter_name: String\n    $commenter_name: String!\n    $ip: String\n  ) {\n    insert_comments_one(\n      object: {\n        episode_id: $episode_id\n        content: $content\n        reply_to: $reply_to\n        replied_to_commenter_name: $replied_to_commenter_name\n        commenter_name: $commenter_name\n        ip: $ip\n      }\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  mutation MutateEpisodeComment(\n    $episode_id: uuid!\n    $content: String!\n    $reply_to: uuid\n    $replied_to_commenter_name: String\n    $commenter_name: String!\n    $ip: String\n  ) {\n    insert_comments_one(\n      object: {\n        episode_id: $episode_id\n        content: $content\n        reply_to: $reply_to\n        replied_to_commenter_name: $replied_to_commenter_name\n        commenter_name: $commenter_name\n        ip: $ip\n      }\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation MutateWorkComment(\n    $work_id: Int!\n    $content: String!\n    $reply_to: uuid\n    $replied_to_commenter_name: String\n    $commenter_name: String!\n    $ip: String\n  ) {\n    insert_comments_one(\n      object: {\n        work_id: $work_id\n        content: $content\n        reply_to: $reply_to\n        replied_to_commenter_name: $replied_to_commenter_name\n        commenter_name: $commenter_name\n        ip: $ip\n      }\n    ) {\n      ...CommentFragment\n    }\n  }\n"): (typeof documents)["\n  mutation MutateWorkComment(\n    $work_id: Int!\n    $content: String!\n    $reply_to: uuid\n    $replied_to_commenter_name: String\n    $commenter_name: String!\n    $ip: String\n  ) {\n    insert_comments_one(\n      object: {\n        work_id: $work_id\n        content: $content\n        reply_to: $reply_to\n        replied_to_commenter_name: $replied_to_commenter_name\n        commenter_name: $commenter_name\n        ip: $ip\n      }\n    ) {\n      ...CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTodayEpisodes($where: episodes_bool_exp!) {\n    episodes(where: $where, order_by: { start_time: asc }) {\n      ...TodayFragment\n    }\n  }\n"): (typeof documents)["\n  query GetTodayEpisodes($where: episodes_bool_exp!) {\n    episodes(where: $where, order_by: { start_time: asc }) {\n      ...TodayFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEpisode($id: uuid!) {\n    episodes_by_pk(id: $id) {\n      ...EpisodeFragment\n      work {\n        ...WorkFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEpisode($id: uuid!) {\n    episodes_by_pk(id: $id) {\n      ...EpisodeFragment\n      work {\n        ...WorkFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLiveIds($where: episodes_bool_exp!) {\n    episodes(where: $where, order_by: { start_time: asc }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetLiveIds($where: episodes_bool_exp!) {\n    episodes(where: $where, order_by: { start_time: asc }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ChatFragment on chats {\n    content\n    work_id\n    user_id\n    comment_time\n    id\n    episode_id\n    created_at\n    commenter_name\n    user {\n      anonymous\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment ChatFragment on chats {\n    content\n    work_id\n    user_id\n    comment_time\n    id\n    episode_id\n    created_at\n    commenter_name\n    user {\n      anonymous\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CommentFragment on comments {\n    content\n    work_id\n    user_id\n    id\n    episode_id\n    created_at\n    commenter_name\n    user {\n      anonymous\n      id\n    }\n    reply_count\n    is_like\n    likes_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CommentFragment on comments {\n    content\n    work_id\n    user_id\n    id\n    episode_id\n    created_at\n    commenter_name\n    user {\n      anonymous\n      id\n    }\n    reply_count\n    is_like\n    likes_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EpisodeFragment on episodes {\n    id\n    title\n    end_time\n    start_time\n    number\n    has_next_episode\n    next_episode_id\n    work {\n      id\n      title\n      series_title\n      series_id\n      has_episodes\n    }\n  }\n"): (typeof documents)["\n  fragment EpisodeFragment on episodes {\n    id\n    title\n    end_time\n    start_time\n    number\n    has_next_episode\n    next_episode_id\n    work {\n      id\n      title\n      series_title\n      series_id\n      has_episodes\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TodayFragment on episodes {\n    id\n    title\n    end_time\n    start_time\n    number\n    has_next_episode\n    has_prev_episode\n    next_episode_id\n    work {\n      id\n      title\n      series_title\n      series_id\n      has_episodes\n      tid\n    }\n  }\n"): (typeof documents)["\n  fragment TodayFragment on episodes {\n    id\n    title\n    end_time\n    start_time\n    number\n    has_next_episode\n    has_prev_episode\n    next_episode_id\n    work {\n      id\n      title\n      series_title\n      series_id\n      has_episodes\n      tid\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RankingEpisodeFragment on episodes {\n    id\n    title\n    start_time\n    number\n    end_time\n    has_next_episode\n    next_episode_id\n    comments_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RankingEpisodeFragment on episodes {\n    id\n    title\n    start_time\n    number\n    end_time\n    has_next_episode\n    next_episode_id\n    comments_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DailyEpisodeFragment on episodes {\n    id\n    title\n    start_time\n    number\n    end_time\n    has_next_episode\n    next_episode_id\n  }\n"): (typeof documents)["\n  fragment DailyEpisodeFragment on episodes {\n    id\n    title\n    start_time\n    number\n    end_time\n    has_next_episode\n    next_episode_id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RequestFragment on request_works {\n    id\n    approval_status\n    detail\n    official_url\n    user_id\n    work_title\n    created_at\n    updated_at\n  }\n"): (typeof documents)["\n  fragment RequestFragment on request_works {\n    id\n    approval_status\n    detail\n    official_url\n    user_id\n    work_title\n    created_at\n    updated_at\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WorkFragment on works {\n    id\n    title\n    series_title\n    series_id\n    has_episodes\n  }\n"): (typeof documents)["\n  fragment WorkFragment on works {\n    id\n    title\n    series_title\n    series_id\n    has_episodes\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FragmentEpisode on episodes {\n    title\n    start_time\n    number\n    id\n    has_next_episode\n    next_episode_id\n    end_time\n  }\n"): (typeof documents)["\n  fragment FragmentEpisode on episodes {\n    title\n    start_time\n    number\n    id\n    has_next_episode\n    next_episode_id\n    end_time\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertLike($object: likes_insert_input!) {\n    insert_likes_one(\n      object: $object\n      on_conflict: { constraint: likes_user_id_comment_id_key }\n    ) {\n      id\n      user_id\n      comment_id\n    }\n  }\n"): (typeof documents)["\n  mutation InsertLike($object: likes_insert_input!) {\n    insert_likes_one(\n      object: $object\n      on_conflict: { constraint: likes_user_id_comment_id_key }\n    ) {\n      id\n      user_id\n      comment_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteLike($user_id: String!, $comment_id: uuid!) {\n    delete_likes(\n      where: { user_id: { _eq: $user_id }, comment_id: { _eq: $comment_id } }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteLike($user_id: String!, $comment_id: uuid!) {\n    delete_likes(\n      where: { user_id: { _eq: $user_id }, comment_id: { _eq: $comment_id } }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRanking {\n    works_all_ranking(args: { _limit: 5 }) {\n      ...WorkFragment\n      comments_aggregate {\n        aggregate {\n          count\n        }\n      }\n      episodes(limit: 1, order_by: { comments_aggregate: { count: desc } }) {\n        ...RankingEpisodeFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRanking {\n    works_all_ranking(args: { _limit: 5 }) {\n      ...WorkFragment\n      comments_aggregate {\n        aggregate {\n          count\n        }\n      }\n      episodes(limit: 1, order_by: { comments_aggregate: { count: desc } }) {\n        ...RankingEpisodeFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDailyEpisodeRanking($_gte: timestamptz!) {\n    daily_episodes_ranking(args: { _limit: 5 }) {\n      ...DailyEpisodeFragment\n      comments_aggregate(where: { created_at: { _gte: $_gte } }) {\n        aggregate {\n          count\n        }\n      }\n      work {\n        ...WorkFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDailyEpisodeRanking($_gte: timestamptz!) {\n    daily_episodes_ranking(args: { _limit: 5 }) {\n      ...DailyEpisodeFragment\n      comments_aggregate(where: { created_at: { _gte: $_gte } }) {\n        aggregate {\n          count\n        }\n      }\n      work {\n        ...WorkFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDailyWorkRanking($_gte: timestamptz!) {\n    daily_works_ranking(args: { _limit: 5 }) {\n      ...WorkFragment\n      comments_aggregate(where: { created_at: { _gte: $_gte } }) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDailyWorkRanking($_gte: timestamptz!) {\n    daily_works_ranking(args: { _limit: 5 }) {\n      ...WorkFragment\n      comments_aggregate(where: { created_at: { _gte: $_gte } }) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertRequest($object: request_works_insert_input!) {\n    insert_request_works_one(object: $object) {\n      ...RequestFragment\n    }\n  }\n"): (typeof documents)["\n  mutation InsertRequest($object: request_works_insert_input!) {\n    insert_request_works_one(object: $object) {\n      ...RequestFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteRequest($id: Int!) {\n    delete_request_works_by_pk(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteRequest($id: Int!) {\n    delete_request_works_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRequests($user_id: String!, $limit: Int!, $offset: Int!) {\n    request_works(\n      where: { user_id: { _eq: $user_id } }\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      ...RequestFragment\n    }\n    request_works_aggregate(where: { user_id: { _eq: $user_id } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRequests($user_id: String!, $limit: Int!, $offset: Int!) {\n    request_works(\n      where: { user_id: { _eq: $user_id } }\n      limit: $limit\n      offset: $offset\n      order_by: { created_at: desc }\n    ) {\n      ...RequestFragment\n    }\n    request_works_aggregate(where: { user_id: { _eq: $user_id } }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRequestByStatus(\n    $status: status_enum!\n    $user_id: String!\n    $limit: Int!\n    $offset: Int!\n  ) {\n    request_works(\n      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }\n      order_by: { created_at: desc }\n      limit: $limit\n      offset: $offset\n    ) {\n      ...RequestFragment\n    }\n    request_works_aggregate(\n      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRequestByStatus(\n    $status: status_enum!\n    $user_id: String!\n    $limit: Int!\n    $offset: Int!\n  ) {\n    request_works(\n      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }\n      order_by: { created_at: desc }\n      limit: $limit\n      offset: $offset\n    ) {\n      ...RequestFragment\n    }\n    request_works_aggregate(\n      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {\n    works(\n      where: {\n        _and: {\n          season_year: { _eq: $year }\n          season_name: { _eq: $season }\n          tid: { _is_null: false }\n        }\n      }\n      limit: $limit\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {\n    works(\n      where: {\n        _and: {\n          season_year: { _eq: $year }\n          season_name: { _eq: $season }\n          tid: { _is_null: false }\n        }\n      }\n      limit: $limit\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchWorks($search: String!, $limit: Int) {\n    search_works(\n      args: { search: $search, _limit: $limit }\n      order_by: { series_title: asc }\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchWorks($search: String!, $limit: Int) {\n    search_works(\n      args: { search: $search, _limit: $limit }\n      order_by: { series_title: asc }\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetWorkSeries($id: Int!, $series_id: String!) {\n    works_by_pk(id: $id) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }) {\n        ...FragmentEpisode\n      }\n    }\n    works(\n      where: { _and: { id: { _neq: $id }, series_id: { _eq: $series_id } } }\n      order_by: [{ has_episodes: desc }]\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWorkSeries($id: Int!, $series_id: String!) {\n    works_by_pk(id: $id) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }) {\n        ...FragmentEpisode\n      }\n    }\n    works(\n      where: { _and: { id: { _neq: $id }, series_id: { _eq: $series_id } } }\n      order_by: [{ has_episodes: desc }]\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetWork($id: Int!) {\n    works_by_pk(id: $id) {\n      ...WorkFragment\n    }\n  }\n"): (typeof documents)["\n  query GetWork($id: Int!) {\n    works_by_pk(id: $id) {\n      ...WorkFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSeries($series_id: String!) {\n    works(\n      where: { series_id: { _eq: $series_id } }\n      order_by: [{ has_episodes: desc }]\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSeries($series_id: String!) {\n    works(\n      where: { series_id: { _eq: $series_id } }\n      order_by: [{ has_episodes: desc }]\n    ) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetWeeklyWorks($limit: Int) {\n    weekly_works(args: { limit_num: $limit }) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWeeklyWorks($limit: Int) {\n    weekly_works(args: { limit_num: $limit }) {\n      ...WorkFragment\n      episodes(order_by: { number: desc_nulls_last }, limit: 8) {\n        ...FragmentEpisode\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;