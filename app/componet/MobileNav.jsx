'use client'

import {useRouter, usePathname} from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";


const  MobileNav =  ()=> {
  const pathname = usePathname();
  const session = useSession()
  const handle = ()=>{
    signOut()
  }
  const router = useRouter()
  console.log(router)
  const direct = ()=>{
    router.push('/api/auth/signin')
  } 
  

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
        },
       
        {
            name: 'dashboard',
            path:'/dashboard'
        },
       

       
    ]
  return (

    <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <IoMenu className="text-[40px] ">
        </IoMenu>
        </SheetTrigger>
    <SheetContent className="flex text-accent flex-col">
      <div className="text-center mt-20">
     <h2 className="text-2xl text-green bg-white text-red-800" >{session?.data?.user?.name}</h2>
     <h2>{session?.data?.user?.type}</h2>
       {session?.data?.user?.image && <Image alt={session?.data?.user?.name} width={50} height={50} className='m-auto mt-5'   src={session?.data?.user?.image}></Image>}
      </div>
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
          {session.status === "authenticated" ? <Link className="text-center" href='' onClick={handle}><button className="btn-sm btn btn-success ">LogOut</button></Link> :  <Link className="text-center" onClick={direct} href="/api/auth/signin"><button className="btn-sm btn btn-success ">LogIn</button></Link>}
      
      
    </SheetContent>
  </Sheet>
  
  );
}
export default MobileNav;
