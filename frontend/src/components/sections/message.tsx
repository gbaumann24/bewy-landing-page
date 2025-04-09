import { TextGenerateEffect } from '../ui/text-generate-effect';
import React from 'react';

const wordsDesktop = 'Bewy verbindet bewährte Verwaltungsstandards mit zeitgemässer digitaler Umsetzung.';
const wordsMobile = 'Bewy verbindet bewährte Verwaltungs-standards mit zeitgemässer digitaler Umsetzung.';
const MessageSection: React.FC = () => {
	return (
		<div className="container mx-auto h-lvh max-h-[1000px] xs:h-[1200px] flex items-center justify-center gap-12 py-18">
			<div className="relative w-full h-full rounded-xl overflow-clip">
				<img src="/assets/sofa.webp" className="absolute inset-0 h-full w-full object-cover" />
				<div className="absolute inset-0 opacity-50 bg-black " />
				<div className="block xs:hidden">
					<TextGenerateEffect
						words={wordsDesktop}
						className="text-7xl xs:text-4xl lg:text-6xl tracking-tight absolute inset-0  xs:text-left font-bold  flex items-center justify-center xs:justify-start xs:px-3 text-center text-white px-18 dark shadow-md"
						duration={0.4}
					/>
				</div>
				<div className="hidden xs:block">
					<TextGenerateEffect
						words={wordsMobile}
						className="xs:text-5xl tracking-tight absolute inset-0 xs:text-center font-bold flex items-center justify-center xs:justify-start xs:px-3 text-center text-white px-18 dark shadow-md"
						duration={0.4}
					/>
				</div>
			</div>
		</div>
	);
};

export default MessageSection;
