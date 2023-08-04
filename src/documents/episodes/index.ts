import { graphql } from "src/gql/gql";

export const episodeDocument = graphql(`
  query GetEpisode($id: uuid!) {
    episodes_by_pk(id: $id) {
      ...EpisodeFragment
      work {
        ...WorkFragment
      }
    }
  }
`);
