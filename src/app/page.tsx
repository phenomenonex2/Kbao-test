/** components */
import TheatreImage from '@/components/theatre'
import SectionProducts from '@/components/section-products'
import SectionServices from '@/components/section-services'

const Home = () => {
	return (
		<>
			<section className='w-full'>
				<TheatreImage />
			</section>
			{/* Product Section */}
			<SectionProducts />
			{/* Service Section */}
			<SectionServices />
		</>
	)
}

export default Home
