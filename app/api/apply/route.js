import Conectdb from "@/app/componet/Connectdb"
import { NextResponse } from "next/server"


export const POST = async (request)=>{
    const data = await request.json()
   
    const database = await Conectdb();
    const collections = await database.collection('data')
   const alldata =  collections.insertOne(data)
   console.log(alldata)

    return NextResponse.json({
      message: 'success'
    })
}