import {types} from '../types'

const initialState={
    title: ''
}

export default function titleReducer(state=initialState, action){
    if(action.type===types.CHANGE_TITLE){
        return {...state, title: 'Hello'}
    }else if(action.type===types.WITH_PARAMS){
        return {...state, title: action.payload}
    }
    return state
}