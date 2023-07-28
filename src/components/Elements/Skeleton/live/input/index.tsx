import React from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Image } from "src/components/Elements/Image";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const InputSkeleton = () => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const [authLoading, setIsOpenModal] = useGlobalState((state) => [
    state.authLoading,
    state.setIsOpenModal,
  ]);

  return (
    <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200 bg-white p-2 lg:relative lg:border-0 lg:bg-transparent lg:p-0">
      <div className="flex items-center justify-center gap-4  lg:flex-col lg:items-stretch lg:justify-between">
        <div className="flex items-center gap-4">
          <button
            className="h-[38px] w-[38px]"
            onClick={() => {
              if (user?.anonymous) setIsOpenModal(true);

              if (!user?.anonymous && user)
                setUser({ ...user, isDefaultPhoto: !user.isDefaultPhoto });
            }}
            type="button"
          >
            {user?.isDefaultPhoto ? (
              <Image
                alt="avatar"
                height={38}
                isLoading={authLoading}
                src={user?.photo_url ?? ""}
                width={38}
              />
            ) : (
              <Avatar
                isLoading={authLoading}
                size="md"
                user_id={user?.id ?? ""}
                user_name={user?.user_name ?? ""}
              />
            )}
          </button>
          {user && (
            <span className="hidden flex-1 lg:block">{user.user_name}</span>
          )}
        </div>
        <div className="mx-auto h-4 w-full rounded-md bg-slate-200" />
      </div>
      <p className="mt-4 hidden place-items-center text-sm text-dimmed lg:grid">
        ルールを守って良識のあるコメントをしましょう
      </p>
    </div>
  );
};
