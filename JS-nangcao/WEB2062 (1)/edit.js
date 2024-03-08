const spname = document.querySelector("#name");
const spprice = document.querySelector("#price");
const formedit = document.querySelector("#form-edit");
const url = "http://localhost:3000/products";

const param = new URLSearchParams(document.location.search);
const id = param.get("id");
fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((data) => {
    spname.value = data.name;
    spprice.value = data.price;
  });
formedit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (spname.value == "" || spname.value.length <= 3) {
    alert("Vui lòng nhập tên sản phẩm phải hơn 3 ký tự");
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

  fetch(`${url}/${id}`, {
    method: "PUT",
    "Content-Type": "application/json",
    body: JSON.stringify(newpro),
  })
    .then((response) => response.json())
    .then(() => (window.location.href = "products.html"))
    .then(() => alert(" Cập nhật sản phẩm thành công"))
    .catch((error) => console.log(error));
});
