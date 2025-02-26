export const dynamic = 'force-dynamic'
import { Inter } from "next/font/google";
import "./globals.css";
import Foter from "./componet/Foter";
import { Suspense } from 'react';
import Loading from './loading';
import Header from "./componet/Header";
import AuthProvider from "./componet/AuthProvider";
import BlogPost from "./blogPost/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'join work',
  description: 'join work together ',
}
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

        <Suspense fallback={<h1>loading..........</h1>}>
      
           <BlogPost></BlogPost>
       

         </Suspense>
        
        <Foter></Foter>
       
        
        </body>
        </AuthProvider>
    </html>
  );
}
