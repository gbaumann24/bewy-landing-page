import React from 'react';
import { HandHeart } from 'lucide-react';
import { H1, P, ButtonText } from '@/lib/typography';
import GridBackground from '../ui/grid-bg';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
	return (
		<div className="relative container mx-auto overflow-clip h-dvh flex items-center justify-center gap-12">
			{/* Grid Background */}
			<GridBackground />

			{/* Left Column - Content */}
			<div className="relative z-10 flex-1">
				<div className="flex gap-2 px-4 py-1 items-center bg-neutral-100 border border-neutral-300 w-fit rounded-full text-sm mb-4 ">
					<HandHeart size={18} />
					<span>Privates Miet- & Stockwerkeigentum</span>
				</div>
				<H1 className=" mb-4">Immobilien Verwaltung mit Weitblick für nachhaltigen Werte</H1>
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
				<div className="relative h-full w-full flex items-center justify-center  xl:scale-90">
					{/* Base image */}
					<img src="/assets/hero-0.webp" alt="Hero Image" className="h-3/4 object-cover w-4/5 xl:w-full rounded-2xl" />

					{/* Overlay images with sequential entrance */}
					<div className="absolute top-[10%] right-[0%] flex items-center justify-end gap-4 w-full h-fit">
						<motion.img
							src="/assets/hero-1.webp"
							alt="Overlay 1"
							className="w-60 shadow-md rounded-2xl"
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: [-8, 8, -8], opacity: 1 }}
							transition={{
								opacity: { duration: 0.5, delay: 0.3 },
								y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 },
							}}
							style={{ WebkitTransform: 'translate3d(0,0,0)' }}
						></motion.img>
						<motion.img
							src="/assets/hero-2.webp"
							alt="Overlay 2"
							className="w-60 shadow-md rounded-2xl"
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: [-10, 6, -10], opacity: 1 }}
							transition={{
								opacity: { duration: 0.5, delay: 0.6 },
								y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.6 },
							}}
							style={{ WebkitTransform: 'translate3d(0,0,0)' }}
						/>
					</div>
					<motion.img
						src="/assets/hero-3.webp"
						alt="Overlay 3"
						className="absolute w-110 bottom-[20%] right-[0%] "
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [5, -8, 5], opacity: 1 }}
						transition={{
							opacity: { duration: 0.5, delay: 0.9 },
							y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.9 },
						}}
					/>
					<motion.img
						src="/assets/hero-4.webp"
						alt="Overlay 4"
						className="absolute bottom-[45%] left-[0%] w-130"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-7, 7, -7], opacity: 1 }}
						transition={{
							opacity: { duration: 0.5, delay: 1.2 },
							y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1.2 },
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
