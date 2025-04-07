import React from 'react';
import { ButtonText, H1, P } from '@/lib/typography';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
	return (
		<div className="container mx-auto">
			<div className="relative px-12 xs:px-3 bg-secondary rounded-xl mx-auto h-85 flex xs:h-fit xs:flex-col xs:py-24 items-center justify-center gap-24 overflow-clip z-20">
				<img src="assets/pattern-2.webp" alt="" className="absolute -right-40 xs:right-0 h-full object-cover opacity-70 scale-150 xs:scale-100  overflow-visible " />

				{/* Left Column - Image */}
				<div className="flex-1 z-10 ">
					<H1 className="text-white leading-14 xs:leading-11 xs:text-5xl">Interesse geweckt?</H1>
					<P className="text-white opacity-90 mt-5">Bewy ist Ihre moderne Immobilienbewirtschaftung für Mietliegenschaften und Stockwerkeigentum.</P>
				</div>
				<div className="flex-1 flex w-full items-center xs:justify-start justify-center z-10">
					<Link to={'/kontakt'}>
						<button className="flex bg-white border cursor-pointer border-secondary hover:bg-white/80 items-center gap-2 px-14 py-5 text-white whitespace-nowrap rounded-xl">
							<ButtonText className="text-secondary text-xl">Kontakt aufnehmen</ButtonText>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CTA;
