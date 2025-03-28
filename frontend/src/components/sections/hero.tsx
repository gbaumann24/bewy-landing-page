import React from 'react';
import { HandHeart } from 'lucide-react';
import { H1, P, ButtonText } from '@/lib/typography';
import { cn } from '@/lib/utils';
import GridBackground from '../ui/grid-bg';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
	return (
		<div className="relative container mx-auto h-dvh flex items-center justify-center gap-12">
			{/* Grid Background */}
			<GridBackground />

			{/* Left Column - Content */}
			<div className="relative z-10 flex-1">
				<div className="flex gap-2 px-4 py-1 items-center bg-neutral-100 border border-neutral-300 w-fit rounded-full text-sm mb-4">
					<HandHeart size={18} />
					<span>Privates Miet- & Stockwerkeigentum</span>
				</div>
				<H1 className="text-4xl md:text-5xl leading-14 mb-4">Immobilien Verwaltung mit Weitblick für nachhaltigen Werte</H1>
				<P className="text-muted-foreground mb-8">
					Mit Bewy haben Sie Ihre Liegenschaft jederzeit im Blick - fachlich fundierte Begleitung, digitale Transparenz und ein Service, der sich nach Ihren Bedürfnissen richtet.
				</P>
				<div className="flex w-full mt-4 rounded-xl shadow-md">
					<input
						type="email"
						placeholder="hans@beispiel.com"
						className="flex-grow px-6 py-3 text-muted-foreground bg-white placeholder-gray-300 border rounded-l-xl focus:outline-none focus:rounded-r-none focus:border-secondary"
					/>
					<button className="flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-r-xl">
						<ButtonText>Warteliste beitreten</ButtonText>
					</button>
				</div>
			</div>

			{/* Right Column - Image */}
			<div className="relative z-10 flex-1 h-full">
				<div className="relative h-full w-full flex items-center justify-center">
					{/* Base image */}
					<img src="/assets/hero-0.webp" alt="Hero Image" className="h-3/4" />

					{/* Overlay images with sequential entrance */}
					<motion.img
						src="/assets/hero-1.svg"
						alt="Overlay 1"
						className="absolute w-60 top-[10%] left-[20%]"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-8, 8, -8], opacity: 1 }}
						transition={{ 
							opacity: { duration: 0.5, delay: 0.3 },
							y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 }
						}}
					/>
					<motion.img
						src="/assets/hero-2.svg"
						alt="Overlay 2"
						className="absolute w-60 top-[10%] right-[0%]"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-10, 6, -10], opacity: 1 }}
						transition={{ 
							opacity: { duration: 0.5, delay: 0.6 },
							y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.6 }
						}}
					/>
					<motion.img
						src="/assets/hero-3.svg"
						alt="Overlay 3"
						className="absolute w-100 bottom-[25%] left-[40%]"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [5, -8, 5], opacity: 1 }}
						transition={{ 
							opacity: { duration: 0.5, delay: 0.9 },
							y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.9 }
						}}
					/>
					<motion.img
						src="/assets/hero-4.svg"
						alt="Overlay 4"
						className="absolute bottom-[45%] right-[25%]"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-7, 7, -7], opacity: 1 }}
						transition={{ 
							opacity: { duration: 0.5, delay: 1.2 },
							y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1.2 }
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
