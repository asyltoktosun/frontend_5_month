import React from 'react'
import {useDispatch, useSelector} from 'react-redux'


function MainPages(){
    const title= useSelector(state=>state.title);
    const dispatch=useDispatch()

    const changeTitle=()=>{
        dispatch({
            type:'change_title'
        })
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    )
}

export default MainPages;