"use client";
// ---------------------------------------------------Imports-------------------
// -----------------------------

import RootContextProvider, { RootContext } from "./_contexts/RootContext/RootContextProvider";
import "./global.css";
import Partners from "./_components/partners/Partners";
import { ReactLenis } from "lenis/react";
import "./_utils/globalization/i18n/i18n";
import Fab from "./_components/fab/Fab";
import TrustedBy from "./_components/TrustedBy/TrustedBy";
import { useContext, useEffect } from "react";
import GlobalLayout from "./_components/layout/globalLayout/GlobalLayout";

// -----------------------------------------------------------------------------
// ----------------------------- export const metadata = {   title: "Next.js",
// description: "Generated by Next.js", };

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RootContextProvider>
          <ReactLenis root>
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </ReactLenis>
        </RootContextProvider>
        <div id="portal" className="relative "></div>
      </body>
    </html>
  );
}
