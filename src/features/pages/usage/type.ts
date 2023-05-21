import { ReactNode, SVGProps } from "react";

export type Step = {
  id: number;
  content: string;
  element?: ReactNode;
  stepContent: string;
  Icon: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
  iconBackground: string;
};
