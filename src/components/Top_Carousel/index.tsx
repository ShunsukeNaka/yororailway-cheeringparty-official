import 'tailwindcss/tailwind.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import Image from 'next/image'
import topImage from "@/public/material/a.jpg"
import top_Image from "@/public/material/top-image.png"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Button } from '@mui/material';
import Link from 'next/link';


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

export const Top_Carousel = () => {

    const [contents, setContents] = React.useState<CONTENT[]>([])
    React.useEffect(() => {
        setContents([...contents,   {id: makeID(), imagePath: "@/public/material/a.jpg", title: "Test", topText: "topText" },
                                    {id: makeID(), imagePath: "@/public/material/b.jpg", title: "Test", topText: "topText" },
                                    {id: makeID(), imagePath: "@/public/material/c.jpg", title: "Test", topText: "topText" },
                                    {id: makeID(), imagePath: "@/public/material/top-image.png", title: "Test", topText: "topText" },
                    ])
    },[])

    return (
        <div className='w-full sm:w-4/6 m-auto'>
          <Box className='w-full'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {contents.map((content) => (
                    <SwiperSlide
                        key={content.id} 
                        className=''
                        >
                        {/*<Button>
                            <Image src={topImage}
                            placeholder='blur'
                            alt='Top Image'
                            className='w-full h-full'
                            />
                </Button>*/}
                        <Link href='https://www.yororailway.co.jp/'>
                            <Image src={topImage} 
                                   alt={"Top Image"}
                                   placeholder='blur'
                                   className='rounded-lg                                   ' 
                                   />
                        </Link>
                    </SwiperSlide>
                ))}
                
            </Swiper>
          </Box>
        </div>
      );
}

export default Top_Carousel