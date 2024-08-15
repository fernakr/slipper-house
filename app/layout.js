import { Jua, Inclusive_Sans, Cabin } from "next/font/google";
import logo from './images/logo.png';
import header from './images/header.png';
import details from './images/details.png';

import Image from "next/image";
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
      <body className={`${inclusive.variable} ${jua.variable}`}>
        <div className="p-8 justify-center">
          <header className=" max-w-prose m-auto text-center ">
            {/* <span className="font-bold uppercase tracking-widest text-stone-500 jua text-xs mb-2 -mt-2 block">August 16, 2024</span> */}
            <h1 id="top">

              <a href="/slipper-house">
                <Image src={header} alt="slipper house assembly" width="400" className="m-auto" />
                <Image src={logo} alt="slipper house logo" width="180" className="-mt-7 m-auto"  />
                <Image src={details} alt="friday august 16th / 7-10pm gia dinh gallery / 9909 fm 969" width="300" className="m-auto mt-7" />
              </a>
            </h1>
            
            <hr />
          </header>
          <main className="pb-14">
            {children}
          </main>
          <a href="#top" className="fixed bottom-0 left-0 p-1 px-2 w-full text-right bg-stone-900 text-white">Back to Top</a>
    
        </div>
      </body>
    </html>
  );
}
