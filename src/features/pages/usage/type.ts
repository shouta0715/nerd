import { ReactNode } from "react";

export type Step = {
  id: number;
  content: string;
  element?: ReactNode;
  stepContent: string;
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;

  iconBackground: string;
};
