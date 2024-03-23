import { types } from "../types";

const initialState={
    value: '',
    numbers: 0
}

export default function usersReducer(state=initialState, action){
    if(action.type===types.PLUS){
        return{...state, numbers: action.payload}
    }else if(action.type===types.MINUS){
        return{...state, numbers: action.payload}
    }else if(action.type===types.MULTIPLY){
        return{...state, numbers: action.payload}
    }else if(action.type===types.DIVIDE){
        return{...state, numbers: action.payload}
    }

    return state
}