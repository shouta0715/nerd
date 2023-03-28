import { GetChatsWorkQuery } from "src/graphql/chat/chatQuery.generated";

export type Chat = GetChatsWorkQuery["chats_by_work_id"][0];
