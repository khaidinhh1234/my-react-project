
// console.log(document.location.search)
 const searchParams = new URLSearchParams(document.location.search);
//  console.log(searchParams.get("id"))
const id = searchParams.get("id");
// console.log(id)
//Tìm đến id của các input
const  prdName  = document.querySelector("#prd-name")
const  prdImage  = document.querySelector("#prd-image")
const  prdGia  = document.querySelector("#prd-gia")
const  editForm = document.querySelector("#form-edit")

fetch("http://localhost:3000/products/" + id )//gọi trực tiếp đến sản phẩm đó
  .then((response) => response.json())//chuyển đổi sang json 
  .then((data) =>{
    // console.log(data);

      prdName.value = data.name //đổi dữ liệu ra input
      prdImage.value = data.image
      prdGia.value = data.gia
  })
  //Bắt sự kiện submit
  editForm.addEventListener("submit",(e)=>{
    e.preventDefault(); //chặn load
    let editproduct = {
        //lấy giá trị mới cập nhật 
      "name":prdName.value,
      "image":prdImage.value,
      "gia":prdGia.value
    };
    // console.log(editproduct);
    fetch("http://localhost:3000/products/" +id ,{
        method:"PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(editproduct)
    }).then(()=>(window.location="./index.html"))
    .then(()=>window.alert("thanhcong"))
  });
