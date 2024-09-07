import { Inter } from "next/font/google";
import "./globals.css";
import Foter from "./componet/Foter";
import { Suspense } from "react";
import Loading from "./componet/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Join Work",
  description: "Join Work Together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading></Loading>}>
      <body className='p-3'>
         <div className="sm:center md:center lg:center">
          
        
        {children}
        
        <Foter></Foter>
       
        </div>
        </body>
        </Suspense>
    </html>
  );
}
