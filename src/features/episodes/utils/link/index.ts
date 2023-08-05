import { GenEpisodePlaceholder } from "src/features/episodes/types";
import { genEpisodePlaceholder } from "src/features/episodes/utils";
import { getIsAlreadyFinished } from "src/features/timer/utils/getAlreadyFinished";

type EpisodeLink = {
  as: boolean;
  end_time: string;
  id: string;
};

export const getTodayEpisodeLink = ({
  as,
  end_time,
  id,
}: EpisodeLink): string => {
  const isFinished = getIsAlreadyFinished(end_time);

  if (as) {
    return isFinished
      ? `/episodes/${id}?mode=chat`
      : `/episodes/live/${id}?mode=chat`;
  }

  return isFinished ? `/episodes/${id}` : `/episodes/live/${id}`;
};

export const getEpisodeLink = ({ as, end_time, id }: EpisodeLink): string => {
  const isFinished = getIsAlreadyFinished(end_time);

  if (as) {
    return isFinished
      ? `/episodes/${id}?mode=comment&order=new`
      : `/episodes/live/${id}?mode=chat`;
  }

  return isFinished ? `/episodes/${id}` : `/episodes/live/${id}`;
};
export const getEpisodeQuery = (
  props: GenEpisodePlaceholder & {
    today: boolean;
  }
) => {
  const { today, ...query } = props;

  const isFinished = getIsAlreadyFinished(query.episode?.end_time);

  if (!isFinished) {
    return {
      mode: "chat",
    };
  }

  const episode = genEpisodePlaceholder({
    ...props,
  });

  if (today) {
    return {
      episode,
      mode: "chat",
    };
  }

  return {
    episode,
    mode: "comment",
    order: "new",
  };
};
