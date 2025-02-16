import Link from 'next/link'

const NavItem = (props: { href: string; name: string }) => {
	return (
		<Link
			href={props.href}
			className='text-white uppercase pr-4 border-r last:border-r-0'
		>
			{props.name}
		</Link>
	)
}

export default NavItem
