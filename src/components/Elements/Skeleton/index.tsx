import { EpisodeMenuSkeleton } from "src/components/Elements/Skeleton/items/EpisodeMenuSkeleton";
import { EpisodeSkeleton } from "src/components/Elements/Skeleton/items/EpisodeSkeleton";
import { NextEpisodeMenuSkeleton } from "src/components/Elements/Skeleton/items/NextEpisodeMenuSkeleton";
import { TimerSkeleton } from "src/components/Elements/Skeleton/items/TimerSkeleton";
import { TodaySkeleton } from "src/components/Elements/Skeleton/items/TodaySkeleton";
import { WorkEpisodeSkeleton } from "src/components/Elements/Skeleton/items/WorkEpisodeSkeleton";
import { WorkSkeleton } from "src/components/Elements/Skeleton/items/WorkSkeleton";

type Themes =
  | "episodeMenu"
  | "episode"
  | "nextMenu"
  | "timer"
  | "workEpisode"
  | "work"
  | "today";

type ThemeProps = {
  episodeMenu: never;
  episode: never;
  nextMenu: {
    isHidden?: boolean;
  };
  series: never;
  timer: never;
  workEpisode: never;
  work: {
    is_short?: boolean;
    isButton?: boolean;
  };
  today: never;
};
const ThemeComponents = {
  episodeMenu: EpisodeMenuSkeleton,
  episode: EpisodeSkeleton,
  nextMenu: ({ isHidden = false }) => (
    <NextEpisodeMenuSkeleton isHidden={isHidden} />
  ),
  timer: TimerSkeleton,
  workEpisode: WorkEpisodeSkeleton,
  work: ({ is_short = false, isButton = false }) => (
    <WorkSkeleton is_short={is_short} isButton={isButton} />
  ),
  today: TodaySkeleton,
};

const Accessibility = {
  episodeMenu: "エピソードメニューをロード中...",
  episode: "エピソードをロード中...",
  nextMenu: "次のエピソードをロード中...",
  timer: "タイマーをロード中...",
  workEpisode: "エピソードをロード中...",
  work: "作品をロード中...",
  today: "今日のエピソードをロード中...",
};

const selectTheme = (theme: Themes) => {
  if (theme in ThemeComponents) {
    return theme;
  }

  return "work";
};

type SkeletonProps<T extends Themes> = {
  theme: T;
  props?: Partial<ThemeProps[T]>;
};

export const Skeleton = <T extends Themes>({
  theme,
  props,
}: SkeletonProps<T>) => {
  const Component = ThemeComponents[selectTheme(theme)];
  const accessibility = Accessibility[selectTheme(theme)];

  return (
    <>
      <span className="sr-only">{accessibility}</span>
      <Component {...props} />
    </>
  );
};
