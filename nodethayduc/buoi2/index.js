const express = require("express");

const app = express();
const port = 3000;

app.set("views" + "./views"); //cấu hình nơi lưu file views
app.set("view engine", "ejs"); //cấu hình engins
app.use(express.static("public"));

app.get("/", (req, res) => {
  let username = "khaidinhh";

  let products = [
    {
      name: "khai",
      price: 1000,
    },
    {
      name: "huy",
      price: 2000,
    },
    {
      name: "name",
      price: 3000,
    },
  ];
  res.render("home", { username: username, products: products });
});

app.get("/products/:id/:name", (req, res) => {
  res.send(req.query);
});

app.listen(port, () => {
  console.log("Khởi tạo server thành công !");
});
