import { Action } from "redux";

const initialState = {
    isLoading : false,
    products : [],
    isError : false
}

export const reducer = (state = initialState, action:Action) => {
    switch (action.type) {
      default: {
        return { ...state };
      }
    }
  };