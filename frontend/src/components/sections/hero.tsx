import React from 'react';
import { HandHeart } from 'lucide-react';
import { H1, P, ButtonText } from '@/lib/typography';
import GridBackground from '../ui/grid-bg';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
	return (
		<div className="relative container mx-auto overflow-clip h-lvh xs:min-h-fit flex xs:flex-col items-center justify-center gap-12 ">
			{/* Grid Background */}
			<GridBackground />

			{/* Left Column - Content */}
			<div className="relative z-10 flex-1 w-full xs:pt-34">
				<div className="flex gap-2 px-4 py-1 items-center bg-neutral-100 border border-neutral-300 w-fit rounded-full text-sm mb-4 ">
					<HandHeart size={18} />
					<span>Privates Miet- & Stockwerkeigentum</span>
				</div>
				<H1 className="mb-4">Immobilien Verwaltung mit Weitblick für nachhaltigen Werte</H1>
				<P className="text-muted-foreground mb-8">
					Mit Bewy haben Sie Ihre Liegenschaft jederzeit im Blick - fachlich fundierte Begleitung, digitale Transparenz und ein Service, der sich nach Ihren Bedürfnissen richtet.
				</P>
				<div className="flex w-full mt-4 rounded-xl shadow-md xs:hidden">
					<input
						type="email"
						placeholder="hans@beispiel.com"
						className="flex-grow px-6 py-3 text-muted-foreground bg-white placeholder-gray-300 border rounded-l-xl focus:outline-none focus:rounded-r-none focus:border-secondary"
					/>
					<button className="flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-r-xl">
						<ButtonText>Warteliste beitreten</ButtonText>
					</button>
				</div>
				<button className="hidden xs:flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-xl">
					<ButtonText>Warteliste beitreten</ButtonText>
				</button>
			</div>

			{/* Right Column - Image */}
			<div className="flex items-center justify-center z-10 flex-1 h-full sm:hidden">
				<div className="relative h-2/3 w-full flex items-center justify-center xl:scale-90">
					{/* Base image */}
					<img src="/assets/hero-0.webp" alt="Hero Image" className="h-full object-cover w-9/10 xl:w-full rounded-2xl" />

					{/* Overlay images with sequential entrance */}
					<div className="absolute -top-[3%] right-[0%] flex items-center justify-end gap-4 w-full h-fit">
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
						className="absolute w-110 bottom-[6%] right-[0%] "
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
			<div className="items-center justify-center relative z-10 pb-12 flex-1 h-full w-full hidden xs:flex">
				{/* Base image */}
				<div className='relative w-full flex items-center justify-center'>
					<img src="/assets/hero-0.webp" alt="Hero Image" className=" h-full  object-cover w-9/10 rounded-2xl" />

					<motion.img
						src="/assets/hero-1.webp"
						alt="Overlay 1"
						className="absolute -top-[3%] left-1/2 -translate-x-4/5 flex items-center justify-center gap-4   w-50 shadow-md rounded-2xl"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-4, 4, -4], opacity: 1 }}
						transition={{
							opacity: { duration: 0.5, delay: 0.3 },
							y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 },
						}}
						style={{ WebkitTransform: 'translate3d(0,0,0)' }}
					></motion.img>
					<motion.img
						src="/assets/hero-2-mobile.webp"
						alt="Overlay 1"
						className="absolute -bottom-[3%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-4  w-4/5 shadow-md rounded-2xl"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-4, 4, -4], opacity: 1 }}
						transition={{
							opacity: { duration: 0.5, delay: 0.3 },
							y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 },
						}}
						style={{ WebkitTransform: 'translate3d(0,0,0)' }}
					></motion.img>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
