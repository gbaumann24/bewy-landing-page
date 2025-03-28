import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { P } from '@/lib/typography';
import { cn } from '@/lib/utils';

type MietAccordionProps = {
	accordionItem: string;
	setAccordionItem: (item: string) => void;
};

export const StweAccordion: React.FC<MietAccordionProps> = ({ accordionItem, setAccordionItem }) => {
	return (
		<Accordion
			type="single"
			collapsible
			onValueChange={(value) => {
				setAccordionItem(value);
			}}
			value={accordionItem}
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>Zustand, Wartung und Werterhalt</AccordionTrigger>
				<AccordionContent>
					Bewy überwacht den baulichen Zustand Ihrer STWE-Liegenschaft kontinuierlich und erkennt notwendige Massnahmen frühzeitig. Anstehende Fälligkeiten werden automatisch
					erfasst, mit intelligenten Empfehlungen ergänzt und nahtlos in die Traktandenliste der nächsten Eigentümerversammlung integriert. Holistische Zustandsberichte bieten
					dabei einen umfassenden Überblick und schaffen eine gemeinsame Informationsbasis für alle Beteiligten – transparent, vorausschauend und effizient.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Versammlungen transparent dokummentiert</AccordionTrigger>
				<AccordionContent>
					Ob online oder vor Ort – mit Bewy steuern Sie Eigentümerversammlungen effizient und transparent. Von der Einreichung der Traktanden über die Abstimmung bis zum
					unterzeichneten Protokoll läuft der gesamte Prozess digital und nachvollziehbar. Alle Unterlagen und Beschlüsse sind zentral archiviert und jederzeit einsehbar.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Finanzen jederzeit im Griff</AccordionTrigger>
				<AccordionContent>
					Mit Bewy behalten alle Eigentümer den Überblick über Budget, Rücklagen, laufende Kosten und Abrechnungen. Finanzdaten sind in Echtzeit einsehbar, übersichtlich
					aufbereitet und bereit zum Download. Vom Jahresabschluss bis zur individuellen Kostenverteilung – alle Zahlen sind nachvollziehbar dokumentiert und zentral verfügbar.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Bewy AI</AccordionTrigger>
				<AccordionContent>
					Bewy AI ist ein zentraler, KI-basierter Chatbot. Er beantwortet Fragen zu Objekten, Finanzen, Versammlungen oder Dokumenten – sofort, zuverlässig und rund um die Uhr. So
					haben Sie jederzeit schnellen Zugriff auf relevante Informationen, ohne auf Rückmeldungen warten zu müssen.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
