import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbconfig";
dotenv.config();

const port = process.env.post || 5002;

const app = express();

app.get("/", (req,res) => {
    res.send("hellow!");
});

app.listen(port, () => {
    console.log('server started successfully on port : 5002');
});

