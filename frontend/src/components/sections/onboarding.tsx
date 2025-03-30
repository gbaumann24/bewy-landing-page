import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { H1, P } from '@/lib/typography';
import { Step } from '../ui/step';
import { Button } from '../ui/button';
import { Handshake, MapPinHouse, Star, TrendingUp } from 'lucide-react';

const OnboardingSection: React.FC = () => {
	return (
		<div className="container mx-auto h-dvh flex items-center justify-center gap-12">
			{/* Right Column - Image */}
			<div className="flex-1 bg-transparent h-3/4">
				<img src="/assets/onboarding-1.webp" alt="Dashboard Image" className="h-full object-cover object-center rounded-4xl" />
			</div>
			{/* Left Column - Content */}
			<div className="flex-1">
				<H1 className="text-4xl md:text-5xl leading-14 mb-12">In wenigen Schritten zur digitalen Bewirtschaftung</H1>
				<Step
					icon={<Star size={'18px'} />}
					title="Wahl des Service-Levels"
					description="Wählen Sie das perfekte Leistungspaket – individuell abgestimmt auf Ihre Bedürfnisse, Erwartungen und die Komplexität Ihrer Liegenschaften für optimale Ergebnisse."
				/>
				<Step
					icon={<MapPinHouse size={'18px'} />}
					title="Initiale Begehung & Zustandsanalyse"
					description="Gemeinsam mit Bewy und dem erfahrenen Bauleiter erfolgt eine detaillierte Bestandesaufnahme: Gebäudehülle, Zustand, Wartungsbedarf und technische Infrastruktur werden systematisch erfasst."
				/>
				<Step
					icon={<TrendingUp size={'18px'} />}
					title="Entwicklung der Gebäudestrategie"
					description="Basierend auf den erhobenen Daten erstellen wir einen Investitions- und Sanierungsplan. Gleichzeitig werden alle relevanten Informationen strukturiert und digital aufbereitet."
				/>
				<Step
					icon={<Handshake size={'18px'} />}
					title="Übergabe & Steuerung im Eigentümerportal"
					description="Alle Daten fliessen ins Bewy-Portal. Dort steuern und überwachen Sie Ihre Liegenschaft digital – mit voller Transparenz und jederzeitem Zugriff."
				/>
				
			</div>
		</div>
	);
};

export default OnboardingSection;
