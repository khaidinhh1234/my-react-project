const spname = document.querySelector("#spname");
const spimage = document.querySelector("#spimage");
const sptl = document.querySelector("#sptl");
const spdateph = document.querySelector("#spdateph");

const formedit = document.querySelector("#form-edit");

const param = new URLSearchParams(document.location.search);
const id = param.get("id");
fetch("http://localhost:3000/sanphams/" + id)
  .then((data) => data.json())
  .then((data1) => {
    spname.value = data1.name;
    spimage.value = data1.image;
    sptl.value = data1.tl;
    spdateph.value = data1.dateph;
  });
formedit.addEventListener("submit", (e) => {
  e.preventDefault();
  let editsp = {
   "name": spname.value,
    "image": spimage.value,
    "tl": sptl.value,
   "dateph": spdateph.value,
  };
  fetch("http://localhost:3000/sanphams/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editsp),
  }).then(() => (window.location = "./sanpham.html"))
  .then(()=>window.alert("thanhcong"))
});
