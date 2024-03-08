import instance from "./config";

//Định nghĩa Sanpham

export const getSanphams = async()=>
{
    try {
        const{ data} = await instance.get(`/sanphams`)//http://localhost:3000/sanphams
        return data
    } catch (error) {
        console.log("lỗi");
    }
}
export const getSanphamById = async(id)=>
{
    try {
        const{data} = await instance.get(`/sanphams/${id}`)//http://localhost:3000/sanphams
        return data
    } catch (error) {
        console.log("lỗi");
    }
}
export const removeSanphamById = async(id)=>
{
    try {
        const{data} = await instance.delete(`/sanphams/${id}`)//http://localhost:3000/sanphams
        return data
    } catch (error) {
        console.log("lỗi");
    }
}
export const addSanpham = async(newsanphams)=>
{
    try {
        const{data} = await instance.post(`/Sanphams`,newsanphams)
        return data
    } catch (error) {
        console.log("lỗi");
    }
}
export const updateSanpham = async(updatesanphams)=>
{
    try {
        const{data} = await instance.put(`/Sanphams/${updatesanphams.id}`,updatesanphams)
        return data
    } catch (error) {
        console.log(error);
    }
}