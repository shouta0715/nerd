import React from "react";
import { genRandomId } from "src/utils/client/genRandomId";

export const useId = () => {
  const [uuid, setuuid] = React.useState<string | null>(null);

  React.useLayoutEffect(() => {
    setuuid(genRandomId());
  }, []);

  return uuid;
};
