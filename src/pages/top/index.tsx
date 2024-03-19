import 'tailwindcss/tailwind.css'
import type { NextPage } from 'next'
import Top_Header from '@/src/components/Top_Header'
import Top_Header_U from '@/src/components/Top_Header_U'
import Top_Content from '@/src/components/Top_Content'
import Top_Carousel from '@/src/components/Top_Carousel'
import Top_Movie from '@/src/components/Top_Movie'


const top: NextPage = () => {

	return (
		<div className=''>
		  <Top_Header />
          <Top_Movie />
          
          
          <Top_Content />

		</div>
	)
}

export default top