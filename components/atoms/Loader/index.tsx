"use client";

import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";

interface IProps {
  width?: string;
  strokeColor?: string;
}

export const Loader: FC<IProps> = ({ width = "98", strokeColor = "grey" }) => {
  return (
    <div className="flex justify-center items-center">
      <RotatingLines
        strokeColor={strokeColor}
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
};
