import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import topImage from "@/public/material/top-image.png"
import * as React from 'react';
import { Box, InputLabel, Typography } from '@mui/material'
import Top_News from '../Top_News'

export type Top_HeaderProps = {
    width: number
    height: number
}

export const Top_Header_U = () => {
	return (
		<div className='mt-10 flex justify-center grid grid-cols-1 gap-2'>
           <Top_News />

            <Box 
                className='bg-blue-600 
                           sm:bg-blue-600 
                           h-72
                           w-11/12
                           m-auto'
                height={200}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}>
                養老鉄道応援団ってどんな活動をしているの？
            </Box>
            
        </div>
	  );
}

export default Top_Header_U