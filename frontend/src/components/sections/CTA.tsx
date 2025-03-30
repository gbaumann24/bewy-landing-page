import React from 'react';
import { ButtonText, H2, P } from '@/lib/typography';


const CTA: React.FC = () => {
	return (
		<div className="container mx-auto h-85 flex items-center justify-center gap-24 overflow-clip">
			{/* Left Column - Image */}
			<div className="flex-1">
				<H2 className="text-white">Haben wir Ihr Interesse?</H2>
				<P className="text-white opacity-90 mt-5">
					Bewy ist die digitale Lösung für Ihre Immobilienverwaltung. Wir helfen Ihnen, Ihre Prozesse zu vereinfachen, Zeit zu sparen und Ihre Effizienz zu steigern.
				</P>
			</div>
			{/* Right Column - Content */}
			<div className="relative h-full flex-1 overflow-visible flex items-center justify-center">
				<div className="flex w-full mt-4 rounded-xl shadow-md z-20">
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
		</div>
	);
};

export default CTA;
