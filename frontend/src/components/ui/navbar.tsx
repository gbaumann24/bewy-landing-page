import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NavItem {
	label: string;
	href: string;
	isActive?: boolean;
}

interface NavbarProps {
	logo?: React.ReactNode;
	items?: NavItem[];
	variant?: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({
	logo,
	items = [
		{ label: 'Home', href: '/' },
		{ label: 'Cockpit', href: '/about' },
		{ label: 'Eigentümerportal', href: '/services' },
		{ label: 'So funktioniert`s', href: '/contact' },
	],
	variant = 'light',
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();

	// Transform values for floating effect
	const width = useTransform(scrollY, [0, 100], ['100%', '85%']);
	const y = useTransform(scrollY, [0, 100], [0, 14]);
	const scale = useTransform(scrollY, [0, 100], [1, 0.98]);
	const opacity = useTransform(scrollY, [0, 100], [0, 1]);
	const borderRadius = useTransform(scrollY, [0, 100], [100, 100]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const textColor = variant === 'light' ? 'text-gray-800' : 'text-white';
	const bgColor = variant === 'light' ? (scrolled ? 'bg-white' : 'bg-transparent') : scrolled ? 'bg-gray-900' : 'bg-transparent';

	return (
		<motion.nav
			className={`fixed w-full z-50 transition-colors duration-300  backdrop-blur-md bg-white/90 `}
			style={{
				width: scrolled ? width : '100%',
				y: scrolled ? y : 0,
				left: '50%',
				x: '-50%',
				boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
				borderRadius,
			}}
			initial={false}
		>
			<motion.div className="container mx-auto px-1" style={{ scale: scrolled ? scale : 1 }}>
				<div className="flex justify-between items-center py-2">
					{/* Logo */}
					<div className="flex-shrink-0">
						{logo || (
							<a href="/">
								<img src="/assets/logo-full.webp" alt="Logo" className="h-8 w-auto" />
							</a>
						)}
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{items.map((item) => (
							<a key={item.label} href={item.href} className={`${textColor} hover:text-secondary text-[15px] transition-colors ${item.isActive ? 'font-medium' : ''}`}>
								{item.label}
							</a>
						))}
						<Button className="text-[15px] px-10 h-11 cursor-pointer bg-secondary text-white rounded-full hover:bg-secondary transition-colors">Kontakt</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				<motion.div
					className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4 ${variant === 'light' ? 'bg-white' : 'bg-gray-900'} rounded-lg`}
					style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
				>
					<div className="px-2 pt-2 pb-3 space-y-1">
						{items.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className={`block px-3 py-2 rounded ${textColor} hover:text-secondary hover:bg-gray-100`}
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</a>
						))}
						<div className="px-3 py-3">
							<button className="w-full px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary transition-colors">Get Started</button>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.nav>
	);
};

export default Navbar;
