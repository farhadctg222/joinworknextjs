'use client'

import {usePathname} from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { SheetDemo } from "./Sheet";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useSession } from "next-auth/react";


const  MobileNav = ()=> {
  const pathname = usePathname();
  const session = useSession()
  console.log(session)


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
          name: 'Login',
          path:'/login'
      },
        {
            name: 'contact',
            path:'/contact'
        }
       
    ]
  return (

    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <IoMenu className="text-[40px] ">
        </IoMenu>
        </SheetTrigger>
    <SheetContent className="flex text-accent flex-col">
      
       {/* loago */}
        
          <div className="mt-32 md-40 text-center text-md text-accent">
            <Link href="/">
            <h1 className="text-accent">Join Work<span className="text-[#66fcc2]">.</span> </h1>
            </Link>
        

          </div>
          <nav className="flex flex-col justify-center items-center gap-5">
            {
              links.map((links,index)=>{
                return(
                  <Link href={links.path}
                  key={index}
                  className={`${links.path === pathname && "text-[#37ff02] border-b-2 border-accent"}  text-md text-sm text-[#37ff02] capitalize hover:text-accent transition-all `}>
                    {links.name}

                  </Link>
                 
                )
              })
            }
          </nav>
          <Link className="text-center" href="/"><button className="btn-sm btn btn-success ">Donation</button></Link>
      
      
    </SheetContent>
  </Sheet>
  
  );
}
export default MobileNav;
