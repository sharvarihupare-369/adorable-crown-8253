import { Action } from "redux";
import { ADMIN_GET_REQUEST, ADMIN_GET_SUCCESS } from "./actionTypes";

interface AdminGetSuccessAction extends Action<typeof ADMIN_GET_SUCCESS> {
  payload: any; // Replace 'any' with the appropriate type for your payload
}

interface State {
  isLoading: boolean;
  isError: boolean;
  data: any[]; // Replace 'any' with the appropriate type for your 'data' property
}

const initialState: State = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADMIN_GET_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ADMIN_GET_SUCCESS: {
      const { payload } = action as AdminGetSuccessAction;
      return { ...state, isLoading: false, isError: false, data: payload };
    }
    default: {
      return state;
    }
  }
};
