'use client'

import {usePathname} from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { SheetDemo } from "./Sheet";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


const  MobileNav = ()=> {


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
    <SheetTrigger><IoMenu></IoMenu></SheetTrigger>
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  );
}
export default MobileNav;
