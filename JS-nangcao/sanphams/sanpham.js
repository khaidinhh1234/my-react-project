const sp = document.querySelector("#sp");

const show = () => {
    fetch("http://localhost:3000/sanphams")
    .then((data) => data.json())
    .then((data1) => {
        // console.log(data1)
       sp.innerHTML = data1.map((sp,i)=>(
        `
        <tr>  
        <td>${i+1}</td>
         <td><h5>${sp.name}</h5></td>
        <td><img src=${sp.image} alt=${sp.name} width="150"></td>
        <td>${sp.tl}</td>
        <td>${sp.dateph}</td>
        <td>
        <button class="btn-xoa" data-id=${sp.id}>Xoá</button>
        <a href="edit-sanpham.html?id=${sp.id}"><button>Cập Nhật</button></a>
        </td>
        </tr>
        `
        
        ));
    })
    .then(()=>{
        const btnxoa = document.querySelectorAll(".btn-xoa");

        for(let btn of btnxoa){
            btn.addEventListener("click",()=>{
                let id = btn.dataset.id
                fetch(url + id ,{method:"DELETE"})
            });
        };
    })

};
show();