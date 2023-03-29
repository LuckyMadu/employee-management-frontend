import { FC } from "react";
import classNames from "classnames";
import { Loader } from "@/components/atoms/Loader";
import { COLORS } from "@/constants";

interface ButtonProps {
  children?: any;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  isLoading,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader width="18" strokeColor={COLORS.WHITE} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
