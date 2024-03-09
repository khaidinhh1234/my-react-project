//cách 1 :khởi tạo 1 Server Nodejs sử dụng http

// const http = require("http");

// let server = http.createServer((req, res) => {
//   console.log("Khởi tạo server thành công !");
// });

// server.listen(3000);

//Cách 2 :khởi tạo 1 Server Nodejs sử dụng express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
//cài đặt để chạy dc file HTML
const engine = require("consolidate");
app.set("views", __dirname + "/views"); //set đường dẫn thư mục view
app.engine("html", engine.mustache); //
app.set("view engine", "html"); //set engine cho view

app.get("/", (req, res) => {
  res.render("index.html", { age: "Trường ăn cc" });
});

app.get("/add-product", (req, res, next) => {
  res.send(`
  <form action="/product" method="POST">
  <input type="text" name="productName">
  <button type="submit">Add Product</button></form>`);
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});
// app.get("/kkk/12/32", (req, res) => {
//   res.json({
//     param: req.params.id,
//     query: req.query,
//   });
// });

app.listen(port, () => {
  console.log("Khởi tạo server thành công !");
});
