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
      day = " Thứ Ba";
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

app.listen(port, () => {
  console.log("Khởi tạo server thành công !");
});
