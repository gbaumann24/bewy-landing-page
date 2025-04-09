import { ButtonText, H1 } from '@/lib/typography';
import React from 'react';
import { P } from '../../lib/typography';
import PricingCard from '../ui/pricebox';
import { Building2, KeyRound } from 'lucide-react';
import { StweSlider } from '../ui/stwe-slider';

const pricingData = [
	{ user: 3, price: 84 },
	{ user: 4, price: 83 },
	{ user: 5, price: 81 },
	{ user: 6, price: 80 },
	{ user: 7, price: 79 },
	{ user: 8, price: 78 },
	{ user: 9, price: 77 },
	{ user: 10, price: 75 },
	{ user: 11, price: 74 },
	{ user: 12, price: 73 },
	{ user: 13, price: 72 },
	{ user: 14, price: 71 },
	{ user: 15, price: 70 },
	{ user: 16, price: 69 },
	{ user: 17, price: 68 },
	{ user: 18, price: 67 },
	{ user: 19, price: 66 },
	{ user: 20, price: 65 },
	{ user: 21, price: 64 },
	{ user: 22, price: 63 },
	{ user: 23, price: 62 },
	{ user: 24, price: 61 },
	{ user: 25, price: 60 },
	{ user: 26, price: 59 },
	{ user: 27, price: 58 },
	{ user: 28, price: 58 },
	{ user: 29, price: 57 },
	{ user: 30, price: 56 },
	{ user: 31, price: 55 },
	{ user: 32, price: 54 },
	{ user: 33, price: 53 },
	{ user: 34, price: 53 },
	{ user: 35, price: 52 },
	{ user: 36, price: 51 },
	{ user: 37, price: 50 },
	{ user: 38, price: 50 },
	{ user: 39, price: 49 },
	{ user: 40, price: 48 },
	{ user: 41, price: 47 },
	{ user: 42, price: 47 },
	{ user: 43, price: 46 },
	{ user: 44, price: 45 },
	{ user: 45, price: 45 },
	{ user: 46, price: 44 },
	{ user: 47, price: 43 },
	{ user: 48, price: 43 },
	{ user: 49, price: 42 },
	{ user: 50, price: 41 },
];

const Pricing: React.FC = () => {
	const [type, setType] = React.useState('Miet');
	const [stwePrice, setStwePrice] = React.useState(45);

	const adjustPricing = (price: number) => {
		setStwePrice(price);
	};

	return (
		<div className="container mx-auto flex flex-col items-center justify-center gap-12 lg:gap-0 py-18 pb-34">
			<div className="flex flex-col items-center justify-center w-3/5 md:w-full gap-4">
				<H1 className="lg:text-center leading-14 lg:leading-11">Unsere Servicepakete</H1>
				<P className="text-muted-foreground text-center">
					Unsere Servicepakete sind individuell auf Ihre Bedürfnisse abgestimmt und gewährleisten eine professionelle Betreuung Ihrer Immobilie. Dabei sind alle gängigen
					Bewirtschaftungs-Standardleistungen in jedem Preismodell inbegriffen.
				</P>
				<div className="items-center mb-6 flex flex-row h-13  w-fit rounded-xl  bg-accent p-1 gap-1">
					<button
						className={`${
							type === 'Miet' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-6 lg:px-3 h-full w-full rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer`}
						onClick={() => setType('Miet')}
					>
						<Building2 size={'18px'} /> <ButtonText>Mietliegenschaft</ButtonText>
					</button>

					<button
						className={`${
							type === 'Stwe' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-6 lg:px-3 h-full w-full rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer`}
						onClick={() => setType('Stwe')}
					>
						<KeyRound size={'18px'} />
						<ButtonText>Stockwerkeigentum</ButtonText>
					</button>
				</div>
			</div>

			{type === 'Miet' && (
				<div className="flex flex-row lg:flex-col items-stretch justify-center gap-12 lg:gap-6 w-full">
					{/* Paket 1: Kompakt-Plan */}
					<PricingCard
						title="Basis"
						description="Schlanke und effiziente Basisverwaltung für unkomplizierte Eigentümer."
						price="60"
						vorOrt={['1x Initiale Begehung pro Liegenschaft', 'Primär E-Mail']}
						mieterkommunikation={['Whatsapp', 'E-Mail', 'Telefon']}
						portal={['Uneingeschränkter Zugriff']}
						mieterHandwerkerWahl={['Auswahl erfolgt durch Bewy']}
						buttonText="Kontakt"
						kompetenzsumme="ab 3'500CHF"
					/>
					{/* Paket 2: Komfort-Plan */}
					<PricingCard
						containerClassName="shadow-xl scale-104 lg:scale-100 lg:shadow-none border-secondary/30 bg-secondary/10"
						title="Komfort"
						description="Erweiterte Betreuung mit mehr Mitbestimmungsmöglichkeiten."
						price="75"
						vorOrt={['Wie bei Kompakt', '1x 1-2h Jahresanalyse pro Eigentümer']}
						mieterkommunikation={['Wie bei Komfort']}
						portal={['Uneingeschränkter Zugriff']}
						mieterHandwerkerWahl={['Optional: Bestimmung von Handwerkern']}
						buttonText="Kontakt"
						kompetenzsumme="ab 4'500CHF"
						specialButton={true}
					/>
					{/* Paket 3: Rundum-Sorglos-Plan */}
					<PricingCard
						title="Premium"
						description="Serivce mit maximaler Mitbestimmung und persönlicher Betreuung."
						price="105"
						vorOrt={['Wie bei Komfort', 'Primär Telefon & E-Mail']}
						mieterkommunikation={['Wie bei Kompakt']}
						portal={['Uneingeschränkter Zugriff']}
						mieterHandwerkerWahl={['Wie bei Komfort', 'Optional: Auswahl von Mietenden']}
						buttonText="Kontakt"
						kompetenzsumme="Frei Wählbar"
					/>
				</div>
			)}
			{type === 'Stwe' && (
				<div className="flex flex-col items-center justify-center gap-6 lg:gap-6 w-[500px] lg:w-full">
					<StweSlider minOwners={3} maxOwners={50} defaultOwners={10} pricingData={pricingData} onValueChange={adjustPricing} />
					{/* Paket 1: Kompakt-Plan */}
					<PricingCard
						containerClassName="shadow-xl lg:scale-100 lg:shadow-none border-secondary/30 bg-secondary/10"
						title="Standard"
						description="Digitale Bewirtschaftung für Stockwerkeigentums-Gemeinschaften jeglicher Grösse."
						price={stwePrice.toString()}
						vorOrt={['1x Initiale Begehung pro Liegenschaft', 'Primär: E-Mail']}
						portal={['Uneingeschränkter Zugriff']}
						versammlung={['Schriftlich, Präsenz oder Hybrid']}
						buttonText="Kontakt"
						specialButton={true}
					/>
				</div>
			)}

			{type === 'Miet' && (
				<P className="self-start text-xs text-muted-foreground lg:mt-4">
					* Die Kompetenzsumme definiert den finanziellen Rahmen, bis zu dem die Bewirtschaftung eigenständig Entscheidungen treffen kann.
				</P>
			)}
		</div>
	);
};

export default Pricing;
