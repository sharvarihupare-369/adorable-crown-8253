import { Action } from "redux";

const initialState = {
  isLoading: false,
  isAuth: false,
  token: "",
  isError: false,
};

export const reducer = (state = initialState, action:Action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
