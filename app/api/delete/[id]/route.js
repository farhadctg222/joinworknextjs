import { Conectdb } from "@/app/componet/Connectdb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const DELETE = async (request,{params})=>{
   
    const db = await Conectdb()
    const collection = await db.collection('data')
     try{
        const delet =  await collection.deleteOne({_id: new ObjectId(params.id)})
         return NextResponse.json({message:'delete the user',delet})
        
     }
     catch(error){
      return NextResponse.json({message:'something rong'})
     }

     
    }



 