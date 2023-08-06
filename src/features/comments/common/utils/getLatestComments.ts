import {
  episodeLatestCommentsDocument,
  workLatestCommentsDocument,
} from "src/documents/comments";
import { Order_By } from "src/gql/graphql";
import { client } from "src/libs/graphqlClient";

type GetLatestEpisodeCommentsArgs = {
  episode_id: string;
  cursor: string | null;
};

type GetLatestWorkCommentsArgs = {
  work_id: number;
  cursor: string | null;
};

export const getLatestEpisodeComments = async ({
  episode_id,
  cursor,
}: GetLatestEpisodeCommentsArgs) => {
  const data = await client.request(episodeLatestCommentsDocument, {
    limit: 100,
    episode_id,
    cursor: cursor ?? new Date().toISOString(),
    order_by: {
      created_at: Order_By.Desc,
    },
  });

  return data;
};

export const getLatestWorkComments = async ({
  work_id,
  cursor,
}: GetLatestWorkCommentsArgs) => {
  const data = await client.request(workLatestCommentsDocument, {
    limit: 100,
    work_id,
    cursor: cursor ?? new Date().toISOString(),
    order_by: {
      created_at: Order_By.Desc,
    },
  });

  return data;
};
