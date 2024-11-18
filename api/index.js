import express from 'express';
import mongoose from 'mongoose';


const connectdb = async()=>{
    await mongoose.connect(process.env.MongoDBURI);
    console.log("database connected successfully");
}

const app = express();
app.listen(3000,()=>{
    console.log("server is running at port number 3000 ");
});
connectdb();