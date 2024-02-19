import dotenv from 'dotenv';
import connetDB from './db/index.js';


// import mongoose from "mongoose";


// import express from "express"
// import { db_name } from "./constants.js";


dotenv.config({path:"./env"})

connetDB();

// const app=express();
// (async ()=>{

//   try 
//   {
//      const connectInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
//      console.log(connectInstance.connection.host)

//      app.on("error",(error)=>
//      {
//         console.log("BATCHIT NHI HO PAA RHI",error)
//      });

//      app.listen(process.env.PORT,()=>
//      {
//          console.log("connectevity established",process.env.PORT)
//      })


//   }
//   catch(error)
//   {
//     console.log("kuch gadbad hai daya CONNECTION NHI HUA",error);
    
//   }
// })()