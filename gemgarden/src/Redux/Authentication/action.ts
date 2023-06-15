import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes";
//   import { Signuptype } from "../../Pages/signupTypes";

interface SignupType1 {
    name:string;
    email : string;
    password:string
  }

//    interface SubmissionType {
//     setSubmissiondisbled : React.Dispatch<React.SetStateAction<boolean>>
//   }
 
  export const signup = (formData:SignupType1) => (dispatch:any) => {
  
    //   setSubmissiondisbled(true)
      dispatch({ type: AUTH_REQUEST });
      createUserWithEmailAndPassword(auth, formData.email, formData.password).then(async res => {
          const user = res.user;
          await updateProfile(user, {
              displayName : formData.name
          })
        //   console.log(user)
        //   console.log(res.accessToken)
        //   console.log(res.user.uid)
        // setSubmissiondisbled(false)
          dispatch({type:AUTH_SUCCESS, payload:res.user.uid})
        //   console.log(res.user["accesToken"])
      }).catch(err => {
        // setSubmissiondisbled(false)
         dispatch({type:AUTH_ERROR, payload:err.message})
        //   console.log(err.message);
      })
  }
  
  