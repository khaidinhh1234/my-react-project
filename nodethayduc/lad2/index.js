const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views" + "./views"); //cấu hình nơi lưu file views
app.set("view engine", "ejs"); //cấu hình engins
app.use(express.static("public"));

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

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
let listProduct = [];

app.get("/addproduct", (req, res) => {
  res.render("add-product");
});

app.post("/store", upload.array("img"), (req, res, next) => {
  const { title, price, description } = req.body;
  // Lấy tên file ảnh đã tải lên
  const img = req.files.map((file) => file.filename);
  // Tạo ID mới cho sản phẩm
  const id = listProduct.length + 1;
  // Thêm sản phẩm mới vào danh sách
  listProduct.push({
    id,
    title,
    price: parseInt(price), // Chuyển giá thành số nguyên
    description,
    img,
  });
  res.redirect("/shop");
});
app.get("/chitietsanpham/:id", (req, res) => {
  const id = req.params.id;
  res.render(`chitietsanpham/${id}`, (product = listProduct.id));
});
app.get("/shop", (req, res) => {
  res.render("shop", { products: listProduct });
});

app.listen(port, () => {
  console.log("Khởi tạo server thành công !");
});
