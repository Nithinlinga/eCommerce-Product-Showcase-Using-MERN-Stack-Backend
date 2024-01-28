import mongoose from 'mongoose';

const connectDB =async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected ro MongoDB ${conn.connection.host}`)
    }catch(error){
        console.log(`Error Mongodb ${error}`) ;
    }
}
export default connectDB;