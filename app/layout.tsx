"use client";

import { ReactNode, HTMLProps } from "react";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

interface RootLayoutProps extends HTMLProps<HTMLHtmlElement> {
  children: ReactNode;
}

Modal.setAppElement("div");

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
