/** next header */
import type { Metadata } from 'next'

/** font */
import { Geist, Geist_Mono } from 'next/font/google'

/** styles */
import './globals.css'

/** components */
import GlobalNav from '@/components/navigation/nav'
import Footer from '@/components/footer'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Kbao test',
	description: 'Kbao test',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<GlobalNav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
