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
  description: 'JoinWork.org ন্যায্যমূল্যে স্বাস্থ্যকর খাবার সরবরাহ করে, যাতে সবাই সহজে পুষ্টিকর আহার পেতে পারে। আমাদের লক্ষ্য সবার জন্য সাশ্রয়ী মূল্যে খাবার নিশ্চিত করা',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className='p-3'>
        <Header></Header>



    <Head>
      <title>JoinWork.org - ন্যায্যমূল্যে পুষ্টিকর খাবার</title>
      <meta name="description" content="JoinWork.org ন্যায্যমূল্যে পুষ্টিকর খাবার সরবরাহ করে, যাতে সবাই সুস্বাদু ও স্বাস্থ্যকর খাবার পেতে পারে।" />
      <meta name="keywords" content="ন্যায্যমূল্য খাবার, কম খরচে খাবার, পুষ্টিকর খাবার, JoinWork, সাশ্রয়ী মূল্যে খাবার" />
      <meta name="author" content="JoinWork.org" />

      {/* Open Graph (Facebook & Social Media) */}
      <meta property="og:title" content="JoinWork.org - ন্যায্যমূল্যে পুষ্টিকর খাবার" />
      <meta property="og:description" content="JoinWork.org সাশ্রয়ী মূল্যে পুষ্টিকর খাবার সরবরাহ করে, যা সকলের জন্য সহজলভ্য।" />
      <meta property="og:image" content="https://www.joinwork.org/cover-image.jpg" />
      <meta property="og:url" content="https://www.joinwork.org" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="JoinWork.org - ন্যায্যমূল্যে পুষ্টিকর খাবার" />
      <meta name="twitter:description" content="আমাদের লক্ষ্য সবার জন্য সাশ্রয়ী মূল্যে স্বাস্থ্যকর খাবার নিশ্চিত করা।" />
      <meta name="twitter:image" content="https://www.joinwork.org/cover-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>

     

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
