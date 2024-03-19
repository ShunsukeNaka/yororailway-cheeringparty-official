import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import topImage from "@/public/material/top-image.png"
import * as React from 'react';
import Top_Carousel from '../Top_Carousel'

export type Top_HeaderProps = {
    width: number
    height: number
}

export const Top_Header_U = ({width, height}: Top_HeaderProps) => {
	return (
		<div className='flex justify-center'>
            

            <Image src={topImage}
                   placeholder='blur'
                   alt='Top Image'
                   
                   />
        </div>
	  );
}

export default Top_Header_U