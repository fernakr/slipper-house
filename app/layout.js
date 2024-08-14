import { Jua, Inclusive_Sans, Cabin } from "next/font/google";
// import google fonts

import "./globals.css";

const inclusive = Inclusive_Sans({ subsets: ["latin"], weight: ["400"],   variable: "--inclusive-font",});
const jua = Jua({ subsets: ["latin"], weight: ["400"],  variable: "--jua-font", });
// /const cabin = Cabin({ subsets: ["latin"], weight: ["400","600","700"], variable: "--cabin-font"});

export const metadata = {
  title: "slipper house program",
  description: "showcase of slipper assembly community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={`${inclusive.variable} ${jua.variable}`}>{children}</body>
    </html>
  );
}
