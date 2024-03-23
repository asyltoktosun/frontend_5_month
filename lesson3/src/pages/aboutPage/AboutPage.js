import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncFunctionAction } from '../../redux/actions'

function AboutPage() {

  const dispatch=useDispatch()

  return (
    <>
      <button onClick={()=>dispatch(asyncFunctionAction)}>after 5 sec</button>
    </>
  )
}

export default AboutPage