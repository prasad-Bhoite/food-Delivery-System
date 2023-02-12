const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase=require("./config/database");
const cloudinary = require("cloudinary");

//Handelling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting Down the Server due to Handelling Uncaught Exception`);
    process.exit(1);
});

//config

dotenv.config({path:"backend/config/config.env"});

//Connecting to Database
connectDatabase();
cloudinary.config({
cloud_name: process.env.CLOUDINARY_NAME,
api_key:process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET
});


const server=app.listen(process.env.PORT,()=>
{
    console.log(`Server is working on port http:localhost ${process.env.PORT}`);
});

//Unhandled Promises Rejections...
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting Down the Server due to unhandled  promises Rejections");
    server.close(()=>{
        process.exit(1);
    });
});
