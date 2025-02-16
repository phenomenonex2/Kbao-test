import TheatreImage from '@/components/theatre'

const Home = () => {
	return (
		<>
			<section className='w-full'>
				<TheatreImage />
			</section>
			{/* Product Section */}
			<section className='mx-auto max-w-[960px] px-4 py-12'>
				<h2 className='text-center text-4xl font-bold text-blue-600 mb-8'>
					PRODUCT
				</h2>
				<div className='grid grid-cols-2 gap-6'>
					{[...Array(6)].map((_, i) => (
						<div
							key={i}
							className='flex bg-white rounded-lg shadow-lg overflow-hidden'
						>
							<div className='w-48 h-48 bg-gray-400 flex items-center justify-center'>
								<span className='text-gray-600 text-4xl'>▣</span>
							</div>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>Name</h3>
								<p className='text-blue-500'>Detail</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Home
