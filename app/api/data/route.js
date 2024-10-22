import { Conectdb } from "@/app/componet/Connectdb"
import { NextResponse } from "next/server"
export const dynamic = 'force-dynamic'
export const GET = async (request,response)=>{
 
  
    const dabase  = await Conectdb()
    
    
    const bookcollection = await dabase.collection('data')
    const res1 = await bookcollection.find({}).toArray()
    if(!res1.ok){
        throw new Error('Network response was not ok')
    }
   
    return NextResponse.json(res1)
}


