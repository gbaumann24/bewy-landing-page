import { H1, P } from '@/lib/typography';
import React, { useEffect } from 'react';
import DotBackground from '../ui/dot-bg';
import { Building2, KeyRound } from 'lucide-react';
import { MietAccordion } from '../ui/miet-accordion';
import { StweAccordion } from '../ui/stwe-accordion';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureSection: React.FC = () => {
	const [accordionItem, setAccordionItem] = React.useState('item-1');
	const [type, setType] = React.useState('Miet');

	useEffect(() => {
		setAccordionItem('item-1');
	}, [type]);

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

	return (
		<div className=" container mx-auto h-dvh flex items-center justify-center gap-24">
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
				{type === 'Miet' ? (
					<MietAccordion accordionItem={accordionItem} setAccordionItem={setAccordionItem} />
				) : (
					<StweAccordion accordionItem={accordionItem} setAccordionItem={setAccordionItem} />
				)}
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
