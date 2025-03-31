import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ButtonText } from '@/lib/typography';
import { Menu, X } from 'lucide-react';

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
	const width = useTransform(scrollY, [0, 100], ['100%', '90%']);
	const y = useTransform(scrollY, [0, 100], [0, 10]);
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

	// Handle mobile menu item click
	const handleItemClick = (href: string) => {
		setView(href);
		setIsOpen(false);
	};

	return (
		<>
			<motion.nav
				className={`fixed container z-50 transition-colors duration-300 backdrop-blur-md bg-white/80`}
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
				<motion.div className="container mx-auto px-4 " style={{ scale: scrolled ? scale : 1 }}>
					<div className="flex w-full rounded-none justify-between items-center py-3">
						{/* Logo */}
						<div className="flex-shrink-0">
							{logo || (
								<a href="/">
									{scrolled && window.innerWidth <= 768 ? (
										<img src="/assets/logo.webp" alt="Logo" className="h-8 w-auto" />
									) : (
										<img src="/assets/logo-full.webp" alt="Logo" className="h-8 w-auto" />
									)}
								</a>
							)}
						</div>

						{/* Mobile menu button - visible on md screens and below */}
						<div className="hidden xs:flex items-center ">
							<button onClick={() => setIsOpen(!isOpen)} className=" hover:text-secondary focus:outline-none" aria-label="Toggle menu">
								{isOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>

						{/* Desktop Menu - hidden on screens below md */}
						<div className="xs:hidden flex items-center space-x-8">
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
								className={`text-[15px] px-10 h-11 cursor-pointer bg-secondary text-white hover:bg-secondary/90 transition-colors ${
									scrolled ? 'rounded-full' : 'rounded-xl'
								}`}
							>
								<ButtonText>Kontakt</ButtonText>
							</button>
						</div>
					</div>
				</motion.div>
			</motion.nav>
			{/* Mobile Menu Overlay - only shown when isOpen is true and on screens below md */}

			<AnimatePresence>
				{isOpen && (
					<div className="hidden xs:block fixed top-0 left-0 w-screen h-screen bg-white z-100">
						<motion.div
							className=" inset-0 bg-white backdrop-blur-sm hidden xs:block"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
						>
							{/* Close button */}
							<div className="absolute top-4 right-4">
								<button onClick={() => setIsOpen(false)} className="hover:text-secondary focus:outline-none">
									<X size={24} />
								</button>
							</div>
							<div className=" flex flex-col items-center pt-20 space-y-6 p-6 bg-white">
								{items.map((item) => (
									<div
										key={item.label}
										className={`${textColor} cursor-pointer hover:text-secondary text-lg transition-colors ${
											item.isActive ? 'font-medium text-secondary' : ''
										}`}
										onClick={() => handleItemClick(item.href)}
									>
										{item.label}
									</div>
								))}
								<button
									className={`mt-4 w-full xs:w-3/4 py-3 text-center text-[15px] cursor-pointer bg-secondary text-white hover:bg-secondary/90 transition-colors rounded-xl`}
									onClick={() => setIsOpen(false)}
								>
									<ButtonText>Kontakt</ButtonText>
								</button>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
