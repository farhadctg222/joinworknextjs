
// kHhrzRcatDf9DMMM mongodb password
// application userName

const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let db;
 export const Conectdb =  ()=> {

   if(db){
    return db
   }

    try {
      const uri = "mongodb+srv://application:kHhrzRcatDf9DMMM@cluster0.fotua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    // Connect the client to the server	(optional starting in v4.7)
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
      });





     db = client.db('apply')
     return db
    }catch (error){
        console.log(error)
    }
  
}




