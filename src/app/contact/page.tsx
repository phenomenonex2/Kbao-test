/** libs */
import Image from 'next/image'

const ContactUs = (): React.JSX.Element => {
	return (
		<div className='min-h-[600px] max-w-5xl mx-auto py-20 px-4'>
			<h1 className='text-3xl font-bold text-center mb-8'>Contact Us</h1>

			<div className='grid md:grid-cols-2 gap-8 items-center'>
				<div className='hidden md:block relative h-full'>
					<Image
						src='https://images.unsplash.com/photo-1739542233673-572b6f1f9934?q=80&w=3010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Contact us illustration'
						width={800}
						height={600}
						className='object-cover w-full h-full rounded-lg'
					/>
				</div>

				<div className='bg-white rounded-lg shadow-md p-6'>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700'
							>
								Name
							</label>
							<input
								type='text'
								id='name'
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
								placeholder='Your name'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
								placeholder='your.email@example.com'
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700'
							>
								Message
							</label>
							<textarea
								id='message'
								rows={4}
								className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
								placeholder='Your message'
							/>
						</div>

						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactUs
