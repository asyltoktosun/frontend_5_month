import React from 'react'
import { UseSelector, useSelector } from 'react-redux'

function AboutPage() {
   const aboutTitle=useSelector(state=>state.aboutTitle)  

  return (
    <div>
        <h1>{aboutTitle}</h1>
    </div>
  )
}

export default AboutPage