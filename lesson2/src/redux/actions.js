import {types} from "./types"


export function changeTitleAction(){
    return{
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(title){
    return{
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value){
    return{
        type: types.VALUE,
        payload: value
    }
}

export function addUserAction(name){
    return{
        type: types.ADD,
        payload:name
    }
}

export function deleteUserAction(){
    return{
        type: types.DELETE
    }
}


export function plusInputAction(value){
    return{
        type: types.PLUS,
        payload:value
    }
}
export function minusInputAction(value){
    return{
        type: types.MINUS,
        payload:value
    }
}
export function multiplyInputAction(value){
    return{
        type: types.MULTIPLY,
        payload:value
    }
}
export function divideInputAction(value){
    return{
        type: types.DIVIDE,
        payload:value
    }
}

