 const app = document.querySelector("#app");
 const menu = document.querySelector("#menu");




 const url = "http://localhost:3000/sanphams";
 const show = () =>{

    fetch(url) 
    .then((res)=> res.json()) 
    .then((data) => {
        app.innerHTML = data.map((sp,i) =>(
    ` <tr>
    <td>${i+1}</td>
    <td><h5>${sp.name}</h5></td>
    <td><img src=${sp.image} alt=${sp.name} width="150"></td>
    <td>${sp.tl}</td>
    <td>${sp.dateph}</td>
    <td>
      <button class="btn btn-primary" data-id=${sp.id}>Xoá</button>
      <a href="./edit-sp.html?id=${sp.id}"><button class="btn btn-danger">Cập Nhật</button></a>
    </td>
  </tr>`
    )).join("");
}) 
   .then(()=>{
    const btnxoa = document.querySelectorAll(".btn-primary")
    for (let btn of btnxoa){
       btn.addEventListener("click",()=>{
        // console.log(btn.dataset.id)
        let id = btn.dataset.id;    
        if(confirm("Bạn có chắc chắn muốn xóa không !!")){
        fetch(`${url}/${id}`, {method:"DELETE"}) 
        .then((res)=> res.json()) 
        .then(()=>{
            alert("thanh cong")
        }) 
        .catch((err) => console.log(err))}
       })
    }
   })
    .catch((err) => console.log(err))
 };
//menu
 fetch("http://localhost:3000/menus")
 .then((res1) =>res1.json())
 .then((data1)=> 
 menu.innerHTML = data1.map((menu)=>
 `<li class="nav-item">
 <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href=${menu.path}>
   <svg class="bi"><use xlink:href="#house-fill"/></svg>
   <h6>${menu.label}</h6>
 </a>
</li>`
 ).join("")     
 )
 .catch(err =>console.log(err))

 show();