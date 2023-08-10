import { GetChatsWorkQuery, GetChatsWorkQueryVariables } from "src/gql/graphql";
import { genRandomId } from "src/utils/client/genRandomId";

export const generateInfiniteChats = ({
  work_id,
  get_limit,
  ...pageParam
}: GetChatsWorkQueryVariables): GetChatsWorkQuery => {
  const { _gte, _lt } = pageParam;

  const loopCount = _lt - _gte;

  const chats: GetChatsWorkQuery = {
    chats_by_work_id: Array.from({ length: loopCount }, (_, i) => ({
      id: `${_gte} ~ ${_lt} chats ${i}`,
      comment_time: _gte + i,
      content: `${_gte} ~ ${_lt} chats ${i}`,
      created_at: new Date().toISOString(),
      work_id,
      user_id: `${_gte} ~ ${_lt} ${genRandomId()}`,
      commenter_name: `${_gte} ~ ${_lt} ${genRandomId()}`,
      user: {
        id: `${_gte} ~ ${_lt} ${genRandomId()}`,
        anonymous: false,
      },
    })),
  };

  return chats;
};
