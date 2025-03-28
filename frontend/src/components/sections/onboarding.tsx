import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { H1, P } from '@/lib/typography';
import { Step } from '../ui/step';
import { Button } from '../ui/button';

const OnboardingSection: React.FC = () => {
	return (
		<div className="container mx-auto h-dvh flex items-center justify-center gap-12">
			{/* Right Column - Image */}
			<div className="flex-1 bg-transparent h-3/4">
				<img src="/assets/onboarding-1.webp" alt="Dashboard Image" className="h-full object-cover object-center rounded-4xl" />
			</div>
			{/* Left Column - Content */}
            <div className="flex-1">
				<H1 className="text-4xl md:text-5xl leading-14 mb-4">In wenigen Schritten zur digitalen Bewirtschaftung</H1>
				<Step
					number={1}
					title="Wahl des Service-Levels"
					description="Wählen Sie das passende Leistungspaket – abgestimmt auf Ihre Bedürfnisse und die Komplexität Ihrer Liegenschaften."
				/>
				<Step
					number={2}
					title="Initiale Begehung & Zustandsanalyse"
					description="Gemeinsam mit BEWY und dem Bauleiter erfolgt eine detaillierte Bestandesaufnahme: Gebäudehülle, Zustand, Wartungsbedarf und technische Infrastruktur werden systematisch erfasst."
				/>
				<Step
					number={3}
					title="Entwicklung der Gebäudestrategie"
					description="Basierend auf den erhobenen Daten erstellen wir einen Investitions- und Sanierungsplan. Gleichzeitig werden alle relevanten Informationen strukturiert und digital aufbereitet."
				/>
				<Step
					number={4}
					title=" Übergabe & Steuerung im Eigentümerportal"
					description="Alle Daten fliessen ins BEWY-Portal. Dort steuern und überwachen Sie Ihre Liegenschaft digital – mit voller Transparenz und jederzeitem Zugriff."
				/>
			</div>
		</div>
	);
};

export default OnboardingSection;
