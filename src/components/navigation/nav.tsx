'use client'

import NavItem from './nav-items'
import { usePathname } from 'next/navigation'

const GlobalNav = () => {
	const pathname = usePathname()
	const pageName = pathname === '/' ? 'home' : pathname.slice(1)
	return (
		<nav className='w-full'>
			<div className='px-8 py-4 bg-fuchsia-600 text-white uppercase'>
				{pageName}
			</div>
			<div className='px-8 py-4 flex space-x-4 bg-cyan-600 text-white'>
				<NavItem href='/' name='home' />
				<NavItem href='/product' name='product' />
				<NavItem href='/about' name='about' />
				<NavItem href='/contact' name='contact' />
			</div>
		</nav>
	)
}

export default GlobalNav
