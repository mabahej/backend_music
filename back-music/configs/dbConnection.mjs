import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb= async ()=> {
try {
const connectDB= await mongoose.connect(process.env.CONNECTION_STRING)
console.log(
   // check connection  mongoose.connection.readyState
    );
}catch(err){ 
console.log(err)
}
    }
    export default connectDb