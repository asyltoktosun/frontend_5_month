import { Container } from '@mui/material'
import React, { useState } from 'react'
import TabsComponent from '../../components/tabs/Tabs'
import Souz from '../../components/souz/Souz'
import History from '../../components/history/History'
import historyImg from '../../pages/images/history.jpeg'
import { SwiperComponent } from '../../components/swiper/Swiper'


const GetCategories=({action})=>{
    switch(action){
        case 'souz':{
            return <Souz/>
        }
        case 'history':{
            return <History/>
        }
        default: return <></>
    }
}

function Main() {

    const catergoriesSelect=[
        {value: 'souz', label: 'О союзе'}, 
        {value: 'history', label: 'История организации'}, 
        {value: 'organ', label: 'Органы управления'}, 
        {value: 'projects', label: 'Проекты'}, 
        {value: 'ourTeam', label: 'Наша команда'}, 
    ]
    const [value, setValue]=useState(catergoriesSelect?.[0].value)

    const swiperImage =[
        {url: {historyImg}},
        {url: {historyImg}},
        {url: {historyImg}}
    ]

  return (
    <Container> 
        <TabsComponent catergoriesSelect={catergoriesSelect} value={value} setValue={setValue}/>
        <GetCategories action={value}/>
        <SwiperComponent swiperImage={swiperImage}/>
    </Container>
  )
}

export default Main
