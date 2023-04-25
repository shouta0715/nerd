import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type TextProps = {
  title: string;
  message?: string;
};

type NotificationType = "success" | "error" | "info";

type ClassNames = {
  title?: string;
  message?: string;
};

type NotificationProps = {
  duration?: number;
  className?: string;
  classNames?: ClassNames;
  type?: NotificationType;
  show: boolean;
  isPersistent?: boolean;
} & TextProps;

const TypeIcons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  info: InformationCircleIcon,
};

const TypeColors = {
  success: "stroke-green-500",
  error: "stroke-red-500",
  info: "stroke-amber-500",
};

const TypeTextColors = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-amber-500",
};

const getTypeIcons = (type: NotificationType): React.FC => {
  const Icon = TypeIcons[type];

  return (props) => <Icon {...props} />;
};

export const Notification: FC<NotificationProps> = ({
  title,
  message,
  className,
  classNames,
  duration = 3000,
  type = "info",
  isPersistent = false,
  show,
}) => {
  const [isShow, setIsShow] = React.useState(true);

  const intervalId = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (show && !isPersistent) {
      intervalId.current = setTimeout(() => {
        setIsShow(false);
      }, duration);
    }

    return () => {
      if (intervalId.current) {
        clearTimeout(intervalId.current);
      }
    };
  }, [duration, isPersistent, show]);

  return (
    <Transition
      className={twMerge(
        clsx(
          "pointer-events-auto fixed right-0 top-0 z-[200] mx-2 mt-4 flex w-96 max-w-full items-center overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg md:mx-4",
          className
        )
      )}
      enter="transform transition-all ease-in-out duration-300"
      enterFrom="translate-y-2 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transform transition-all ease-in-out duration-300"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-2 opacity-0"
      show={isShow && show}
    >
      <div className="w-max self-start">
        {getTypeIcons(type)({
          className: clsx("w-7 h-7 m-2", TypeColors[type]),
        })}
      </div>
      <div className="flex w-[calc(100%-3.25rem-1.75rem)] flex-1 flex-col space-y-2 break-words py-2.5">
        <h3
          className={twMerge(
            clsx("w-full max-w-full break-words px-4 text-sm font-bold"),
            classNames?.title,
            TypeTextColors[type]
          )}
        >
          {title}
        </h3>
        {message && (
          <p
            className={twMerge(
              clsx("w-full max-w-full break-words px-4 text-sm text-dimmed"),
              classNames?.message
            )}
          >
            {message}
          </p>
        )}
      </div>
      <button className="self-start">
        <XMarkIcon
          className="mx-2 mt-3 h-5 w-5  text-slate-400 hover:text-slate-500"
          onClick={() => setIsShow(false)}
        />
      </button>
    </Transition>
  );
};
