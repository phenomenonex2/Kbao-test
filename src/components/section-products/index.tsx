const SectionProducts = (): React.JSX.Element => {
	return (
		<section className='mx-auto max-w-[1140px] px-4 py-12'>
			<h2 className='text-center text-xl md:text-4xl font-bold text-blue-600 mb-8'>
				PRODUCT
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{[...Array(6)].map((_, i) => (
					<div key={i} className='flex bg-white shadow-lg overflow-hidden'>
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
	)
}

export default SectionProducts
