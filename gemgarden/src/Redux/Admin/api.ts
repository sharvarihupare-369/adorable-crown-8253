import axios from 'axios';
import { NewDataType } from '../../Pages/Admin';

export const addProduct = (newData:NewDataType) => {
   axios.post(`http://localhost:8080/arrival`,newData).then((res)=>{
    return(res.data)
   }).catch((err)=>{
    console.log(err)
   })
};

export const getProducts = async (data: object) => {
   const response = await axios
     .get(`http://localhost:8080/arrival`, data)
     .then((res) =>
     res.data)
     .catch((err) => {
       console.log(err);
       return null;
     });
 
   return response;
 };
 

export const updateProducts = (newData:NewDataType,id?:number) => {
   const response = axios.patch(`http://localhost:8080/arrival/${id}`,newData).then((res)=>console.log(res.data))
   return response
};

// export const updateDisLike = (postdata:PostDataType,id?:number) => {
//     const response = axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,postdata).then((res)=>console.log(res.data))
//     return response
// };
export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(`http://localhost:8080/arrival/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete product: ${error}`);
  }
};
