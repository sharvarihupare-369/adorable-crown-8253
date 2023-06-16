import { HOME_HOVER } from "./actionTypes"

const initialState = {
    images : []
}

export const reducer = (state=initialState,{type,payload}:any) => {

    switch(type){
        case HOME_HOVER : {
           return {
            ...state,
            images : payload
           }
        }

        default : {
            return state
        }
    }

}