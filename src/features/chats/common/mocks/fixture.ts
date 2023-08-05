import {
  GetChatsEpisodeQuery,
  GetChatsWorkQuery,
  InsertChatMutation,
  InsertChatMutationVariables,
} from "src/gql/graphql";
import { genRandomId } from "src/utils/client/genRandomId";

export const episodeChatData = (length = 100): GetChatsEpisodeQuery => {
  return {
    chats_by_episode_id: Array.from({ length }).map((_, index) => ({
      id: genRandomId(),
      user_id: "1",
      episode_id: "1",
      content: genRandomId() + index,
      comment_time: index + 1,
      created_at: "2021-08-01T00:00:00.000Z",
      commenter_name: "test",
      user: {
        id: "1",
        anonymous: false,
      },
    })),
  };
};

export const mutateEpisodeData = (
  variables: InsertChatMutationVariables
): InsertChatMutation => {
  return {
    insert_chats_one: {
      id: "1",
      user_id: "1",
      episode_id: "1",
      created_at: "2021-08-01T00:00:00.000Z",
      content: variables.object.content || "",
      comment_time: variables.object.comment_time || 0,
      commenter_name: "test",
      user: {
        id: "1",
        anonymous: false,
      },
    },
  };
};

export const workChatData: GetChatsWorkQuery = {
  chats_by_work_id: [
    {
      id: "1",
      user_id: "1",
      content: "test",
      comment_time: 1,
      work_id: 1,
      created_at: "2021-08-01T00:00:00.000Z",
      commenter_name: "test",
      user: {
        id: "1",
        anonymous: false,
      },
    },
  ],
};
