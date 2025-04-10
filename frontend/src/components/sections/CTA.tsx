import React from 'react';
import { ButtonText, H1, P } from '@/lib/typography';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CTA: React.FC = () => {
	return (
		<div className="container mx-auto">
			<div className="relative px-12 lg:px-5 bg-secondary rounded-xl mx-auto h-85 flex lg:h-fit lg:flex-col lg:py-14 items-center justify-center gap-24 lg:gap-14 overflow-clip z-20">
				<img src="assets/pattern-3.webp" alt="" className="absolute -right-20 h-full object-cover opacity-80 scale-150 lg:opacity-40  overflow-visible " />

				{/* Left Column - Image */}
				<div className="flex z-10 flex-col items-start w-full">
					<H1 className="text-white leading-14 lg:leading-11 lg:text-5xl text-left">Interesse geweckt?</H1>
					<P className="text-white opacity-90 mt-4 w-1/3 xl:w-1/2 lg:w-full text-left">
						Bewy ist Ihre moderne Immobilienbewirtschaftung für Mietliegenschaften und Stockwerkeigentum.
					</P>
					<Link to={'/kontakt'} className="lg:w-full">
						<button className="flex bg-white mt-8 lg:w-full border cursor-pointer justify-center border-secondary hover:bg-neutral-200 items-center gap-2 px-14 py-5 text-white whitespace-nowrap rounded-xl shadow-md">
							<ButtonText className="text-secondary text-xl flex items-center">
								Kontakt aufnehmen <ArrowUpRight size={24} className="ml-1" />
							</ButtonText>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CTA;
