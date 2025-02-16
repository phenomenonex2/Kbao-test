import Image from 'next/image'
const TheatreImage = () => {
	return (
		<div className='w-full h-[320px] md:h-[600px] relative'>
			<Image
				src='https://images.unsplash.com/photo-1739382445469-9b86a88a2fb2?q=80&w=3433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='Unsplash Image'
				fill
				className='object-cover object-center'
				priority
			/>
		</div>
	)
}

export default TheatreImage
