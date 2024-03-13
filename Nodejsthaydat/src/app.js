import express, { Router } from "express";
import ProductRouter from "./router/product";

import { connectDB } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middlewate
app.use(express.json()); // xử lí dữ liệu gửi từ client gửi lên server

//conect db
connectDB(process.env.DB_URI);
//routes
app.use("/api", ProductRouter); //truy cập đến /api thì dẫn đến router
Router;
export const viteNodeApp = app;
