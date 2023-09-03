import {
  Emoji_Types_Enum,
  GetReactionsEpisodeQuery,
  GetReactionsEpisodeQueryVariables,
} from "src/gql/graphql";

export const mswInfiniteReactionsEpisodeData = (
  variables: GetReactionsEpisodeQueryVariables
): GetReactionsEpisodeQuery => {
  const { episode_id, _gte, _lt } = variables;

  const length = _lt - _gte;

  const data: GetReactionsEpisodeQuery = {
    reactions_by_episode_id: Array.from({ length }, (_, i) => {
      const id = i + _gte;

      return {
        id,
        episode_id,
        emoji_type: Emoji_Types_Enum.Heart,
        push_count: 1,
        reactions_time: id,
      };
    }),
  };

  return data;
};
