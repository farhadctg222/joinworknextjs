import { ObjectId } from "mongodb"

export const DELETE = async (request,{params})=>{
   
    const db = await Conectdb()
    const collection = await db.collection('data')
     try{
        const result  = await collection.deleteOne({_id: new ObjectId(params.id)})
        if(result.delteteCount===1){
         Response.status(200).json({message:'delete one ',result})
        }
        
     }
     catch{
       console.log(error)
     }
    }
 