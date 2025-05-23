"use client";

import "./globals.css";
import { ModeWrapper } from "@/components/ModeWrapper";

import { StoreProvider } from "./StoreProvider";
import { Toaster } from "react-hot-toast";

const metadata = {
  title: "Image pins developed by Aike",
  description: "implemented by aike using NextJS and Node Express API",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Impressa</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <StoreProvider>
          <ModeWrapper>
            {children}
            {/* Toast */}
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                className: "text-sm",
                duration: 4000,
                removeDelay: 500,
              }}
            />
          </ModeWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
