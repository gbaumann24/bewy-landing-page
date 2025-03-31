import { H1, P } from '@/lib/typography';
import { motion } from 'framer-motion';
import React from 'react';

const DashboardSection: React.FC = () => {
	return (
		<div className="relative">
			<div className="container mx-auto h-lvh flex xs:flex-col items-center justify-center gap-12 xs:gap-0">
				{/* Left Column - Content */}
				<div className="flex-1">
					<H1 className="mb-4">
						Ihr persönliches <br /> Immobilien-Cockpit
					</H1>
					<P className="text-neutral-500 mb-8 w-6/7 xs:w-full">
						Unser Eigentümerportal ermöglicht Ihnen jederzeit und von überall den Zugang zu allen relevanten Informationen rund um Ihre Liegenschaft – von Abrechnungen,
						Zustandsanalysen und STWE-Protokollen bis hin zu laufenden Vorgängen wie Mieterwechsel und Sanierungen. So behalten Sie stets die Übersicht und können bei Bedarf
						fundierte Entscheidungen treffen, ohne sich um die Details kümmern zu müssen.
					</P>
					{/* <button className="flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-lg">
					<ButtonText>Mehr Erfahren</ButtonText>
				</button> */}
				</div>

				<div className="flex-1 xs:hidden"></div>
				<div className="relative w-full hidden xs:flex flex-1">
					<img
						src="/assets/dashboard_2.webp"
						alt="Dashboard Image"
						className="absolute top-0 w-full -right-3 h-full object-cover object-left overflow-hidden bg-transparent rounded-l-lg"
						style={{
							boxShadow: '0 0px 10px 1px rgba(12, 12, 13, 0.1)',
						}}
					/>
				</div>
			</div>
			{/* Right Column - Image */}

			<motion.img
				src="/assets/dashboard_2.webp"
				alt="Dashboard Image"
				className="xs:hidden absolute w-1/2 h-3/4 top-1/2 -translate-y-1/2 right-0 object-cover object-left overflow-visible bg-transparent rounded-l-4xl"
				style={{
					boxShadow: '0 -5px 33px 1px rgba(12, 12, 13, 0.1)',
				}}
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.7 }}
				transition={{
					duration: 0.8,
				}}
			/>
		</div>
	);
};

export default DashboardSection;
