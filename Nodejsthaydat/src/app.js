import express from "express";

const app = express();

//middlewate
app.use(express.json()); // xử lí dữ liệu gửi từ client gửi lên server
//router
app.get("/", (req, res) => {
  console.log("req.query");
});
app.get("/products/:id", (req, res) => {
  console.log(req.params.id); //req.params.slug
});

app.post("/products", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  console.log("heelllo");
});
app.get("/", (req, res) => {
  console.log("heelllo");
});
app.get("/", (req, res) => {
  console.log("heelllo");
});
export const viteNodeApp = app;
