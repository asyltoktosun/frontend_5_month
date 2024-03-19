import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { changeTitleAction, withParamsAction } from '../../redux/actions'

function MainPages() {

  const title=useSelector(state=>state.titleReducer.title) 
  const dispatch=useDispatch()

  const changeTitle=()=>{
    dispatch(changeTitleAction())
  }
  const withParams=()=>{
    dispatch(withParamsAction('good bye'))
  }

    
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={changeTitle}> change title</button>
        <button onClick={withParams}> with params</button>
    </div>
  )
}

export default MainPages