import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const port = process.env.post || 5001;

const app = express();

app.get("/", (req,res) => {
    res.send("hellow!");
});

app.listen(port, () => {
    console.log('server started successfully on port : 5001');
});

