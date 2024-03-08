const spname = document.querySelector("#spname");
const spimage = document.querySelector("#spimage");
const sptl = document.querySelector("#sptl");
const spdateph = document.querySelector("#spdateph");
const formadd = document.querySelector("#form-add");
const url = "http://localhost:3000/sanphams"    
formadd.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    if(spname.value ==""){
        alert("Bạn chưa Nhập Tên ");
        spname.focus();
        return false;
    }
    else if(spimage.value ==""){
        alert("Bạn chưa Nhập Image ");
        spimage.focus();
        return false;
    }
    let newsp ={
       "name":spname.value,
       "image":spimage.value,
       "tl":sptl.value,
       "dateph":spdateph.value,
    }

    fetch(`${url}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newsp)
    }) 
    .then((res)=>res.json()) 
    .then(()=>window.location="./index.html")
    .then(()=> {
        alert("thêm sản phẩm thành công");
    }) 
    .catch((err)=> console.log(err)
    )})