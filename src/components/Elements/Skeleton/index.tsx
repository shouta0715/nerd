import { EpisodeMenuSkeleton } from "src/components/Elements/Skeleton/items/EpisodeMenuSkeleton";
import { EpisodeSkeleton } from "src/components/Elements/Skeleton/items/EpisodeSkeleton";
import { NextButtonSkelton } from "src/components/Elements/Skeleton/items/NextButtonSkelton";
import { SearchSkelton } from "src/components/Elements/Skeleton/items/SearchSkelton";
import { TimerSkeleton } from "src/components/Elements/Skeleton/items/TimerSkeleton";
import { TodaySkeleton } from "src/components/Elements/Skeleton/items/TodaySkeleton";
import { TrendsSkelton } from "src/components/Elements/Skeleton/items/TrendsSkelton";
import { WithSeries } from "src/components/Elements/Skeleton/items/WithSeries";
import { WorkEpisodeSkeleton } from "src/components/Elements/Skeleton/items/WorkEpisodeSkeleton";
import { WorkSkeleton } from "src/components/Elements/Skeleton/items/WorkSkeleton";

type Themes =
  | "episodeMenu"
  | "episode"
  | "timer"
  | "workEpisode"
  | "work"
  | "today"
  | "nextButton"
  | "search"
  | "withSeries"
  | "trends";

type ThemeProps = {
  episodeMenu: never;
  nextButton: never;
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
  search: never;
  withSeries: never;
  trends: never;
};
const ThemeComponents = {
  episodeMenu: EpisodeMenuSkeleton,
  episode: EpisodeSkeleton,
  timer: TimerSkeleton,
  workEpisode: WorkEpisodeSkeleton,
  work: ({ is_short = false, isButton = false }) => (
    <WorkSkeleton is_short={is_short} isButton={isButton} />
  ),
  today: TodaySkeleton,
  nextButton: NextButtonSkelton,
  search: SearchSkelton,
  withSeries: WithSeries,
  trends: TrendsSkelton,
};

const Accessibility = {
  episodeMenu: "エピソードメニューをロード中...",
  episode: "エピソードをロード中...",
  timer: "タイマーをロード中...",
  workEpisode: "エピソードをロード中...",
  work: "作品をロード中...",
  today: "今日のエピソードをロード中...",
  nextButton: "次のエピソードをロード中...",
  search: "検索中...",
  withSeries: "作品とシリーズをロード中...",
  trends: "トレンドをロード中...",
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
