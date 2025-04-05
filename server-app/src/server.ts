import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbconfig";
import shortUrl from "./routes/shortUrl"
dotenv.config();
connectDB();

const port = process.env.post || 5002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin:"http://localhost:5173",
        credentials: true,
    })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
    console.log('server started successfully on port : 5002');
});

