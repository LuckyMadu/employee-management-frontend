import { ReactNode } from "react";

export interface TextProps {
  text?: string;
  children?: ReactNode;
}

export const TableRow: React.FC<TextProps> = ({ text, children }) => {
  return (
    <td className="border px-4 py-2 font-medium">
      {text} {children}
    </td>
  );
};
