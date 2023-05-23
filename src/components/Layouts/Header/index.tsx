import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Image } from "src/components/Elements/Image";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

const DynamicAccountMenu = dynamic(() =>
  import("src/components/Elements/AccountMenu").then((mod) => mod.AccountMenu)
);

export const Header = () => {
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
    <header className="shrink-0 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="inline-block text-2xl font-bold md:text-3xl" href="/">
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Nerd
          </span>
        </Link>
        <div className="flex items-center gap-x-8">
          {user && !user.anonymous ? (
            <div ref={elementRef} className="relative">
              <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                {user.isDefaultPhoto ? (
                  <Image
                    alt="avatar"
                    isLoading={authLoading}
                    radius="full"
                    src={user?.photo_url ?? ""}
                  />
                ) : (
                  <Avatar
                    isLoading={authLoading}
                    user_id={user.id}
                    user_name={user.user_name}
                  />
                )}
              </button>

              <DynamicAccountMenu
                isUserMenuOpen={isUserMenuOpen}
                setIsUserMenuOpen={setIsUserMenuOpen}
              />
            </div>
          ) : (
            <Button
              className="px-1.5 py-1 md:px-2 md:py-1.5"
              loading={authLoading}
              onClick={() => changeIsOpenModal(true)}
              radius="md"
              size="sm"
              theme="primary"
            >
              ログイン
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
