import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { PinInput } from "src/components/Elements/PinInput";
import { useDownModal } from "src/features/timer/hooks/useDownModal";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CountDownModalContent: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { inputTime, padTime, handleChange, onSubmitHandler } = useDownModal({
    setIsOpen,
    isOpen,
  });

  return (
    <div className="w-full space-y-4 p-6">
      <p className="grid place-items-center font-bold">
        放送時間を入力してください。
        <span className="mt-2 inline-block text-xs font-normal md:text-sm">
          設定した時間を0秒としてコメントが表示されます。
        </span>
        <span className="mt-0.5 inline-block text-xs text-red-500 underline decoration-dotted md:text-sm">
          ※正しい時間が入力されていない場合異なる時間のコメントが表示されます。
        </span>
      </p>
      <div className="w-full">
        <div className="mx-auto w-max">
          <PinInput
            handleChange={handleChange}
            inputTime={inputTime}
            padTime={padTime}
          />
        </div>
        <Button
          className="mx-auto mt-4 bg-indigo-500 font-bold text-white"
          onClick={onSubmitHandler}
          size="sm"
          type="submit"
        >
          設定
        </Button>
      </div>
    </div>
  );
};
