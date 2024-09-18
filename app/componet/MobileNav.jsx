'use client'

import {usePathname} from "next/navigation";
import {CiMenuFries} from "react-icons/ci"
import { Sheet, SheetContent, SheetTrigger } from "./Sheet";


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
        <CiMenuFries></CiMenuFries>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
      <div></div>
    </SheetContent>
   </Sheet>
  );
}
export default MobileNav;
