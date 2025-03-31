import { ButtonText, H1, P } from '@/lib/typography';
import React, { useEffect, useState } from 'react';
import { Building2, ChevronDownIcon, ChevronUpIcon, KeyRound } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DotBackground from '../ui/dot-bg';
import GridBackground from '../ui/grid-bg';

const FeatureMobileSection: React.FC = () => {
	const [accordionItem, setAccordionItem] = useState('item-1');
	const [type, setType] = useState('Miet');

	useEffect(() => {
		setAccordionItem('item-1');
	}, [type]);

	// Function to determine which image to display
	const getImageSrc = () => {
		if (type === 'Stwe') {
			if (accordionItem === 'item-1') return '/assets/stwe-1-mobile.webp';
			if (accordionItem === 'item-2') return '/assets/stwe-2-mobile.webp';
			if (accordionItem === 'item-3') return '/assets/stwe-3-mobile.webp';
			if (accordionItem === 'item-4') return '/assets/stwe-4-mobile.webp';
		} else {
			if (accordionItem === 'item-1') return '/assets/miet-1-mobile.webp';
			if (accordionItem === 'item-2') return '/assets/miet-2-mobile.webp';
			if (accordionItem === 'item-3') return '/assets/miet-3-mobile.webp';
			if (accordionItem === 'item-4') return '/assets/miet-4-mobile.webp';
			if (accordionItem === 'item-5') return '/assets/miet-5-mobile.webp';
		}
		return '';
	};

	const handleManualItemChange = (item: string) => {
		if (item !== accordionItem) {
			setAccordionItem(item);
		}
	};

	// Custom mobile AccordionItem components that include images
	const MobileAccordionItem = ({ itemId, title, children }: { itemId: string; title: string; children: React.ReactNode }) => {
		const isActive = accordionItem === itemId;

		return (
			<div className="border-b border-gray-200">
				<button className={`w-full text-left py-4 px-2 flex justify-between items-center`} onClick={() => handleManualItemChange(itemId)}>
					<span className={`${isActive ? 'font-semibold text-secondary' : ''}`}>{title}</span>
					<span className="transform transition-transform duration-300 ease-in-out">{!isActive ? <ChevronDownIcon size={'18px'} /> : <ChevronUpIcon size={'18px'} />}</span>
				</button>

				{isActive && (
					<div className="px-2 pb-4 flex flex-col gap-4">
						<div>{children}</div>
						<div className="relative min-w-[350px] min-h-[350px] w-full h-full bg-transparent">
							<DotBackground />
							<AnimatePresence mode="wait">
								<motion.div
									key={`${type}-${itemId}`}
									className="w-full flex justify-center bg-transparent"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
								>
									<img src={getImageSrc()} alt={`Bild für ${title}`} className="w-full object-contain " />
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				)}
			</div>
		);
	};

	// Mobile accordion content for Miet type
	const renderMobileAccordion = () => {
		if (type === 'Miet') {
			return (
				<div className="w-full">
					<MobileAccordionItem itemId="item-1" title="Schnelle und reibungslose Vermietung">
						<P className="text-muted-foreground text-sm ">
							Automatisierte Bonitätsprüfungen ermöglichen schnelle Entscheidungen. Sie bestimmen Ihre Einbindung selbst und behalten volle Kontrolle.
						</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-2" title="Mieterkommunikation">
						<P className="text-muted-foreground text-sm">Kommunikation via WhatsApp oder Mieterportal. Reparaturen, Anfragen und Dokumente zentral verfügbar – ohne Papierkram.</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-3" title="Zustand, Wartung und Werterhalt">
						<P className="text-muted-foreground text-sm">
							Bewy überwacht den Zustand Ihrer Immobilien. Wartungen und Instandhaltungen werden automatisch erkannt und durchgeführt. Lehnen Sie sich zurück, Bewy erledigt
							den Rest.
						</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-4" title="Finanzen im Griff">
						<P className="text-muted-foreground text-sm">
							Überblick über Mietzinsen und Renditen jederzeit verfügbar. Finanzkennzahlen sind grafisch aufbereitet, Echtzeit-Daten per Knopfdruck.
						</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-5" title="Bewy AI">
						<P className="text-muted-foreground text-sm">KI-basierter Chatbot beantwortet Fragen rund um die Uhr. Sofortiger Zugriff auf relevante Informationen ohne Wartezeit.</P>
					</MobileAccordionItem>
				</div>
			);
		} else {
			return (
				<div className="w-full">
					<MobileAccordionItem itemId="item-1" title="Zustand, Wartung und Werterhalt">
						<P className="text-muted-foreground text-sm">
							Bewy überwacht Ihre STWE-Liegenschaft laufend. Notwendige Massnahmen werden früh erkannt, Empfehlungen erstellt und für die Versammlung vorbereitet.
						</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-2" title="Versammlungen transparent dokumentiert">
						<P className="text-muted-foreground text-sm">Steuern Sie Versammlungen digital und transparent. Alle Unterlagen und Beschlüsse sind zentral und jederzeit einsehbar.</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-3" title="Finanzen jederzeit im Griff">
						<P className="text-muted-foreground text-sm">Überblick über Budget, Rücklagen und Kosten stets verfügbar. Finanzdaten sind klar dokumentiert und abrufbar.</P>
					</MobileAccordionItem>
					<MobileAccordionItem itemId="item-4" title="Bewy AI">
						<P className="text-muted-foreground text-sm">KI-basierter Chatbot beantwortet Fragen jederzeit zuverlässig. Direkter Zugang zu wichtigen Informationen ohne Verzögerung.</P>
					</MobileAccordionItem>
				</div>
			);
		}
	};

	return (
		<div className="container mx-auto py-16 my-16">
			<div className="flex flex-col  w-full">
				<div className=" mb-6 flex flex-row h-13 w-fit rounded-xl bg-accent p-1 gap-1 mx-auto">
					<button
						className={`${
							type === 'Miet' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-4 h-full w-full rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer`}
						onClick={() => setType('Miet')}
					>
						<Building2 size={'18px'} /> <ButtonText>Mieteigentum</ButtonText>
					</button>

					<button
						className={`${
							type === 'Stwe' ? 'bg-secondary text-white font-medium shadow-md' : 'bg-accent'
						} px-4 h-full w-full rounded-lg flex flex-row gap-2 items-center justify-center cursor-pointer`}
						onClick={() => setType('Stwe')}
					>
						<KeyRound size={'18px'} />
						<ButtonText>Stockwerkeigentum</ButtonText>
					</button>
				</div>

				<H1 className="mb-6 text-center">{type === 'Miet' ? 'Kontrolle über Ihr Mieteigentum' : 'Kontrolle über Ihr Stockwerkeigentum'}</H1>

				{renderMobileAccordion()}
			</div>
		</div>
	);
};

export default FeatureMobileSection;
