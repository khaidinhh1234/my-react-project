import express from "express";
import authorRouter from "./routers/auth.js";
import productRouter from "./routers/product.js";
import { connectDB } from "../config/db";
import cors from "cors";
import dotenv from "dotenv";

import morgan from "morgan";
dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

//connect DB
connectDB("mongodb://localhost:27017/xuongnodejs");
//router
app.use("/api/v1", authorRouter);
app.use("/api/v1", productRouter);
//
export const viteNodeApp = app;
