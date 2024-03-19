import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CountPage() {
  const dispatch=useDispatch()
  const countTitle = useSelector(state=>state.countTitle)

  const plusButton=()=>{
    dispatch({
        type: 'PLUS',
        payload: countTitle+1
    })
 }
 const minusButton=()=>{
  dispatch({
      type: 'MINUS',
      payload: countTitle-1
  })
}
const resetButton=()=>{
  dispatch({
      type: 'RESET'
  })
}
const plus10Button=()=>{
  dispatch({
      type: 'PLUS_10',
      payload: countTitle+10
  })
}
const minus10Button=()=>{
  dispatch({
      type: 'MINUS_10',
      payload: countTitle-10
  })
}
     
  return (
    <>
        <h1>--------------------</h1>
        <h2>{countTitle}</h2>
        <button onClick={plusButton}>plus</button>
        <button onClick={minusButton}>minus</button>
        <button onClick={resetButton}>reset</button>
        <button onClick={plus10Button}>plus 10</button>
        <button onClick={minus10Button}>minus 10</button>
    </>
  )
}

export default CountPage