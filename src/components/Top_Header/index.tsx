import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import testLogo from '@/public/material/testlog.png'
import Image from 'next/image'
import type { NextPage } from 'next'
import * as React from 'react';

import './styles.css';
import { Box } from '@mui/material';


export const Top_Header = () => {
	return (
		<div className='Header text-white font-bold h-24 flex items-center'>
			<Box className="flex justify-start">
				<Box>
					<Image src={testLogo} width='90' alt=''/>
				</Box>
				<Box className="ml-5 text-3xl">
					養老鉄道応援団
				</Box>
			</Box>
        </div>
	  );
}

export default Top_Header