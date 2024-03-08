const spname = document.querySelector("#spname");
const spimage = document.querySelector("#spimage");
const sptl = document.querySelector("#sptl");
const spdateph = document.querySelector("#spdateph");
const formedit = document.querySelector("#form-edit");
const url = "http://localhost:3000/sanphams"   

const param = new URLSearchParams(document.location.search);
const id = param.get("id");

fetch(`${url}/${id}`)
.then(res=>res.json())
.then((data)=>{
    spname.value = data.name;
    spimage.value =data.image ;
    sptl.value = data.tl;
    spdateph.value = data.dateph;
})  
formedit.addEventListener("submit",(e)=>{
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

    fetch(`${url}/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newsp)
    }) 
    .then((res)=>res.json()) 
    .then(()=>window.location="./index.html")
    .then(()=> {
        alert("Cập Nhật sản phẩm thành công");
    }) 
    .catch((err)=> console.log(err)
    )})