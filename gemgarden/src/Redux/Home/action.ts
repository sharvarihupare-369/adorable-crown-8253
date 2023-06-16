import axios from "axios"
import { HOME_HOVER } from "./actionTypes"

export const getImages = () => (dispatch:any) => {
    axios.get(`http://localhost:8080/homeimage`).then((res)=>{
        // console.log(res)
        dispatch({type:HOME_HOVER, payload : res.data})
    })
}