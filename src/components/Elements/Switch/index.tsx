import { Switch as TSwitch } from "@headlessui/react";
import clsx from "clsx";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

type SwitchTheme =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "timer"
  | "transparent";

type SwitchSize = "sm" | "md" | "lg" | "xl";

const themes = {
  primary: {
    switch: "ui-checked:bg-indigo-500 ui-not-checked:bg-gray-200",
    mark: "bg-white",
  },
  secondary: {
    switch: "ui-checked:bg-pink-500 ui-not-checked:bg-gray-200",
    mark: "bg-white",
  },
  success: {
    switch: "ui-checked:bg-green-500 ui-not-checked:bg-gray-200",
    mark: "bg-white",
  },
  danger: {
    switch: "ui-checked:bg-red-500 ui-not-checked:bg-gray-200",
    mark: "bg-white",
  },
  transparent: {
    switch: "ui-checked:bg-transparent ui-not-checked:bg-transparent border",
    mark: "bg-black",
  },
  timer: {
    switch: "ui-not-checked:bg-indigo-500 ui-checked:bg-orange-500",
    mark: "bg-white",
  },
};

const sizes = {
  sm: {
    switch: "w-11 h-6",
    mark: "w-4 h-4 ui-not-checked:translate-x-1 ui-checked:translate-x-6",
  },

  md: {
    switch: "w-14 h-8",
    mark: "w-6 h-6 ui-not-checked:translate-x-1 ui-checked:translate-x-7",
  },

  lg: {
    switch: "w-[4.5rem] h-10",
    mark: "w-8 h-8 ui-not-checked:translate-x-1 ui-checked:translate-x-9",
  },

  xl: {
    switch: "w-24 h-12",
    mark: "w-10 h-10 ui-not-checked:translate-x-1 ui-checked:translate-x-[3.25rem]",
  },
};

type ClassNames = {
  switch: string;
  mark: string;
};

const defaultClassNames: ClassNames = {
  switch: "",
  mark: "",
};

type SwitchProps = {
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  enabledSrOnlyChar?: string;
  disabledSrOnlyChar?: string;
  theme?: SwitchTheme;
  size?: SwitchSize;
  classNames?: ClassNames;
};

export const Switch: FC<SwitchProps> = ({
  className = "",
  defaultChecked = false,
  onChange,
  disabled = false,
  enabledSrOnlyChar = "有効",
  disabledSrOnlyChar = "無効",
  theme = "primary",
  size = "md",
  checked,
  classNames = defaultClassNames,
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);

  return (
    <TSwitch
      aria-checked={checkedState}
      aria-label={checkedState ? enabledSrOnlyChar : disabledSrOnlyChar}
      aria-roledescription="switch"
      as="button"
      checked={typeof checked === "boolean" ? checked : checkedState}
      className={twMerge(
        clsx(
          "w- relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ",
          themes[theme].switch,
          sizes[size].switch,
          className,
          classNames.switch
        )
      )}
      disabled={disabled}
      onChange={(flag) => {
        if (typeof checked !== "boolean") setCheckedState(flag);

        onChange?.(flag);
      }}
    >
      <span className="sr-only">
        {checkedState ? enabledSrOnlyChar : disabledSrOnlyChar}
      </span>
      <span
        className={twMerge(
          clsx(
            "inline-block h-4 w-4 transform rounded-full transition",
            themes[theme].mark,
            sizes[size].mark,
            classNames.mark
          )
        )}
      />
    </TSwitch>
  );
};