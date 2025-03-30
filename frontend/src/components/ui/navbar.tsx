import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ButtonText } from '@/lib/typography';

interface NavItem {
	label: string;
	href: string;
	isActive?: boolean;
}

interface NavbarProps {
	logo?: React.ReactNode;
	setView: React.Dispatch<React.SetStateAction<string>>;
	itemsinits?: NavItem[];
	variant?: 'light' | 'dark';
	activeView: string;
}

const Navbar: React.FC<NavbarProps> = ({
	logo,
	itemsinits = [
		{ label: 'Home', href: 'home', isActive: true },
		{ label: 'Eigentümerportal', href: 'portal', isActive: false },
		{ label: 'So funktioniert`s', href: 'onboarding', isActive: false },
		{ label: 'Preise', href: 'pricing', isActive: false },
	],
	variant = 'light',
	setView,
	activeView,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();
	const [items, setItems] = useState(itemsinits);

	// Transform values for floating effect
	const width = useTransform(scrollY, [0, 100], ['100%', '85%']);
	const y = useTransform(scrollY, [0, 100], [0, 14]);
	const scale = useTransform(scrollY, [0, 100], [1, 0.98]);
	const borderRadius = useTransform(scrollY, [0, 100], [100, 100]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Fix for isActive logic
	useEffect(() => {
		if (activeView) {
			// Create a new array with updated isActive states
			const updatedItems = items.map((item) => ({
				...item,
				isActive: item.href === activeView,
			}));
			setItems(updatedItems);
		}
	}, [activeView]);

	const textColor = variant === 'light' ? 'text-gray-800' : 'text-white';

	return (
		<motion.nav
			className={`fixed w-full z-50 transition-colors duration-300 backdrop-blur-md bg-white/80 `}
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
				<div className="flex justify-between items-center py-3">
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
							<div
								key={item.label}
								className={`${textColor} cursor-pointer hover:text-secondary text-[15px] transition-colors ${item.isActive ? 'font-medium text-secondary' : ''}`}
								onClick={() => setView(item.href)}
							>
								{item.label}
							</div>
						))}
						<button
							className={`text-[15px] px-10 h-11 cursor-pointer bg-secondary text-white hover:bg-secondary transition-colors ${scrolled ? 'rounded-full' : ' rounded-xl'}`}
						>
							<ButtonText>Kontakt</ButtonText>{' '}
						</button>
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
								href={`#${item.href}`}
								className={`block px-3 py-2 rounded ${textColor} hover:text-secondary hover:bg-gray-100 ${item.isActive ? 'font-medium text-secondary' : ''}`}
								onClick={(e) => {
									e.preventDefault();
									setView(item.href);
									setIsOpen(false);
								}}
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
