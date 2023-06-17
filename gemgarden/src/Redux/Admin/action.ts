import axios from "axios"
import { AUTH_ERROR, AUTH_REQUEST } from "../Authentication/actionTypes"
import { ADMIN_LOGIN_SUCCESS } from "./actionTypes"

// export const getAddProducts = () => () => {

// }

export const getAdminlogin = () => (dispatch:any) => {
    dispatch({type:AUTH_REQUEST})
    axios.get(`http://localhost:8080/adminlogindata`).then((res)=>{
      // console.log(res.data)
      dispatch({type:ADMIN_LOGIN_SUCCESS, payload : res.data})
    }).catch((err)=>{
      console.log(err)
      dispatch({type:AUTH_ERROR, payload:err.message})
     })
  }