import { GetChatsEpisodeQuery, GetChatsWorkQuery } from "src/gql/graphql";

export const episodeChatData: GetChatsEpisodeQuery = {
  chats_by_episode_id: [
    {
      id: "1",
      user_id: "1",
      episode_id: "1",
      content: "test",
      comment_time: 1,
      created_at: "2021-08-01T00:00:00.000Z",
      commenter_name: "test",
      user: {
        id: "1",
        anonymous: false,
      },
    },
  ],
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
