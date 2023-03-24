import { ReactNode, HTMLProps } from "react";
import "@/styles/globals.css";
import { Navbar } from "@/components/organisms";

interface RootLayoutProps extends HTMLProps<HTMLHtmlElement> {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
