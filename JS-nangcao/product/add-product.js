const  prdName  = document.querySelector("#prd-name")
const  prdImage  = document.querySelector("#prd-image")
const  prdGia  = document.querySelector("#prd-gia")
const  addForm = document.querySelector("#form-add")

addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newProduct = {
        "name":prdName.value,
        "image":prdImage.value,
        "gia":prdGia.value,
    };
    fetch("http://localhost:3000/products",{
        method:"POST",
    headers:{
        "Content-Type" : "application/json",
    },
     body:JSON.stringify(newProduct),
    
}) .then(()=> (window.location = "./index.html"));
});