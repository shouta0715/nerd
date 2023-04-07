import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

const DynamicAvatar = dynamic(() =>
  import("src/components/Elements/Avatar").then((mod) => mod.Avatar)
);

const DynamicModal = dynamic(() =>
  import("src/components/Elements/Modal").then((mod) => mod.Modal)
);

const DynamicAccountMenu = dynamic(() =>
  import("src/components/Elements/AccountMenu").then((mod) => mod.AccountMenu)
);

const DynamicImage = dynamic(() =>
  import("next/image").then((mod) => mod.default)
);

export const Header: FC = () => {
  const user = useUserState((state) => state.user);
  const authLoading = useGlobalState((state) => state.authLoading);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <Link
              className="my-2 inline-block font-hiragino-sans text-3xl font-bold"
              href="/"
            >
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nerd
              </span>
            </Link>
            <div className="order-1 flex items-center justify-between">
              {user && !user.anonymous ? (
                <div ref={elementRef} className="relative">
                  {authLoading ? (
                    <Loader className="animate-fadeIn" />
                  ) : (
                    <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                      {user.isDefaultPhoto ? (
                        <DynamicImage
                          alt="avatar"
                          className="rounded-full object-contain"
                          height={38}
                          src={user?.photo_url ?? ""}
                          width={38}
                        />
                      ) : (
                        <DynamicAvatar
                          user_id={user.id}
                          user_name={user.user_name}
                        />
                      )}
                    </button>
                  )}
                  <DynamicAccountMenu
                    isUserMenuOpen={isUserMenuOpen}
                    setIsUserMenuOpen={setIsUserMenuOpen}
                  />
                </div>
              ) : (
                <>
                  <Button
                    className="btn-primary text-sm"
                    loading={authLoading}
                    onClick={() => changeIsOpenModal(true)}
                    radius="md"
                    size="xs"
                  >
                    ログイン
                  </Button>
                  <DynamicModal />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
