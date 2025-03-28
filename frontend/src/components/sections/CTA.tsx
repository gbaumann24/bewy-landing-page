import React, { useState } from 'react';
import { H2, P } from '@/lib/typography';

const CTA: React.FC = () => {
	return (
		<div className="container mx-auto h-80 flex items-center justify-center gap-12 overflow-y-clip">
			{/* Left Column - Image */}
			<div className="flex-1">
				<H2 className="text-white">Jetzt starten - Moderne Bewirtschaftung für Ihre Liegenschaft.</H2>
			</div>
			{/* Right Column - Content */}
			<div className="relative h-full flex-1 overflow-visible">
				<img src="assets/pattern-2.webp" alt="" className="absolute left-50 scale-200 h-full opacity-70 top-30 overflow-visible" />
			</div>
		</div>
	);
};

export default CTA;
