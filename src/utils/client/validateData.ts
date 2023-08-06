import { Error } from "src/libs/error";

type Validate<E extends Error> = {
  trigger: boolean;
  error: E;
};

type ValidateData<E extends Error> = Validate<E> | Validate<E>[];

export const validateData = <E extends Error>(target: ValidateData<E>) => {
  if (!Array.isArray(target)) {
    if (target.trigger) {
      throw target.error;
    }

    return;
  }

  target.forEach((item) => {
    if (item.trigger) {
      throw item.error;
    }
  });
};
