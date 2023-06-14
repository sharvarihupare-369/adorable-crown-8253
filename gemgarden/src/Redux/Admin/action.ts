import { Dispatch } from "redux";
import { ADMIN_GET_REQUEST, ADMIN_GET_SUCCESS } from "./actionTypes";
import axios, { AxiosRequestConfig } from "axios";

export const getAdminProducts = (data: any) => (dispatch: Dispatch) => {
  dispatch({ type: ADMIN_GET_REQUEST });
  const config: AxiosRequestConfig = { params: data }; // Set the data as params in the config object

  axios.get("http://localhost:8080/rings", config)
    .then((res) => {
      dispatch({ type: ADMIN_GET_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      // Handle error if needed
    });
};
