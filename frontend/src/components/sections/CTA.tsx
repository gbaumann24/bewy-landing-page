import React from 'react';
import { ButtonText, H1, P } from '@/lib/typography';

const CTA: React.FC = () => {
	return (
		<div className="relative container px-12 bg-secondary rounded-xl xs:rounded-none mx-auto h-85 flex xs:h-fit xs:flex-col xs:py-24 items-center justify-center gap-24 overflow-clip z-20">
			<img src="assets/pattern-2.webp" alt="" className="absolute -right-40 xs:right-0  h-full object-cover opacity-70  overflow-visible " />

			{/* Left Column - Image */}
			<div className="flex-1 z-10">
				<H1 className="text-white">Interesse geweckt?</H1>
				<P className="text-white opacity-90 mt-5">Bewy ist Ihre moderne Immobilienbewirtschaftung für private Mietliegenschaften und Stockwerkeigentum.</P>
			</div>
			{/* Right Column - Content */}

			{/* <div className="flex-1 flex w-full mt-4 rounded-xl shadow-lg shadow-secondary/20 xs:hidden bg-white z-10">
				<input
					type="email"
					placeholder="hans@beispiel.com"
					className="flex-grow px-6 py-3 text-muted-foreground bg-white placeholder-gray-300 border rounded-l-xl focus:outline-none border-secondary/40"
				/>
				<button className="flex bg-white border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-r-xl">
					<ButtonText className="text-secondary">Brochüre anfordern</ButtonText>
				</button>
			</div> */}
			<div className="flex-1 flex w-full items-center xs:justify-start justify-center z-10">
				<button className="flex bg-white border border-secondary items-center gap-2 px-14 py-5 text-white whitespace-nowrap rounded-xl">
					<ButtonText className="text-secondary text-xl">Kontakt aufnehmen</ButtonText>
				</button>
			</div>
		</div>
	);
};

export default CTA;
