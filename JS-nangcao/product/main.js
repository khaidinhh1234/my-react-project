  const app = document.querySelector("#app");//Tìm đến id 

  const show =  () => {
   fetch("http://localhost:3000/products")
   .then((response) => response.json())
   .then((data) => {
app.innerHTML = data.map((ap,i)=>{
     return `<tr>
         <td>${i+1}</td>
        <td>${ap.name}</td>
        <td><img src=${ap.image} alt=""></td>
        <td>${ap.gia}</td>
        <td>
        <button class="btn-delete" data-id='${ap.id}'>Xóa</button>
        <a href="edit-product.html?id=${ap.id}"><button>Cập Nhật</button></a>
       </td>
      </tr>`;
    }).join("");
   })
   .then(()=> {
      
     
    const btnDeletes = document.querySelectorAll(".btn-delete");
    // console.log(btnDelete)
  
    for (let btn of btnDeletes){
        // console.log(btn.dataset) 
        
        
       btn.addEventListener("click",() => { 
        let id = btn.dataset.id;    
        fetch("http://localhost:3000/products/"+ id ,{method:"DELETE",}
    );
         
       });
      
    }
   });
  };
  show();