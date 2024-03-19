import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import topImage from "@/public/material/b.jpg"
import * as React from 'react';
import Top_Carousel from '../Top_Carousel'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'


type CONTENT = {
    id: string
    imagePath: string
    title: string | null
    topText: string | null
}
const makeID = function (): string{
    const id: string = Math.random().toString(36).substring(2).slice(-9)
    console.log(id)
    return id
  }

export const Top_Movie = () => {
    const [contents, setContents] = React.useState<CONTENT[]>([])
	
    React.useEffect(() => {
        setContents([...contents,   {id: makeID(), imagePath: "", title: "Test", topText: "topText" },
                                    {id: makeID(), imagePath: "", title: "Test", topText: "topText" },
                                    {id: makeID(), imagePath: "", title: "Test", topText: "topText" },
                                    {id: makeID(), imagePath: "", title: "Test", topText: "topText" },
                    ])
    },[])

    return (
        <>
        <Box className='h-2/5'>
   
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper bg-white"
        >
             {contents.map((content) => (
                <SwiperSlide className=''
                key={content.id}>
            
                    <Image src={topImage} height={500} alt='' className=''></Image>
                </SwiperSlide>
            
      
             ))}
          
          
        </Swiper>       
        </Box>
      </>
	  );
}

export default Top_Movie
