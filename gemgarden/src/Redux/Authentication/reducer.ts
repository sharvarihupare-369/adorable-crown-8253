import { stat } from "fs"
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

export interface SignupInit  {
  isLoading : boolean;
  isAuth:boolean;
  token : string;
  uid:string;
  isError : boolean;
  errorMessage:string;
}

const initialState = {
    isLoading : false,
    isAuth:false,
    token : "",
    uid:"",
    isError : false,
    errorMessage : ""
}

interface TypeSignUp {
  type : string,
  payload : string
}

export const reducer = (state=initialState,{type,payload}:TypeSignUp) => {
    switch(type){
      case AUTH_REQUEST : {
        return {
          ...state,
          isLoading :true
        }
      }
      case AUTH_SUCCESS : {
           return {
            ...state,
            isLoading : false,
            uid : payload,
            isError : false
           }
      }
      case AUTH_ERROR : {
        return {
          ...state,
          isLoading : false,
          isError : true,
          errorMessage : payload
        }
      }
      default : {
        return state
      }
    }
}

