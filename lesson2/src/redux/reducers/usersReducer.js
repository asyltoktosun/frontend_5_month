import { types } from "../types"

const initialState={
    value: '',
    users:[]
}

export default function usersReducer(state=initialState, action){
    if(action.type===types.VALUE){
        return{...state, value: action.payload}
    }else if(action.type===types.ADD){
        return{...state, users: [...state.users, action.payload], value: ''}
    }else if(action.type===types.DELETE){
        return{...state, users: [], value: ''}
    }
    return state
}