import { Cabin } from "next/font/google";
// import google fonts

import "./globals.css";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "slipper house program",
  description: "showcase of slipper assembly community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
