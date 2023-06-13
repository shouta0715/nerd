import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React, { FC, Fragment } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store";
import { LiveTimer } from "src/features/timer/types";
import { getIsFinished } from "src/features/timer/utils/getIsFinished";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode?: GetEpisodeQuery["episodes_by_pk"];
  mode?: LiveTimer["mode"];
  data?: GetEpisodeQuery;
  isLoading?: boolean;
};

export const NextEpisodeModal: FC<Props> = ({
  mode,
  episode,
  data,
  isLoading,
}) => {
  const [isNextOpen, setIsNextOpen] = useOpenState((state) => [
    state.isNextOpen,
    state.setIsNextOpen,
  ]);

  const interval = useTimerState((state) => state.interval);
  const timerMode = useTimerState((state) => state.mode);

  const isSkelton = isLoading && episode?.next_episode_id;

  return (
    <Transition.Root as={Fragment} show={isNextOpen}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => setIsNextOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">
            <span className="sr-only">閉じる</span>
          </div>
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full flex-col items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
                {isSkelton ? (
                  <Skeleton theme="nextMenu" />
                ) : (
                  <section className=" border-solid border-slate-200">
                    <div className="mb-4 flex items-center justify-between">
                      <Text className="text-dimmed" size="sm">
                        エピソード
                      </Text>
                    </div>
                    <Text component="div">
                      <Text className="line-clamp-2 text-sm" component="p">
                        {episode?.work.series_title}
                      </Text>
                      {episode?.title && (
                        <div className="mt-1 flex">
                          <Text className="mr-1 text-dimmed" size="sm">
                            {episode.number}.
                          </Text>
                          <Text className="line-clamp-2 text-dimmed" size="sm">
                            {episode.title}
                          </Text>
                        </div>
                      )}
                    </Text>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 py-2  md:justify-around">
                      {mode && mode === "finish" && (
                        <ButtonLink
                          className="mx-auto w-36 space-x-2 py-2  font-bold text-white sm:mx-0 sm:w-max"
                          href={`/episodes/${episode?.id}`}
                          leftIcon={
                            <ChevronDoubleRightIcon className="h-4 w-4" />
                          }
                          size="xs"
                          theme="danger"
                        >
                          もう一度見る
                        </ButtonLink>
                      )}
                      {episode?.next_episode_id && (
                        <ButtonLink
                          className={` flex h-full w-36 items-center space-x-2 py-2 font-bold text-white sm:mx-0 sm:w-max ${
                            timerMode === "up"
                              ? "bg-orange-500"
                              : "bg-indigo-500"
                          }`}
                          href={
                            getIsFinished(data?.episodes_by_pk?.end_time)
                              ? `/episodes/${data?.episodes_by_pk?.id}`
                              : `/episodes/live/${data?.episodes_by_pk?.id}`
                          }
                          leftIcon={
                            <ChevronDoubleRightIcon className="h-4 w-4" />
                          }
                          onClick={interval.reset}
                          size="xs"
                        >
                          次のエピソードへ
                        </ButtonLink>
                      )}
                      {episode?.work.has_episodes && (
                        <ButtonLink
                          as={
                            episode?.work.series_id
                              ? `/works/${episode?.work.id}?series=${episode?.work.series_id}`
                              : `/works/${episode?.work.id}`
                          }
                          className="mx-auto flex w-36 items-center space-x-2 py-2 text-white sm:mx-0 sm:w-max"
                          href={{
                            pathname: `${`/works/${episode?.work.id}`}`,
                            query: {
                              series: episode?.work.series_id ?? undefined,
                              work: [
                                episode?.work.title,
                                episode?.work.series_title,
                              ],
                            },
                          }}
                          leftIcon={<Square3Stack3DIcon className="h-4 w-4" />}
                          size="xs"
                          theme="dark"
                        >
                          他のエピソードへ
                        </ButtonLink>
                      )}
                    </div>
                  </section>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
