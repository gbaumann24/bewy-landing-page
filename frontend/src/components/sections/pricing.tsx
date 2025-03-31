import { ButtonText, H1 } from '@/lib/typography';
import React from 'react';
import { P } from '../../lib/typography';
import PricingCard from '../ui/pricebox';
import { Building2, KeyRound } from 'lucide-react';

const Pricing: React.FC = () => {
	const [type, setType] = React.useState('Miet');
	return (
		<div className="container mx-auto flex flex-col items-center justify-center gap-12 xs:gap-0 py-18 pb-34">
			<div className="flex flex-col items-center justify-center w-3/5 xs:w-full gap-4 mb-4">
				<H1 className='xs:text-center'>Unsere Serivcepakete</H1>
				<P className="text-muted-foreground text-center">
					Ob effiziente Basisverwaltung oder umfassender Rundum-Sorglos-Service – unsere Pakete sind massgeschneidert, um Ihre Immobilien optimal zu betreuen.
				</P>
				<div className="items-center mb-6 flex flex-row h-13  w-fit rounded-xl  bg-accent p-1 gap-1">
					<button
						className={`${
							type === 'Miet' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-6 xs:px-4 h-full w-full rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer`}
						onClick={() => setType('Miet')}
					>
						<Building2 size={'18px'} /> <ButtonText>Mieteigentum</ButtonText>
					</button>

					<button
						className={`${
							type === 'Stwe' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-6 xs:px-4 h-full w-full rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer`}
						onClick={() => setType('Stwe')}
					>
						<KeyRound size={'18px'} />
						<ButtonText>Stockwerkeigentum</ButtonText>
					</button>
				</div>
			</div>

			{type === 'Miet' && (
				<div className="flex flex-row xs:flex-col items-start justify-center gap-12 xs:gap-6 w-full">
					{/* Paket 1: Kompakt-Plan */}
					<PricingCard
						title="Kompakt"
						description="Effiziente Basisverwaltung für unkomplizierte Immobilien."
						price="CHF 60"
						vorOrt={['1x Begehung pro Objekt']}
						eigentuemerkommunikation={['E-Mail', 'Notfall-Hotline']}
						mieterkommunikation={['Chatbot & Whatsapp', 'KI-Telefon', 'E-Mail', 'Notfall-Hotline']}
						portal={['Eingeschränkter Zugriff']}
						mieterHandwerkerWahl={['Auswahl erfolgt durch unsere Verwaltung']}
						buttonText="Kontakt"
						onButtonClick={() => console.log('Button clicked!')}
					/>
					{/* Paket 2: Komfort-Plan */}
					<PricingCard
						containerClassName="shadow-xl scale-104 xs:scale-100 xs:shadow-none border-secondary/30 bg-secondary/10"
						title="Komfort"
						description="Erweiterte Betreuung mit vollem Portalzugang und flexibler Mietermix-Optimierung."
						price="CHF 80"
						vorOrt={['1x Begehung pro Objekt', '1x 1-2h Jahresanalyse']}
						eigentuemerkommunikation={['E-Mail', 'Notfall-Hotline']}
						mieterkommunikation={['Chatbot & Whatsapp', 'KI-Telefon', 'E-Mail', 'Notfall-Hotline']}
						portal={['Uneingeschränkter Zugriff']}
						mieterHandwerkerWahl={['Optional: Optimierung des Mietermixes']}
						buttonText="Kontakt"
						onButtonClick={() => console.log('Button clicked!')}
					/>
					{/* Paket 3: Rundum-Sorglos-Plan */}
					<PricingCard
						title="Premium"
						description="Service mit persönlicher Beratung, strategischer Immobilienanalyse und umfassendem Support."
						price="CHF 110"
						vorOrt={['1x Begehung inkl. persönlicher Beratung', '1x 1-2h Jahresanalyse mit Mittagessen']}
						eigentuemerkommunikation={['Direkte Durchwahl zu unserem Expertenteam']}
						mieterkommunikation={['Chatbot & Whatsapp', 'KI-Telefon', 'E-Mail', 'Priorisierte Notfall-Hotline']}
						portal={['Uneingeschränkter Zugriff']}
						mieterHandwerkerWahl={['Optional: Bestimmung von Mietern & Handwerkern']}
						buttonText="Kontakt"
						onButtonClick={() => console.log('Button clicked!')}
					/>
				</div>
			)}
			{type === 'Stwe' && (
				<div className="flex flex-row xs:flex-col items-start justify-center gap-12 xs:gap-6  w-full ">
					{/* Paket 1: Kompakt-Plan */}
					<PricingCard
						title="Kompakt"
						description="Kosteneffiziente Grundverwaltung für einfach strukturierte STWE-Gemeinschaften."
						price="CHF 60"
						portal={['Uneingeschränkter Zugriff']}
						versammlung={['Wenn immer möglich schriftlich']}
						buttonText="Kontakt"
						onButtonClick={() => console.log('Button clicked!')}
					/>
					{/* Paket 2: Komfort-Plan */}
					<PricingCard
						title="Komplex"
						description="Erweiterte Betreuung mit persönlichem Service für komplexere STWE-Gemeinschaften."
						price="CHF 60"
						portal={['Uneingeschränkter Zugriff']}
						versammlung={['Optional: pysisch vor Ort']}
						buttonText="Kontakt"
						onButtonClick={() => console.log('Button clicked!')}
					/>
				</div>
			)}
		</div>
	);
};

export default Pricing;
