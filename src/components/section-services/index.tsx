const SectionServices = (): React.JSX.Element => {
	return (
		<section className='w-full bg-blue-100 py-12'>
			<div className='mx-auto max-w-[1140px] px-4'>
				<h2 className='text-center text-xl md:text-4xl font-bold text-blue-600 mb-8'>
					SERVICE
				</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
					{[...Array(4)].map((_, i) => (
						<div key={i} className='bg-white shadow-lg overflow-hidden'>
							<div className='w-full aspect-square bg-gray-400 flex items-center justify-center'>
								<span className='text-gray-600 text-4xl'>▣</span>
							</div>
							<div className='p-4 min-h-40'>
								<h3 className='text-xl font-semibold mb-2'>Name</h3>
								<p className='text-blue-500'>Detail</p>
							</div>
							<button className='w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition-colors'>
								MORE
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default SectionServices
