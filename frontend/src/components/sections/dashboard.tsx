import { ButtonText, H1, P } from '@/lib/typography';
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '../ui/button';

const DashboardSection: React.FC = () => {
	return (
		<div className="container mx-auto h-dvh flex items-center justify-center gap-12">
			{/* Left Column - Content */}
			<div className="flex-1">
				<H1 className="text-4xl md:text-5xl leading-14 mb-4">Ihr persönliches Immobilien-Cockpit</H1>
				<P className="text-neutral-500 mb-8 w-6/7">
					Unser Eigentümerportal ermöglicht Ihnen jederzeit und von überall den Zugang zu allen relevanten Informationen rund um Ihre Liegenschaft – von Abrechnungen,
					Zustandsanalysen und STWE-Protokollen bis hin zu laufenden Vorgängen wie Mieterwechsel und Sanierungen. So behalten Sie stets die Übersicht und können bei Bedarf
					fundierte Entscheidungen treffen, ohne sich um die Details kümmern zu müssen.
				</P>
				{/* <button className="flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-lg">
					<ButtonText>Mehr Erfahren</ButtonText>
				</button> */}
			</div>

			{/* Right Column - Image */}
			<div className="flex-1 bg-transparent h-3/4">
				<motion.img
					src="/assets/dashboard.webp"
					alt="Dashboard Image"
					className="h-full object-cover object-left overflow-visible bg-transparent rounded-4xl"
					style={{
						boxShadow: '0 -5px 33px 1px rgba(12, 12, 13, 0.1)',
					}}
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true, amount: 1.0 }}
					transition={{
						duration: 0.8,
					}}
				/>
			</div>
		</div>
	);
};

export default DashboardSection;
