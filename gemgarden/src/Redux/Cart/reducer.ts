import { Action } from "redux";


const initialState = {
    isLoading : false,
    cart : [],
    isError : false
}

export const reducer = (state = initialState, action:Action) => {
    switch (action.type) {
      default: {
        return { ...state };
      }
    }
  };