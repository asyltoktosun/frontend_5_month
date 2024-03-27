import { types } from "../types"

const initialState={
    preloader:false
}

export default function preloaderReducer(state=initialState, action){
    switch(action.type){
        case types.PRELOAD_ON:
            return {...state, preloader: true}
        case types.PRELOAD_OFF:
            return {...state, preloader: false}
        default: return state
    }
}