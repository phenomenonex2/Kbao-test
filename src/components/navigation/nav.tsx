'use client'

/** libs */
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** components */
import NavItem from '@/components/navigation/nav-items'

const GlobalNav = (): React.JSX.Element => {
	const pathname = usePathname()
	const pageName = pathname === '/' ? 'home' : pathname.slice(1)
	const [showMenu, setShowMenu] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		// Close mobile menu when pathname changes
		setIsMobileMenuOpen(false)
	}, [pathname])

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			setShowMenu(currentScrollY <= lastScrollY)
			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	return (
		<nav className='w-full sticky top-0 z-10'>
			<div className='px-8 py-4 bg-blue-500 text-white uppercase relative z-0 flex justify-between items-center'>
				<span>{pageName} Page</span>
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='lg:hidden'
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d={
								isMobileMenuOpen
									? 'M6 18L18 6M6 6l12 12'
									: 'M4 6h16M4 12h16M4 18h16'
							}
						/>
					</svg>
				</button>
			</div>
			{/* Desktop Menu */}
			<div
				className={`hidden lg:flex px-8 py-4 space-x-4 bg-blue-600 text-white transition-all duration-300 relative z-10 ${
					showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
				}`}
			>
				<NavItem href='/' name='home' />
				<NavItem href='/product' name='product' />
				<NavItem href='/about' name='about us' />
				<NavItem href='/contact' name='contact us' />
			</div>
			{/* Mobile Menu */}
			<div
				className={`lg:hidden px-8 py-4 bg-blue-600 text-white transition-all duration-300 ${
					isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				style={{
					position: 'absolute',
					width: '100%',
					top: '100%',
					left: 0,
				}}
			>
				<div className='flex flex-col space-y-4'>
					<NavItem href='/' name='home' />
					<NavItem href='/product' name='product' />
					<NavItem href='/about' name='about us' />
					<NavItem href='/contact' name='contact us' />
				</div>
			</div>
		</nav>
	)
}

export default GlobalNav
