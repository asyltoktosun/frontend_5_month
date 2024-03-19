import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CountPage() {
  const dispatch=useDispatch()
  const countTitle = useSelector(state=>state.countTitle)

  const plusButton=()=>{
    dispatch({
        type: 'PLUS',
    })
 }
 const minusButton=()=>{
  dispatch({
      type: 'MINUS',
  })
}
const resetButton=()=>{
  dispatch({
      type: 'RESET',
  })
}
const plus10Button=()=>{
  dispatch({
      type: 'PLUS_10',
  })
}
     
  return (
    <>
        <h1>--------------------</h1>
        <h2>{countTitle}</h2>
        <button onClick={()=>dispatch(plusButton())}>plus</button>
        <button onClick={()=>dispatch(minusButton())}>minus</button>
        <button onClick={()=>dispatch(resetButton())}>reset</button>
        <button onClick={()=>dispatch(plus10Button())}>plus 10</button>
    </>
  )
}

export default CountPage