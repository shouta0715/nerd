import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { ActiveLink } from "src/components/Elements/ActiveLink";
import { navigation } from "src/utils/client/navData";

const navList = navigation.map((item) => (
  <ActiveLink
    key={item.name}
    activeClassName="text-indigo-600"
    className="group relative flex items-center justify-center rounded-md py-1.5 text-xs hover:text-indigo-600 md:py-2 md:text-sm"
    href={`${item.href}`}
  >
    {({ isActive }) => (
      <>
        <item.icon className={`mr-2 h-full w-6 ${item.color}`} />
        <div className="flex h-full flex-1 items-center">
          <span className="inline-block flex-1">{item.name}</span>
          <ChevronRightIcon
            className={clsx(
              isActive ? "stroke-indigo-600" : "stroke-slate-300",
              "h-4 w-4  group-hover:stroke-indigo-600"
            )}
          />
        </div>
      </>
    )}
  </ActiveLink>
));

export const Nav = () => (
  <nav>
    <div className="grid grid-cols-2 gap-2 md:grid-cols-1">{navList}</div>
  </nav>
);
