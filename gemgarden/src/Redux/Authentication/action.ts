import axios from 'axios';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_SUCCESS } from "./actionTypes";
import { LoginType } from "../../Pages/Login";
import { AdminType } from "../../Pages/AdminLogin";

res.user["accesToken"])


interface SignupType1 {
  name: string;
  email: string;
  password: string;
}

export const signup = (formData: SignupType1) => (dispatch: any) => {
  dispatch({ type: AUTH_REQUEST });
  createUserWithEmailAndPassword(auth, formData.email, formData.password).then(async (res: any) => {
    const user = res.user;
    await updateProfile(user, {
      displayName: formData.name
    });
    const tokenId = await user.getIdToken();

    dispatch({ type: AUTH_SUCCESS, payload: tokenId });
  }).catch((err: any) => {
    dispatch({ type: AUTH_ERROR, payload: err.message });
  });
}

export const login = (logindata: LoginType) => (dispatch: any) => {
  dispatch({ type: AUTH_REQUEST });
  signInWithEmailAndPassword(auth, logindata.email, logindata.password).then(async (res: any) => {
    console.log(res);
    const token = (await res.user.getIdTokenResult()).token;
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  }).catch((err: any) => {
    console.log(err);
    dispatch({ type: AUTH_ERROR, payload: err.message });
  });
}
