import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL || "";

const start = async () => {
    try {
        await mongoose.connect(DB_URL);

        app.listen(PORT, () => {
            console.log(`Server was launched on url http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
