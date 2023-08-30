import { GetTrendQuery, GetTrendQueryVariables } from "src/gql/graphql";

export const mswTrendingChatsEpisodeData = ({
  limit,
}: GetTrendQueryVariables): GetTrendQuery => {
  return {
    trending_chat_episodes: Array.from({ length: limit }, (_, i) => ({
      id: i.toString(),
      title: `Episode ${i}`,
      number: i,
      has_next_episode: true,
      start_time: new Date().toISOString(),
      end_time: new Date(new Date().getTime() + 30 * 60 * 1000),
      work: {
        id: i,
        title: `Work ${i}`,
        series_title: `Work ${i}`,
        series_id: `W${i}`,
        has_episodes: true,
      },
      short_term_chats: {
        aggregate: {
          count: limit - i,
        },
      },
      mid_term_chats: {
        aggregate: {
          count: limit - i,
        },
      },
      long_term_chats: {
        aggregate: {
          count: limit - i,
        },
      },
    })),
  };
};
