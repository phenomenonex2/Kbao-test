const About = () => {
	return (
		<div className='min-h-[600px] max-w-6xl mx-auto px-4 py-20'>
			<div className='text-center mb-16'>
				<h1 className='text-4xl font-bold mb-4'>About Us</h1>
				<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
					We're passionate about creating innovative solutions that make a
					difference.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-12 mb-16'>
				<div>
					<h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
					<p className='text-gray-700'>
						Our mission is to deliver exceptional value through technology while
						maintaining the highest standards of quality and customer
						satisfaction.
					</p>
				</div>
				<div>
					<h2 className='text-2xl font-semibold mb-4'>Our Vision</h2>
					<p className='text-gray-700'>
						We envision a future where technology enhances every aspect of daily
						life, making it more efficient, sustainable, and enjoyable for
						everyone.
					</p>
				</div>
			</div>

			<div>
				<h2 className='text-2xl font-semibold mb-8 text-center'>Our Team</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{[1, 2, 3].map((member) => (
						<div key={member} className='text-center'>
							<div className='w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4'></div>
							<h3 className='font-semibold'>Team Member {member}</h3>
							<p className='text-gray-600'>Position</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default About
