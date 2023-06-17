import  axios  from 'axios';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import {  AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_SUCCESS } from "./actionTypes";
import { LoginType } from "../../Pages/Login";
import { AdminType } from "../../Pages/AdminLogin";
//   import { Signuptype } from "../../Pages/signupTypes";

interface SignupType1 {
    name:string;
    email : string;
    password:string
  }


 
  export const signup = (formData:SignupType1) => (dispatch:any) => {
  
    //   setSubmissiondisbled(true)
      dispatch({ type: AUTH_REQUEST });
      createUserWithEmailAndPassword(auth, formData.email, formData.password).then(async res => {
          const user = res.user;
          await updateProfile(user, {
              displayName : formData.name
          })
          const tokenId = await user.getIdToken()
        // console.log(await user.getIdToken())
        // console.log(res.user.getIdToken().then((res)=>res.json()))
        // console.log(res.accessToken)
        // console.log(res.user.uid)
        // setSubmissiondisbled(false)

          dispatch({ type:AUTH_SUCCESS, payload:tokenId })
        // console.log(res.user["accesToken"])

      }).catch(err => {
        // setSubmissiondisbled(false)
         dispatch({type:AUTH_ERROR, payload:err.message})
          // console.log(err.message);
      })
  }

  
  
  
  export const login = (logindata:LoginType) => (dispatch:any) => {
       dispatch({type:AUTH_REQUEST})
       signInWithEmailAndPassword(auth,logindata.email,logindata.password).then(async(res)=>{
        console.log(res)
        const token = (await res.user.getIdTokenResult()).token;
        // console.log((await res.user.getIdTokenResult()).token)
        dispatch({type:LOGIN_SUCCESS, payload:token})
            
       }).catch((err)=>{
        console.log(err)
        dispatch({type:AUTH_ERROR, payload:err.message})
       })
  }

  

 