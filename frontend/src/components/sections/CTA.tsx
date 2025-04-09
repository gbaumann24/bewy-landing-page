import React from 'react';
import { ButtonText, H1, P } from '@/lib/typography';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
	return (
		<div className="container mx-auto">
			<div className="relative px-12 lg:px-5 bg-secondary rounded-xl mx-auto h-85 flex lg:h-fit lg:flex-col lg:py-14 items-center justify-center gap-24 lg:gap-14 overflow-clip z-20">
				<img src="assets/pattern-2.webp" alt="" className="absolute -right-40 lg:right-0 h-full object-cover opacity-70 scale-150 lg:scale-100  overflow-visible " />

				{/* Left Column - Image */}
				<div className="flex-1 z-10 ">
					<H1 className="text-white leading-14 lg:leading-11 lg:text-5xl">Interesse geweckt?</H1>
					<P className="text-white opacity-90 mt-5">Bewy ist Ihre moderne Immobilienbewirtschaftung für Mietliegenschaften und Stockwerkeigentum.</P>
				</div>
				<div className="flex-1 flex w-full items-center lg:justify-center justify-center z-10">
					<Link to={'/kontakt'} className="lg:w-full">
						<button className="flex bg-white  lg:w-full border cursor-pointer justify-center border-secondary hover:bg-white/80 items-center gap-2 px-14 py-5 text-white whitespace-nowrap rounded-xl">
							<ButtonText className="text-secondary text-xl">Kontakt aufnehmen</ButtonText>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CTA;
