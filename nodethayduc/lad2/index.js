const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());
app.set("views" + "./views"); //cấu hình nơi lưu file views
app.set("view engine", "ejs"); //cấu hình engins
app.use(express.static("public"));

app.get("/", (req, res) => {
  const today = new Date();

  currentDay = today.getDay();
  let day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ Nhật";
      break;

    case 1:
      day = "Thứ Hai";
      break;
    case 2:
      day = "Thứ Ba";

      break;
    case 3:
      day = "Thứ Tư";
      break;

    case 4:
      day = "Thứ Năm";
      break;
    case 5:
      day = "Thứ Sáu";
      break;
    case 6:
      day = "Thứ Bảy";
      break;
    default:
      console.log(` Lỗi: ${currentDay}`);
  }
  res.render("home", { thu: day });
});

app.get("/shop", (req, res) => {
  var listProduct = [
    {
      id: "0101",
      title: "Apple Book",
      price: 3000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "https://picsum.photos/id/12/300/200",
    },
    {
      id: "0102",
      title: "Microsoft Book",
      price: 2000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "https://picsum.photos/id/11/300/200",
    },
    {
      id: "0103",
      title: "VFast Book",
      price: 1000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "https://picsum.photos/id/10/300/200",
    },
    {
      id: "0104",
      title: "VFast Book",
      price: 1000,
      description:
        "A very interesting book about so many even more interesting things!",
      imageURL: "https://picsum.photos/id/15/300/200",
    },
  ];
  res.render("shop", { products: listProduct });
});
app.listen(port, () => {
  console.log("Khởi tạo server thành công !");
});
