import { FC } from "react";

interface ButtonProps {
  children?: any;
  layout?: "primary" | "accent";
  size?: "sm" | "base" | "lg";
  className?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="mainBtn">
      {children}
    </button>
  );
};
