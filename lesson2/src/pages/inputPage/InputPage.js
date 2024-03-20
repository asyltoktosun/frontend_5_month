  import React, { useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { changeInputAction, divideInputAction, minusInputAction, multiplyInputAction, plusInputAction } from '../../redux/actions'

  function InputPage() {
    const dispatch=useDispatch()
    const {numbers}=useSelector(state=>state.inputReducer)

    const [inputNumberOne, setInputNumberOne]=useState('')
    const [inputNumberTwo, setInputNumberTwo]=useState('')
    // const [result, setResult]=useState(0)

    const changeInput1=(event)=>{
      setInputNumberOne(event.target.value)
    }
    const changeInput2=(event)=>{
      setInputNumberTwo(event.target.value)
    }

    const num1=parseInt(inputNumberOne)
    const num2=parseInt(inputNumberTwo) 

    const plusInput=()=>{
      if(inputNumberOne.trim()==='' || inputNumberTwo.trim()===''){
        alert('One of the inputs are empty')
        return
      }
      const plus=num1+num2
      dispatch(plusInputAction(plus))  
    }

    const minusInput=()=>{
      if(inputNumberOne.trim()==='' || inputNumberTwo.trim()===''){
        alert('One of the inputs are empty')
        return
      }
      const minus=num1-num2
      dispatch(minusInputAction(minus))
    }
    const multiplyInput=()=>{
      if(!inputNumberOne || !inputNumberTwo){
        alert('One of the inputs are empty')
        return
      }
      const multiply=num1*num2
      dispatch(multiplyInputAction(multiply))
    }
    const divideInput=()=>{
      if(!inputNumberOne || !inputNumberTwo){
        alert('One of the inputs are empty')
        return
      }else if(num1===0 || num2===0){
          alert('error try again not 0')
          return 
      }
      const divide=(num1/num2).toFixed(1)
      dispatch(divideInputAction(divide))
    }

    return (
      <>
          <input onChange={changeInput1} type='number' placeholder='number'/>
          <input onChange={changeInput2} type='number' placeholder='number'/>
          <button onClick={plusInput}>plus</button>
          <button onClick={minusInput}>minus</button>
          <button onClick={multiplyInput}>multiply</button>
          <button onClick={divideInput}>divide</button>

          <h1>{numbers}</h1>
      </>
    )
  }

  export default InputPage