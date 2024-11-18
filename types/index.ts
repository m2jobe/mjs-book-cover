import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Format = {
  value: string;
  label: string;
  dimensions: {
    width: number;
    height: number;
  };
};

export type Style = {
  value: string;
  label: string;
  gradient: string;
  titleFont: string;
  subtitleFont: string;
};

export interface Cover {
  format: string;
  style: string;
  title: string;
  subtitle: string;
  author: string;
  blurb: string;
  verticalAlign: string;
  horizontalAlign: string;
  isFlipped: boolean;
}

export type PositionClasses = {
  [key in "top" | "center" | "bottom" | "left" | "right"]: string;
};
