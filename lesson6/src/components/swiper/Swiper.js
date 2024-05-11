import {EffectCoverflow} from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const SwiperComponent=({swiperImage, handleChange})=>{
    return (    
        <div style={{width: '500px', height: '250px'}}>
            <Swiper
              direction={'vertical'}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow, ]}
              className="mySwiper"
              onTransitionEnd={handleChange}

            >
                {swiperImage.map(item=>
                    <SwiperSlide key={item}>    
                        <img src={item.url} alt=''/>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    )
}