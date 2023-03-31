import classNames from "classnames";

export interface TextProps {
  className: string;
  children: string;
}

export const Text: React.FC<TextProps> = ({ children = "Text", className }) => {
  return (
    <p className={classNames(className, "text-xs text-gray-900")}>{children}</p>
  );
};
