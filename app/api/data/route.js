import { Conectdb } from "@/app/componet/Connectdb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (request,response)=>{
 
  
    const dabase  = await Conectdb()
    
    
    const bookcollection = await dabase.collection('data')
    const res1 = await bookcollection.find({}).toArray()
   
    return NextResponse.json(res1)
}

