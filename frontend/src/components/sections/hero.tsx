import React from 'react';
import { HandHeart } from 'lucide-react';
import { H1, P } from '@/lib/typography';
import GridBackground from '../ui/grid-bg';
import { motion } from 'framer-motion';
// import { FlipWords } from '../ui/flip-words';
import { BroschureApply } from '../ui/borschure-apply';

const HeroSection: React.FC = () => {
	return (
		<div className="relative container mx-auto h-lvh xs:min-h-fit flex xs:flex-col items-center justify-center gap-6">
			{/* Grid Background */}
			<GridBackground />

			{/* Left Column - Content */}
			<div className="relative z-10 flex-1 w-full xs:pt-34">
				<div className="flex gap-2 px-4 xs:px-3 py-1 items-center bg-accent border border-neutral-300 w-fit rounded-full text-sm xs:text-xs mb-4 ">
					<HandHeart className=" w-4 h-4" />
					<span>Mietliegenschaften & Stockwerkeigentum</span>
				</div>
				<H1 className="mb-4 leading-14 text-6xl lg:text-5xl xs:leading-11">
					Die <span className="text-secondary">neue Generation</span> der Immobilien Bewirtschaftung
					{/* Zeitgemässe Immobilien Bewirtschaftung mit Weitblick - <FlipWords words={['modern', 'strategisch', 'kundennah']} /> */}
				</H1>
				<P className="text-muted-foreground mb-8 ">
					Mit Bewy als Ihrem Partner in der Immobilienbewirtschaftung haben Sie Ihre Liegenschaft stets im Blick – profitieren Sie von fachlich fundierter Betreuung, digitaler
					Transparenz und einem Service, der sich ganz nach Ihren individuellen Bedürfnissen richtet.
				</P>
				<BroschureApply />
			</div>

			{/* Right Column - Image */}
			<div className="flex items-center justify-center z-10 flex-1 h-full sm:hidden">
				<div className="relative h-2/3 max-h-[700px]  w-full flex items-center justify-center xl:scale-90">
					{/* Base image */}
					<img src="/assets/hero-0.webp" alt="Hero Image" className="h-full object-cover w-9/10 xl:w-full rounded-2xl" />

					{/* Overlay images with sequential entrance */}
					<div className="absolute -top-[5%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 w-full h-fit">
						<motion.img
							src="/assets/hero-1.webp"
							alt="Overlay 1"
							className="w-57 shadow-md rounded-2xl"
							initial={{ opacity: 0 }}
							animate={{ y: [-1, 1, -1], opacity: 1 }}
							transition={{
								opacity: { duration: 0.5, delay: 0.3 },
								y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 },
							}}
							style={{ WebkitTransform: 'translate3d(0,0,0)' }}
						></motion.img>
						<motion.img
							src="/assets/hero-2.webp"
							alt="Overlay 2"
							className="w-57 shadow-md rounded-2xl"
							initial={{ opacity: 0 }}
							animate={{ y: [-1, 1, -1], opacity: 1 }}
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
						className="absolute w-100 bottom-[6%] right-[0%] "
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-2, 2, -2], opacity: 1 }}
						transition={{
							opacity: { duration: 0.5, delay: 0.9 },
							y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.9 },
						}}
					/>
					<motion.img
						src="/assets/hero-4.webp"
						alt="Overlay 4"
						className="absolute bottom-[45%] left-[0%] w-120"
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: [-2, 2, -2], opacity: 1 }}
						transition={{
							opacity: { duration: 0.5, delay: 1.2 },
							y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1.2 },
						}}
					/>
				</div>
			</div>
			<div className="items-center justify-center relative z-10 pb-12 pt-12 flex-1 h-full w-full hidden xs:flex">
				{/* Base image */}
				<div className="relative w-full flex items-center justify-center">
					<img src="/assets/hero-0.webp" alt="Hero Image" className=" h-full  object-cover w-9/10 rounded-2xl" />

					{/* Use a wrapper div for triggering inView */}
					<motion.div
						initial="hidden"
						animate="visible"
						viewport={{ once: true, amount: 0.8 }}
					>
						<motion.img
							src="/assets/hero-1.webp"
							alt="Overlay 1"
							className="absolute -top-[3%] left-1/2 -translate-x-4/5 flex items-center justify-center gap-4 w-50 shadow-md rounded-2xl"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: [-2, 2, -2], opacity: 1 }}
							transition={{
								opacity: { duration: 0.5, delay: 0.3 },
								y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 },
							}}
							style={{ WebkitTransform: 'translate3d(0,0,0)' }}
							viewport={{ once: true, amount: 0.8 }}
						/>
						<motion.img
							src="/assets/hero-2-mobile.webp"
							alt="Overlay 1"
							className="absolute -bottom-[3%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 w-4/5 shadow-md rounded-2xl"
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: [-2, 2, -2], opacity: 1 }}
							transition={{
								opacity: { duration: 0.5, delay: 0.3 },
								y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.3 },
							}}
							style={{ WebkitTransform: 'translate3d(0,0,0)' }}
							viewport={{ once: true, amount: 0.8 }}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
