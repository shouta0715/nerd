import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { FC, Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "src/components/Elements/Button";

type CancelButtonProps = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
} & ButtonProps;

type TitleProps = {
  children: ReactNode;
  className?: string;
};

type ContentProps = {
  children: ReactNode;
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  panelStyle?: string;
};

export const Modal = ({
  open,
  onClose,
  children,
  panelStyle = "",
}: ModalProps) => {
  return (
    <Transition.Root as={Fragment} show={open}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
              <Dialog.Panel
                className={twMerge(
                  clsx(
                    "transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full sm:max-w-sm sm:p-6",
                    panelStyle
                  )
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const CancelButton: FC<CancelButtonProps> = ({
  children,
  onClose,
  ...props
}) => {
  return (
    <div className="mt-5 sm:mt-6">
      <Button
        {...props}
        className={twMerge(clsx("w-full", props.className))}
        onClick={onClose}
        theme={props.theme ?? "primary"}
        type="button"
      >
        {children}
      </Button>
    </div>
  );
};

const Title: FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <div className="text-center">
      <Dialog.Title
        as="h3"
        className={twMerge(
          clsx(`text-base font-semibold leading-6 text-gray-900`, className)
        )}
      >
        {children}
      </Dialog.Title>
    </div>
  );
};

const Content: FC<ContentProps> = ({ children }) => {
  return (
    <div className="mt-2 ">
      <div className="text-sm text-gray-500">{children}</div>
    </div>
  );
};

Modal.CancelButton = CancelButton;
Modal.Title = Title;
Modal.Content = Content;
