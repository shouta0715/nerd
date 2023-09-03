import {
  Emoji_Types_Enum,
  GetReactionsWorkQuery,
  GetReactionsWorkQueryVariables,
} from "src/gql/graphql";

export const mswInfiniteReactionsWorkData = (
  variables: GetReactionsWorkQueryVariables
): GetReactionsWorkQuery => {
  const { _gte, _lt } = variables;

  const length = _lt - _gte;

  const data: GetReactionsWorkQuery = {
    reactions_by_work_id: Array.from({ length }, (_, i) => {
      const id = i + _gte;

      return {
        id,
        emoji_type: Emoji_Types_Enum.Heart,
        push_count: 1,
        reactions_time: id,
      };
    }),
  };

  return data;
};
