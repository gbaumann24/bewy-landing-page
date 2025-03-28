import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { P } from '@/lib/typography';
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
			<AccordionItem value="item-1">
				<AccordionTrigger>Schnelle und reibungslose Vermietung</AccordionTrigger>
				<AccordionContent progress={progress}>
					Automatisierte Bonitätsprüfungen, Mieter-Objekt Fit und digitale Referenz-Checks ermöglichen fundierte Entscheidungen in Rekordzeit. Sie bestimmen selbst, wie stark Sie
					in den Prozess eingebunden sein möchten, behalten aber jederzeit die volle Kontrolle.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Mieterkommunikation</AccordionTrigger>
				<AccordionContent progress={progress}>
					Ihre Mieter kommunizieren bequem über WhatsApp oder das Mieterportal. Reparaturmeldungen, Anfragen und Dokumentenzugriff – alles zentral, nachvollziehbar und ohne
					Papierkram. So läuft die Kommunikation effizient, modern und ganz ohne Umwege – für mehr Zufriedenheit Ihrer Kunden.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Zustand, Wartung und Werterhalt</AccordionTrigger>
				<AccordionContent progress={progress}>
					Bewy überwacht den baulichen Zustand Ihrer Liegenschaften kontinuierlich und erkennt notwendige Massnahmen frühzeitig. Fälligkeiten, Wartungen und notwendige
					Instandhaltungsmassnahmen werden automatisch erkannt, gemeldet und effizient in die Wege geleitet. So sichern Sie den Werterhalt langfristig – ohne Mehraufwand. Sie
					lehnen sich zurück, Bewy übernimmt den Rest.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Finanzen im Griff</AccordionTrigger>
				<AccordionContent progress={progress}>
					Behalten Sie jederzeit den Überblick über Mietzinsen, Nebenkosten und Renditen – bequem und ohne Aufwand. Alle Finanzkennzahlen Ihrer Liegenschaften sind in Echtzeit
					verfügbar, grafisch aufbereitet und bereit zum Export. Bilanz, Erfolgsrechnung, Saldolisten und Mieterspiegel stehen auf Knopfdruck bereit – zentral gesteuert im
					übersichtlichen Cockpit.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger>Bewy AI</AccordionTrigger>
				<AccordionContent progress={progress}>
					Bewy AI ist ein zentraler, KI-basierter Chatbot. Er beantwortet Fragen zu Objekten, Finanzen, Versammlungen oder Dokumenten – sofort, zuverlässig und rund um die Uhr. So
					haben Sie jederzeit schnellen Zugriff auf relevante Informationen, ohne auf Rückmeldungen warten zu müssen.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
