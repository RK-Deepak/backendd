import { db_name } from "../constants.js";
import mongoose from "mongoose";
import express from "express"

const app=express();
const connetDB=async ()=>

{
    try 
    {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
        console.log(connectionInstance.connection.host);

        app.on("error",(error)=>
        {
            console.log("batchit nhi ho par hi")
        })
        app.listen(process.env.PORT,()=>
        {
            console.log("connection establsihed",process.env.PORT)
        })
        
    
    }
    catch(error)
    {
        console.log("Not able to connect the db",error);
        process.exit(1)
    }
}

export default connetDB;