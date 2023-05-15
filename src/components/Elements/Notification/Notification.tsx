import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
  NotificationType,
  useNotificationState,
} from "src/components/Elements/Notification/store";

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

export const Notification = () => {
  const {
    isShown: show,
    title,
    message,
    type,
    duration,
    isPersistent,
    onHide,
    className,
    classNames,
  } = useNotificationState((state) => ({
    isShown: state.isShown,
    title: state.title,
    message: state.message,
    type: state.type,
    duration: state.duration,
    isPersistent: state.isPersistent,
    onHide: state.onHide,
    className: state.className,
    classNames: state.classNames,
  }));

  const intervalId = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (show && !isPersistent) {
      intervalId.current = setTimeout(() => {
        onHide();
      }, duration);
    }

    return () => {
      if (intervalId.current) {
        clearTimeout(intervalId.current);
      }
    };
  }, [duration, isPersistent, onHide, show]);

  return (
    <Transition
      className={twMerge(
        clsx(
          "pointer-events-auto fixed right-0 top-0 z-[200] flex max-h-36 w-max max-w-full overflow-y-auto rounded-lg border border-slate-200 bg-white px-2 py-1.5 shadow-lg md:mx-4 md:mt-4 md:max-w-xl md:py-2.5",
          className
        )
      )}
      enter="transform transition-all ease-in-out duration-300"
      enterFrom="translate-y-2 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transform transition-all ease-in-out duration-300"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-2 opacity-0"
      show={show}
    >
      <div className="sticky top-0 w-max self-start bg-white">
        {getTypeIcons(type)({
          className: clsx("w-7 h-7", TypeColors[type]),
        })}
      </div>
      <div className="flex flex-col space-y-2 break-words ">
        <h3
          className={twMerge(
            clsx("max-w-full break-words px-4 py-1 text-sm font-bold"),
            classNames?.title,
            TypeTextColors[type]
          )}
        >
          {title}
        </h3>
        {message && (
          <p
            className={twMerge(
              clsx("w-full max-w-full break-words px-4 text-xs text-dimmed"),
              classNames?.message
            )}
          >
            {message}
          </p>
        )}
      </div>
      <button className="sticky top-0 h-7 w-7 self-start bg-white">
        <XMarkIcon
          className="h-5 w-5  text-slate-400 hover:text-slate-500"
          onClick={onHide}
        />
      </button>
    </Transition>
  );
};
