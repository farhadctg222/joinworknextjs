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

export const metadata = {
  title: 'join work',
  description: 'JoinWork.org ন্যায্যমূল্যে স্বাস্থ্যকর খাবার সরবরাহ করে, যাতে সবাই সহজে পুষ্টিকর আহার পেতে পারে। আমাদের লক্ষ্য সবার জন্য সাশ্রয়ী মূল্যে খাবার নিশ্চিত করা।
 ',
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
