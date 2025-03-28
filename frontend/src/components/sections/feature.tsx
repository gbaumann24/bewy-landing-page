import { H1, P } from '@/lib/typography';
import React, { useEffect, useState, useRef } from 'react';
import DotBackground from '../ui/dot-bg';
import { Building2, KeyRound } from 'lucide-react';
import { MietAccordion } from '../ui/miet-accordion';
import { StweAccordion } from '../ui/stwe-accordion';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureSection: React.FC = () => {
	const [accordionItem, setAccordionItem] = useState('item-1');
	const [type, setType] = useState('Miet');
	const [progress, setProgress] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const nextItemRef = useRef<string | null>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Define the item sequences
	const mietItems = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];
	const stweItems = ['item-1', 'item-2', 'item-4'];

	useEffect(() => {
		setAccordionItem('item-1');
		setProgress(0);
	}, [type]);

	useEffect(() => {
		// Only run autoplay if not paused and not transitioning
		if (!isPaused && !isTransitioning) {
			const itemList = type === 'Miet' ? mietItems : stweItems;

			// Clear any existing interval
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}

			const interval = 50;
			const totalTime = 5000;
			const increment = (interval / totalTime) * 100;

			intervalRef.current = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						// When reaching 100%, start transition
						const currentIndex = itemList.indexOf(accordionItem);
						const nextIndex = (currentIndex + 1) % itemList.length;
						nextItemRef.current = itemList[nextIndex];
						
						// First close current item
						setIsTransitioning(true);
						setAccordionItem('');
						
						// Schedule opening of next item after a short delay
						setTimeout(() => {
							if (nextItemRef.current) {
								setAccordionItem(nextItemRef.current);
								nextItemRef.current = null;
							}
							setIsTransitioning(false);
						}, 300); // Matching your animation duration
						
						return 0;
					}
					return prev + increment;
				});
			}, interval);
		} else if (intervalRef.current && (isPaused || isTransitioning)) {
			clearInterval(intervalRef.current);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [accordionItem, type, isPaused, isTransitioning]);

	// Function to determine which image to display
	const getImageSrc = () => {
		if (type === 'Stwe') {
			if (accordionItem === 'item-1') return '/assets/stwe-1.webp';
			if (accordionItem === 'item-2') return '/assets/stwe-2.webp';
			if (accordionItem === 'item-4') return '/assets/stwe-4.webp';
		} else {
			if (accordionItem === 'item-1') return '/assets/miet-1.webp';
			if (accordionItem === 'item-2') return '/assets/miet-2.webp';
			if (accordionItem === 'item-3') return '/assets/miet-3.webp';
			if (accordionItem === 'item-4') return '/assets/miet-4.webp';
			if (accordionItem === 'item-5') return '/assets/miet-5.webp';
		}
		return '';
	};

	const handleManualItemChange = (item: string) => {
		// For manual changes, also implement the close-then-open pattern
		if (item !== accordionItem) {
			nextItemRef.current = item;
			setIsTransitioning(true);
			setAccordionItem('');
			
			setTimeout(() => {
				if (nextItemRef.current) {
					setAccordionItem(nextItemRef.current);
					nextItemRef.current = null;
				}
				setIsTransitioning(false);
			}, 300);
		}
		setProgress(0);
	};

	return (
		<div className="container mx-auto min-h-vh flex items-center justify-center gap-24">
			{/* Left Column - Content */}
			<div className="flex flex-col flex-1 h-full justify-center">
				<div className="items-center mb-10 flex flex-row h-fit gap-4">
					<button
						className={`${
							type === 'Miet' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-6 py-3 rounded-lg flex flex-row gap-2 items-center cursor-pointer`}
						onClick={() => setType('Miet')}
					>
						<Building2 size={'18px'} /> Mieteigentum
					</button>

					<button
						className={`${
							type === 'Stwe' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-6 py-3 rounded-lg flex flex-row gap-2 items-center cursor-pointer`}
						onClick={() => setType('Stwe')}
					>
						<KeyRound size={'18px'} />
						Stockwerkeigentum
					</button>
				</div>
				<H1 className="mb-6">{type === 'Miet' ? 'Die Zukunft des Mieteigentums' : 'Die Zukunft des Stockwerkeigentums'}</H1>

				<div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
					{type === 'Miet' ? (
						<MietAccordion accordionItem={accordionItem} setAccordionItem={handleManualItemChange} progress={progress} />
					) : (
						<StweAccordion accordionItem={accordionItem} setAccordionItem={handleManualItemChange} progress={progress} />
					)}
				</div>
			</div>

			{/* Right Column - Image */}
			<div className="relative flex-1 h-full overflow-hidden flex items-center justify-center">
				<DotBackground />
				<AnimatePresence mode="wait">
					<motion.img
						key={`${type}-${accordionItem}`}
						src={getImageSrc()}
						alt={`${type} Image for ${accordionItem}`}
						className="h-full object-contain"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{
							duration: 0.3,
							ease: 'easeInOut',
						}}
					/>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default FeatureSection;
