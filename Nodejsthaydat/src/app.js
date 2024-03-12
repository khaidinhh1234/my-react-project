import express from "express";

const app = express();

app.get("/product", (req, res) => {
  console.log("helooo");
});
export const viteNodeApp = app;
