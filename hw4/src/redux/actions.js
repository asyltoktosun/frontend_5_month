import { types } from "./types"

function preloaderOn() {
    return{
        type: types.PRELOAD_ON
    }
}
function preloaderOff() {
    return{
        type: types.PRELOAD_OFF
    }
}


export function addUserAction(user){
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options={
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(user)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

        if(response.status>=200 || response.status<=204){
            dispatch(preloaderOff())
            alert('Вы успешно зарегистрировались')
        }
    }
}

export function addTodoAction(todo){
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options={
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(todo)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', options)

        if(response.status>=200 || response.status<=204){
            dispatch(preloaderOff())
            alert('Well Done')
        }
    }
}