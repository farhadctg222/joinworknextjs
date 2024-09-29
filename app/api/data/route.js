import { Conectdb } from "@/app/componet/Connectdb"


export const GET = async (request)=>{
    const data = await request.json()
   
    const database = await Conectdb()
   const alldata = await database.find(data).toArray()
   console.log(alldata)

    return Response.json({
      alldata
    })
}