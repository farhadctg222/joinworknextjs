import { Conectdb } from "@/app/componet/Connectdb"
import { ObjectId } from "mongodb"

export const DELETE = async (request,{params})=>{
   
    const db = await Conectdb()
    const collection = await db.collection('data')
     try{
        const delet =  await collection.deleteOne({_id: new ObjectId(params.id)})
         return Response.json({message:'delete the user',delet})
        
     }
     catch(error){
      return Response.json({message:'something rong'})
     }

     
    }
 