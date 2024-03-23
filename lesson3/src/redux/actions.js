import { types } from "./types"

export function asyncFunctionAction(){
    return function(){
        setTimeout(()=>{
            alert('Hell0')
        },2000)
    }
}

export function fetchUserAction(){
    return async function(dispatch){
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users')
            const data =await response.json()
            dispatch({type: types.USERS, payload: data})
        } catch(error){
            console.log('erroror');
        }  
    }
}

export function getUserInfoAction(id){
    return async function(dispatch){
        try{
            const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data =await response.json()
            dispatch({type: types.USER_1, payload: data})
        }catch(error){
            console.log('eroreooro')
        }
        
    }
}