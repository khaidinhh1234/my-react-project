const spname = document.querySelector("#spname")
const spimage = document.querySelector("#spimage")
const sptl = document.querySelector("#sptl")
const spdateph = document.querySelector("#spdateph")

const formadd = document.querySelector("#form-add")

formadd.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newsp = {
        "name":spname.value,
        "image":spimage.value,
        "tl":sptl.value,
        "dateph":spdateph.value
    };
    fetch("http://localhost:3000/sanphams",{
        method:"POST",
        headers:{
            "Content-Type":"addlication/json"
        },
        body:JSON.stringify(newsp)
    }).then(()=>
     window.location="./sanpham.html"
    )
    .then(()=>window.alert("thanhcong"))
});