import { FC, ReactNode } from "react";
import { Loader } from "@/components/atoms/Loader";
import { COLORS } from "@/constants";

interface ButtonProps {
  children?: ReactNode;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  isLoading = false,
  type = "button",
}) => (
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
