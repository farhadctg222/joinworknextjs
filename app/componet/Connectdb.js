
// kHhrzRcatDf9DMMM mongodb password
// application userName

import { MongoClient, ServerApiVersion } from "mongodb";

let db ;
const Conectdb = async () =>{
    if(db){
        return db
    }
    try{
        const uri = "mongodb+srv://application:kHhrzRcatDf9DMMM@cluster0.fotua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
       const client = new MongoClient(uri,{
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors:true,
            }
        })
        db = client.db('apply')
        
        return db
    } catch (error){
        console.log(error)
    }
}
export default Conectdb;