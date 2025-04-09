import React from 'react';
import { H1 } from '@/lib/typography';
import { Step } from '../ui/step';
import { Handshake, MapPinHouse, Star, TrendingUp } from 'lucide-react';

const OnboardingSection: React.FC = () => {
	return (
		<div className="container mx-auto h-lvh lg:h-fit max-h-[900px] lg:max-h-none lg:flex-col-reverse flex py-24 xs:mt-24 lg:py-0 mt-14  items-center justify-center gap-12">
			{/* Right Column - Image */}
			<div className="flex-1 bg-transparent xs:hidden h-full max-h-[600px] lg:h-80 lg:w-full relative rounded-2xl" style={{ boxShadow: '-16px 16px 0px rgb(228, 120, 57, 0.6)' }}>
				<img src="/assets/onboarding-1.webp" alt="Dashboard Image" className="h-full object-cover object-center rounded-2xl" />
			</div>
			<div className="flex-1 bg-transparent hidden xs:block h-full max-h-[600px] lg:h-80 lg:w-full relative rounded-2xl">
				<img src="/assets/onboarding-1.webp" alt="Dashboard Image" className="h-full object-cover object-center rounded-2xl" />
			</div>
			{/* Left Column - Content */}
			<div className="flex-1 flex flex-col h-full w-full justify-center">
				<H1 className=" mb-12 xs:hidden leading-14 lg:leading-11">In wenigen Schritten zur digitalen Bewirtschaftung</H1>
				<H1 className=" mb-12 hidden xs:block leading-14 lg:leading-11">Wenige Schritte zur digitalen Bewirtschaftung</H1>
				<Step
					icon={<Star size={'18px'} />}
					title="Wahl des Service-Levels"
					description="Wählen Sie das Servicelevel, das perfekt zu Ihren Bedürfnissen, Erwartungen und der Komplexität Ihrer Liegenschaft passt. Eine detaillierte Vergleichsmöglichkeit der verschiedenen Servicelevels finden Sie untenstehend."
				/>
				<Step
					icon={<MapPinHouse size={'18px'} />}
					title="Begehung & Zustandsanalyse Ihrer Immobilie"
					description="Gemeinsam mit Bewy und einem erfahrenen Bauleiter erfolgt eine detaillierte Bestandesaufnahme: Die gesamte Infrastruktur mit allen Bauteilen wird systematisch geprüft und erfasst."
				/>
				<Step
					icon={<TrendingUp size={'18px'} />}
					title="Entwicklung der Immobilienstrategie"
					description="Basierend auf den erhobenen Daten erstellen wir einen Investitions- und Sanierungsplan. Gleichzeitig werden alle relevanten Informationen strukturiert und digital aufbereitet."
				/>
				<Step
					icon={<Handshake size={'18px'} />}
					title="Übergabe & Steuerung im Eigentümerportal"
					description="Alle Daten fliessen ins Eigentümerportal. Dort steuern und überwachen Sie Ihre Liegenschaft mit voller Transparenz."
				/>
			</div>
		</div>
	);
};

export default OnboardingSection;
