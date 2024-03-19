const initialState={
    title:'old title',
    aboutTitle: 'old about title',
    contactTitle: ' ',
    countTitle: 0
}
export default function reducer(state=initialState, action){
    if(action.type==='change_title'){
        return {...state, title: 'new title'}
    } 
    else if(action.type==="CHANGE_ABOUT_TITLE"){
        return {...state, aboutTitle:'new about title'}
    }
    else if(action.type==="WITH_PARAMS"){
        return{...state, contactTitle: action.payload}
    }
    else if(action.type==="FROM_INPUT"){
        return{...state, contactTitle: action.payload}
    }
    else if(action.type==="PLUS"){
        return{...state, countTitle: action.payload}
    }
    else if(action.type==="MINUS"){
        if(state.countTitle===0){
            return {...state, countTitle:0}
        }
        else if(initialState.countTitle>0){
            return{...state, countTitle: action.payload}  
        }
    }
    else if(action.type==="RESET"){
        return{...state, countTitle: 0}
    }
    else if(action.type==="PLUS_10"){
        return{...state, countTitle: action.payload}
    }
    else if(action.type==="MINUS_10"){
        if(state.countTitle===0){
            return {...state, countTitle:0}
        }
        else if(state.countTitle>=10){
            return{...state, countTitle: action.payload}  
        }
    }
    return state
}   