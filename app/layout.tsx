import { ReactNode, HTMLProps } from "react";
import "@/styles/globals.css";

interface RootLayoutProps extends HTMLProps<HTMLHtmlElement> {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
