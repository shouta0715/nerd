import { TodayEpisode, WorkEpisode } from "src/features/episodes/types";
import { GetEpisodeQuery } from "src/gql/graphql";

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

type Props = {
  episode: WorkEpisode | GetEpisodeQuery["episodes_by_pk"];
  title?: string;
  work_id?: number;
  series_id?: string | null;
};

export const genEpisodePlaceholder = ({
  episode,
  title,
  work_id,
  series_id,
}: Props) => {
  return [
    title,
    episode?.title,
    episode?.number.toString(),
    episode?.id,
    episode?.has_next_episode,
    episode?.next_episode_id,
    episode?.start_time,
    episode?.end_time,
    work_id,
    series_id,
  ];
};

export const getEpisodePlaceholder = (data: string[]): GetEpisodeQuery => {
  const [
    series_title,
    title,
    number,
    episode_id,
    has_next_episode,
    next_episode_id,
    start_time,
    end_time,
    work_id,
    series_id,
  ] = data;

  return {
    episodes_by_pk: {
      id: episode_id,
      title,
      number: +number,
      has_next_episode: has_next_episode === "true",
      start_time: start_time === "" ? null : start_time,
      end_time: end_time === "" ? null : end_time,
      next_episode_id: next_episode_id === "" ? null : next_episode_id,
      work: {
        series_title,
        title,
        id: work_id === "" ? 0 : +work_id,
        series_id: series_id === "" ? null : series_id,
        has_episodes: true,
      },
    },
  };
};
