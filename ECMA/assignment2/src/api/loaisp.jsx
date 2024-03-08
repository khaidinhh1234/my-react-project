import instance from "./config";

export const getLoaiSanPhams = async()=>{
    try {
        const { data } = await instance.get("/loaisps");
        return data
    } catch (error) {
        console.log( error)
    }
}
export const getLoaiSanPhamById = async(id)=>{
    try {
        const { data } = await instance.get(`/loaisps/${id}`);
        return data
    } catch (error) {
        console.log(error)
    }
}
export const deleteLoaiSanPhamById = async(id)=>{
    try {
        const { date }  = await instance.delete(`/loaisps/${id}`);
        return date
    } catch (error) {
        console.log(error)
    }
}
export const addLoaiSanPham = async(newlsanpham)=>{
    try {
        const{data} = await instance.post("/loaisps",newlsanpham);
        return data
    } catch (error) {
        console.log( error)
       
    }
}
export const updateLoaiSanPham = async(uplsanpham)=>{
    try {
        const{data} = await instance.put(`/loaisps/${uplsanpham.id}`,uplsanpham);
        return data
    } catch (error) {
        console.log( error)

    }
}
