import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type MietAccordionProps = {
	accordionItem: string;
	setAccordionItem: (item: string) => void;
	progress: number;
};

export const MietAccordion: React.FC<MietAccordionProps> = ({ accordionItem, setAccordionItem, progress }) => {
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
				<AccordionTrigger>Schnelle und reibungslose Vermietung</AccordionTrigger>
				<AccordionContent progress={progress}>
					Automatisierte Bonitätsprüfungen, Kontrolle eines passenden Mieter-Mix und digitale Referenz-Checks ermöglichen fundierte Entscheidungen in Rekordzeit. Sie bestimmen
					selbst, wie stark Sie in den Prozess eingebunden sein möchten, behalten aber jederzeit den Überblick.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" className={cn('w-full', accordionItem === 'item-2' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Effektive Mieterkommunikation</AccordionTrigger>
				<AccordionContent progress={progress}>
					Ihre Mieter kommunizieren bequem über WhatsApp oder das Mieterportal. Reparaturmeldungen, Mietzinsauskünfte oder Dokumentenzugriff – alles zentral, nachvollziehbar und
					ohne Papierkram. So läuft die Kommunikation ganz ohne Umwege – für mehr Zufriedenheit Ihrer Mietenden.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" className={cn('w-full', accordionItem === 'item-3' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Kontinuierlicher Werterhalt</AccordionTrigger>
				<AccordionContent progress={progress}>
					Wir von Bewy überwachen den baulichen Zustand Ihrer Liegenschaften kontinuierlich und erkennt notwendige Massnahmen frühzeitig. Fälligkeiten, Wartungen und notwendige
					Instandhaltungsmassnahmen werden erkannt, gemeldet und effizient in die Wege geleitet. So sichern Sie den Werterhalt langfristig. Sie lehnen sich zurück, Bewy übernimmt
					den Rest.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4" className={cn('w-full', accordionItem === 'item-4' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Übersichtliche Finanzen</AccordionTrigger>
				<AccordionContent progress={progress}>
					Behalten Sie jederzeit den Überblick über Mietzinseinnahmen, Investitionen und Renditen – bequem und ohne Aufwand. Alle Finanzkennzahlen Ihrer Liegenschaften sind in
					Echtzeit verfügbar, grafisch aufbereitet und bereit zum Export. Bilanz, Erfolgsrechnung, Saldolisten oder Mieterspiegel stehen auf Knopfdruck bereit.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5" className={cn('w-full', accordionItem === 'item-5' && progress < 100 && 'pointer-events-none')}>
				<AccordionTrigger>Bewy AI – Ihre digitale Assistenz</AccordionTrigger>
				<AccordionContent progress={progress}>
					Bewy AI ergänzt die klassische Bewirtschaftung durch Ihre persönliche, KI-gestützte Assistenz. Stellen Sie rund um die Uhr Ihre Fragen zu Objekten, Finanzen oder
					Dokumenten und erhalten Sie sofort zuverlässige Antworten. Bewy AI verschafft Ihnen schnellen, einfachen Zugang zu wichtigen Informationen ohne Wartezeiten.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
