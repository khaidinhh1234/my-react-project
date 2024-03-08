import axios from "axios";


export const Dangkyuser = async (users) =>{
    try { 
        const {data} = await axios.post('http:localhost:3000/signup',users)
        return (data)
    
} catch (error) {
    console.log(error)
}
}
export const Dangnhapuser = async (users) =>{
    try { 
        const {data} = await instance.post('signin',users)
        return (data)
    
} catch (error) {
    console.log(error)
}
}