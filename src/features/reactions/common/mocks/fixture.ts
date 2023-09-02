import {
  InsertReactionsMutation,
  InsertReactionsMutationVariables,
} from "src/gql/graphql";

export const mswReactionsMutateData = ({
  objects,
}: InsertReactionsMutationVariables): InsertReactionsMutation => {
  return {
    insert_reactions: {
      returning: Array.from({
        length: Array.isArray(objects) ? objects.length : 1,
      }).map((_, i) => ({ id: i })),
    },
  };
};
