import express, { Router } from "express";
import ProductRouter from "./router/product";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

const app = express();

//middlewate
app.use(express.json()); // xử lí dữ liệu gửi từ client gửi lên server
app.use(morgan("dev"));
//conect db
connectDB("mongodb://localhost:27017/WD18330");
//routes
app.use("/api", ProductRouter); //truy cập đến /api thì dẫn đến router
Router;
export const viteNodeApp = app;
