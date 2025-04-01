import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type MietAccordionProps = {
	accordionItem: string;
	setAccordionItem: (item: string) => void;
	progress: number;
};

export const StweAccordion: React.FC<MietAccordionProps> = ({ progress, accordionItem, setAccordionItem }) => {
	return (
		<Accordion
			type="single"
			collapsible
			onValueChange={(value) => {
				setAccordionItem(value);
			}}
			value={accordionItem}
		>
			<AccordionItem value="item-1" className={cn('w-full', accordionItem === 'item-1' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Kontinuierlicher Werterhalt</AccordionTrigger>
				<AccordionContent progress={progress}>
					Bewy überwacht den baulichen Zustand Ihrer STWE-Liegenschaft kontinuierlich und erkennt notwendige Massnahmen frühzeitig. Anstehende Fälligkeiten werden automatisch
					erfasst, mit intelligenten Empfehlungen ergänzt und nahtlos in die Traktandenliste der nächsten Eigentümerversammlung integriert. Holistische Zustandsberichte bieten
					dabei einen umfassenden Überblick und schaffen eine gemeinsame Informationsbasis für alle Beteiligten – transparent, vorausschauend und effizient.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" className={cn('w-full', accordionItem === 'item-2' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Versammlungen transparent dokumentiert</AccordionTrigger>
				<AccordionContent progress={progress}>
					Ob online oder vor Ort – Bewy führt Eigentümerversammlungen effizient und transparent durch. Von der Einreichung der Traktanden über die Abstimmung bis zum
					unterzeichneten Protokoll läuft der gesamte Prozess digital und nachvollziehbar. Alle Unterlagen und Beschlüsse sind zentral archiviert und jederzeit einsehbar.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" className={cn('w-full', accordionItem === 'item-3' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Finanzen jederzeit im Griff</AccordionTrigger>
				<AccordionContent progress={progress}>
					Mit Bewy behalten alle Eigentümer den Überblick über Budget, Erneuerungsfonds, laufende Kosten und Abrechnungen. Finanzdaten sind in Echtzeit einsehbar, übersichtlich
					aufbereitet und bereit zum Download. Vom Jahresabschluss bis zur individuellen Kostenverteilung – alle Zahlen sind nachvollziehbar dokumentiert und zentral verfügbar.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4" className={cn('w-full', accordionItem === 'item-4' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Bewy AI – Ihre digitale Assistenz</AccordionTrigger>
				<AccordionContent progress={progress}>
					Bewy AI ergänzt die klassische Bewirtschaftung durch Ihre persönliche, KI-gestützte Assistenz. Stellen Sie rund um die Uhr Ihre Fragen zu Objekten, Finanzen,
					Versammlungen oder Dokumenten und erhalten Sie sofort zuverlässige Antworten. Bewy AI verschafft Ihnen schnellen, einfachen Zugang zu wichtigen Informationen ohne
					Wartezeiten.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
