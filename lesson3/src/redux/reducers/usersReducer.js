import { types } from "../types"

const initialState={
    users: [],
    user_one: {}
}

export default function usersReducer(state=initialState, action){
    switch(action.type){
        case types.USERS:
            return {...state, users: action.payload}
        default: 
            return state
        case types.USER_1:
            return {...state, user_one: action.payload}
    }

}