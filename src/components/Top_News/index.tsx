import styles from '../../styles/global.module.css'
import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Image from 'next/image'
import topImage from "@/public/material/top-image.png"
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, InputLabel, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'

type NEWS = {
    id: string
    title: string | null
    topText: string | null
}
const makeID = function (): string{
    const id: string = Math.random().toString(36).substring(2).slice(-9)
    console.log(id)
    return id
  }

export const Top_News = () => {
    const [newsList, setNewsList] = React.useState<NEWS[]>([])

    React.useEffect(() => {
        setNewsList([...newsList,   {id: makeID(), title: "第三回　三駅合同掃除を実施しました", topText: "topText" },
                                    {id: makeID(), title: "Test", topText: "topText" },
                                    {id: makeID(), title: "Test", topText: "topText" },
                                    {id: makeID(), title: "Test", topText: "topText" },
                    ])
    },[])
	return (
        <div className='justify-center'>
            <Box 
                className='flex justify-center  w-96 m-auto'
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}>
                養老鉄道応援団の活動
            </Box>
            <List component="nav" className='w-4/5 m-auto grid grid-cols-1 gap-2'>
                {newsList.map((news) => (
                   
                   
                   <Button className="flex justify-start hover:bg-sky-400 hover:text-white"
                           variant='outlined' 
                           color='primary'>
                    <Box className='mr-5'>
                        2005/01/01
                    </Box>
                    <Box component="div" sx={{ textOverflow: 'ellipsis' }}>
                        三駅合同掃除を実施しました。
                    </Box>
                    <Box className="ml-auto">
                        <ArrowForwardIosIcon />
                    </Box>
                    
                   </Button>


                  /*
                    <ListItemButton
                        key={newsList.length}
                        className='bg-white mb-1'
                        >
                        <ul>
                            <li>
                                <ListItemText primary={news.title}
                                              primaryTypographyProps={
                                                {
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    variant: 'body1',
                                                    fontSize: '16px'
                                                }
                                              }/>
                            </li>
                            <li>
                                <ListItemText primary={news.topText}
                                              primaryTypographyProps={
                                                {
                                                    color: 'orange',
                                                    fontWeight: 'medium',
                                                    variant: 'body1',
                                                    fontSize: '16px'
                                                }
                                              }
                                              className=''/>
                            </li>
                        </ul>
                        
                        
                    </ListItemButton>*/
                ))}
            </List>
        </div>
	  );
}

export default Top_News