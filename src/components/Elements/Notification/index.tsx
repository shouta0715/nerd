import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { Fragment } from "react";
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
  } = useNotificationState((state) => ({
    isShown: state.isShown,
    title: state.title,
    message: state.message,
    type: state.type,
    duration: state.duration,
    isPersistent: state.isPersistent,
    onHide: state.onHide,
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
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-[200] flex  px-4 py-6 sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={show}
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {getTypeIcons(type)({
                    className: clsx("w-6 h-6", TypeColors[type]),
                  })}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p
                    className={`text-sm font-medium text-gray-900 ${TypeTextColors[type]}`}
                  >
                    {title}
                  </p>
                  {message && (
                    <p className="mt-1 text-sm text-gray-500">{message}</p>
                  )}
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onHide}
                    type="button"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};
