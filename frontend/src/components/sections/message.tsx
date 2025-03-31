import { TextGenerateEffect } from '../ui/text-generate-effect';
import React from 'react';

const words = 'Bewy verbindet bewährte Verwaltungsstandards mit zeitgemässer digitaler Umsetzung.';
const MessageSection: React.FC = () => {
	return (
		<div className="container mx-auto h-lvh flex items-center justify-center gap-12 py-18">
			<div className="relative w-full h-full rounded-xl overflow-clip">
				<img src="/assets/sofa.webp" className="absolute inset-0 h-full w-full object-cover" />
				<div className="absolute inset-0 opacity-50 bg-black " />
				<TextGenerateEffect
					words={words}
					className="text-6xl xs:text-4xl tracking-tight absolute inset-0 leading-14 xs:text-left font-semibold flex items-center justify-center xs:justify-start xs:px-3 text-center text-white px-18 dark shadow-md"
					duration={0.5}
				/>
			</div>
		</div>
	);
};

export default MessageSection;
