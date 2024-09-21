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
      <IoMenu className="text-[60px] ">
        </IoMenu>
        </SheetTrigger>
    <SheetContent className="flex flex-col">
      
       {/* loago */}
        
          <div className="mt-32 md-40 text-center text-md text-accent">
            <Link href="/">
            <h1>Join Work<span className="text-[#66fcc2]">.</span> </h1>
            </Link>
        

          </div>
          <nav className="flex flex-col justify-center items-center gap-5">
            {
              links.map((links,index)=>{
                return(
                  <Link
                  href={links.path}
                  key={index}
                  className={`${links.path === pathname && "text-accent border-b-2 border-accent"}  text-xl capitalize hover:text-accent transition-all `}>
                    {links.name}

                  </Link>
                )
              })
            }
          </nav>
      
      
    </SheetContent>
  </Sheet>
  
  );
}
export default MobileNav;
