const express = require("express");
var bodyParser = require("body-parser");
const { render } = require("ejs");
const app = express();
const port = 3000;

//Sử dụng bodyParser
app.use(bodyParser.urlencoded());
app.set("views" + "./views"); //cấu hình nơi lưu file views
app.set("view engine", "ejs"); //cấu hình engins
app.use(express.static("public")); //cai dat thu muc public

// const upload = multer({ storage: storage });

let products = [];

// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, fill, cb) => {
//     cb(null, "./public/img");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Data.now()}-${file.originalname}`);
//   },
// });

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/index", (req, res) => {
  res.render("index", {
    products: products,
  });
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.post("/store", (req, res) => {
  // su ly thong tin
  let product = req.body;
  products.push(product);
  res.redirect("/index");
});

app.listen(port, () => {
  console.log("Khởi tạo server thành công !");
});
