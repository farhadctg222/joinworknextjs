import { Conectdb } from "@/app/componet/Connectdb"
import { NextResponse } from "next/server"


export const POST = async (request)=>{
    const data = await request.json()
   
    const database = await Conectdb();
    const collections = await database.collection('data')
   const alldata =  await collections.insertOne(data)
   console.log(alldata)

    return NextResponse.json({
      message: 'success'
    })
}
export const getDashbord = async ()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/data`,{cache:'no-store'})

  const das = await res.json()
  return das
}