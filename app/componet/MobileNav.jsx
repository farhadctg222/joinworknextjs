'use client'

import {usePathname} from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { SheetDemo } from "./Sheet";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";


const  MobileNav = ()=> {
  const pathname = usePathname();


    const links = [
        {
            name: 'home',
            path:'/'
        },
        {
            name: 'service',
            path:'/service'
        },
        {
            name: 'blog',
            path:'/blog'
        },
        {
            name: 'contact',
            path:'/contact'
        }
       
    ]
  return (
    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <IoMenu className="text-[32px] text-accent">
        </IoMenu>
        </SheetTrigger>
    <SheetContent className="flex flex-col">
      
       {/* loago */}
        
          <div className="mt-32 md-40 text-center text-md text-accent">
            <Link href="/">
            <h1>Join Work<span className="text-[#66fcc2]">.</span> </h1>
            </Link>
        

          </div>
      
      
    </SheetContent>
  </Sheet>
  
  );
}
export default MobileNav;
