const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase=require("./config/database");


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
