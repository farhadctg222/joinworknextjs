export const dynamic = 'force-dynamic'
import { Inter } from "next/font/google";
import "./globals.css";
import Foter from "./componet/Foter";
import { Suspense } from 'react';
import Loading from './loading';
import Header from "./componet/Header";
import AuthProvider from "./componet/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Join Work",
  description: "Join Work Together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className='p-3'>
        <Header></Header>

     
        <Suspense fallback={<Loading></Loading>}>

         <div className="sm:center md:center lg:center">
          

              {children}
             
        
           </div>
        </Suspense>
        
        <Foter></Foter>
       
        
        </body>
        </AuthProvider>
    </html>
  );
}
