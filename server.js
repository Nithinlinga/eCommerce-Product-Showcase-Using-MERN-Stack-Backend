// const express =require("express")
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
//configure env
dotenv.config();

//database config
connectDB();
const app=express(); 

//midddlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//routes 
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)
//rest api
app.get("/",(req,res)=>{
    res.send("welcome to app");
})
const PORT=process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log(`sever running on ${process.env.DEV_MODE} mode port ${PORT}`)
});