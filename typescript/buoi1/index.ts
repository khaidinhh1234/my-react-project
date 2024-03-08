const a: number = 10;
const b: number = 20;

const sum = (a:number, b:number):number => {
    if (typeof a !== "number" || typeof b !== "number") return 0;
    return a + b;
};
console.log(sum(a, b));

const ten:string = "Nguyen Dinh Khai";
const age:number|string = "19 tuổi";
const trangthai:boolean= true ;
const thongtin:{id:number,name:string,tuoi:number}={
 id:1,
 name:"khai",
 tuoi:19,
}

const show = (data:{id:number ,name:string ,tuoi:number}):string=>{
  return `${data.name} ${data.tuoi}tuoi`
}
console.log(show(thongtin))
type typescript = {id:number ,name:string ,namsinh:number,gioitinh:string}
const arrQuanly:typescript[]= [
  {id:1 , name:"khai" , namsinh:2004 , gioitinh:"nam"},
  {id:2 , name:"dat" , namsinh:2003 , gioitinh:"nam"}
 , {id:3 , name:"Hoa" , namsinh:2005 , gioitinh:"nữ"}


]
const sp =document.querySelector("#root")
const hienthi = (dataload:typescript[])=>{
  if(!Array.isArray(dataload) )return `Data is not array`
return dataload.map((item ,i )=>`
<table><tr>
<th>${item.id}</th>
<th>${item.name}</th></tr></table>`).join("")
}
document.querySelector("#root").innerHTML = hienthi(arrQuanly)