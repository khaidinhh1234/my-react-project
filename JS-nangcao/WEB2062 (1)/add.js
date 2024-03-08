const spname = document.querySelector("#name");
const spprice = document.querySelector("#price");
const formadd = document.querySelector("#form-add");
const url = "http://localhost:3000/products";

formadd.addEventListener("submit", (e) => {
  e.preventDefault();
  if (spname.value == "" || spname.value.length <= 3) {
    alert("Vui lòng nhập tên sản phẩm phải lớn hơn 3 ký tự");
    spname.focus();
    return false;
  } else if (spprice.value == "") {
    alert("Vui lòng nhập giá sản phẩm");
    spprice.focus();
    return false;
  }

  let newpro = {
    name: spname.value,
    price: spprice.value,
  };

  fetch(url, {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(newpro),
  })
    .then((response) => response.json())
    .then(() => (window.location.href = "products.html"))
    .then(() => alert("Thêm sản phẩm thành công"))
    .catch((error) => console.log(error));
});
