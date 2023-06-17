import axios from "axios"
import { IsError, IsLoading, PRODUCT_REQUEST_ARRIVAL, PRODUCT_REQUEST_BRACELETS, PRODUCT_REQUEST_EARRINGS, PRODUCT_REQUEST_RINGS, SINGLE_PRODUCT_REQUEST } from "./actionTypes"
type params={
    params: {
        material: [],
        // type: [],
        _sort: string,
        _order: string,
      },
}

export const getProducts = (obj:params) => (dispatch:any) => {
dispatch({type:IsLoading})
axios.get("http://localhost:8080/collection",obj).then((data)=>{
    dispatch({type:PRODUCT_REQUEST_ARRIVAL,payload:data.data})
    // console.log(data.data)
}).catch((error) => {
    dispatch({type:IsError})
})
}
export const getProductsArrival = () => (dispatch:any) => {
dispatch({type:IsLoading})
axios.get("http://localhost:8080/arrival").then((data)=>{
    dispatch({type:PRODUCT_REQUEST_ARRIVAL,payload:data.data})
    // console.log(data.data)
}).catch((error) => {
    dispatch({type:IsError})
})
}
export const getProductsRings = () => (dispatch:any) => {
dispatch({type:IsLoading})
axios.get("http://localhost:8080/rings").then((data)=>{
    dispatch({type:PRODUCT_REQUEST_RINGS,payload:data.data})
    // console.log(data.data)
}).catch((error) => {
    dispatch({type:IsError})
})
}
export const getProductsEarRings = () => (dispatch:any) => {
dispatch({type:IsLoading})
axios.get("http://localhost:8080/earrings").then((data)=>{
    dispatch({type:PRODUCT_REQUEST_EARRINGS,payload:data.data})
    // console.log(data.data)
}).catch((error) => {
    dispatch({type:IsError})
})
}
export const getProductsBracelets = () => (dispatch:any) => {
dispatch({type:IsLoading})
axios.get("http://localhost:8080/bracelets").then((data)=>{
    dispatch({type:PRODUCT_REQUEST_BRACELETS,payload:data.data})
    // console.log(data.data)
}).catch((error) => {
    dispatch({type:IsError})
})
}
export const getSingleProducts = (id:number) => (dispatch:any) => {
dispatch({type:IsLoading})
axios.get(`http://localhost:8080/collection/${id}`).then((data)=>{
    dispatch({type:SINGLE_PRODUCT_REQUEST,payload:data.data})
    // console.log(data.data)
}).catch((error) => {
    dispatch({type:IsError})
})
}



//material--Diamond,Pearl.Gold,Gemstone,Solitaire