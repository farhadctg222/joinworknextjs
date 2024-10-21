import { Conectdb } from "@/app/componet/Connectdb"
import { NextResponse } from "next/server"


export const POST = async (request)=>{
    const data = await request.json()
    
   
    const database = await Conectdb();
    const collections = await database.collection('post')
   const alldata =  await collections.insertOne(data)
   console.log(alldata)

    return NextResponse.json({
      message: 'success',alldata
    })
}
export const GET = async (request,response)=>{
 
  
    const dabase  = await Conectdb()
    
    
    const bookcollection = await dabase.collection('post')
    const res1 = await bookcollection.find({}).toArray()
   
    return NextResponse.json(res1)
}

 