import axios from 'axios';
import { NewDataType } from '../../Pages/Admin';

export const addProduct = (newData:NewDataType) => {
   axios.post(`http://localhost:8080/arrival`,newData).then((res)=>{
    return(res.data)
   }).catch((err)=>{
    console.log(err)
   })
};

export const getProducts = async() => {
   const response = await axios.get(`http://localhost:8080/arrival`).then((res)=>res.data)
   return response;
};

// export const updateProducts = (postdata:PostDataType,id?:number) => {
//    const response = axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,postdata).then((res)=>console.log(res.data))
//    return response
// };

// export const updateDisLike = (postdata:PostDataType,id?:number) => {
//     const response = axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,postdata).then((res)=>console.log(res.data))
//     return response
// };

// export const deleteProduct = async(id?:number) => {
//    const data = axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`)
//    return data;
// };
