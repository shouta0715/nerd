import { TodayEpisode, WorkEpisode } from "src/features/episodes/types";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

export const genTodayEpisodePlaceholder = (episode: TodayEpisode) => [
  episode.work.series_title,
  episode.title,
  episode.number.toString(),
  episode.id,
  episode.has_next_episode,
  episode.next_episode_id,
  episode.start_time,
  episode.end_time,
];

export const genEpisodePlaceholder = (
  episode: WorkEpisode | GetEpisodeQuery["episodes_by_pk"],
  title?: string
) => [
  title,
  episode?.title,
  episode?.number.toString(),
  episode?.id,
  episode?.has_next_episode,
  episode?.next_episode_id,
  episode?.start_time,
  episode?.end_time,
];
