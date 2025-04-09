import { H1, P } from '@/lib/typography';
import { motion } from 'framer-motion';
import React from 'react';
import { CircleCheck } from 'lucide-react';

const DashboardSection: React.FC = () => {
	return (
		<div className="relative">
			<div className="container mx-auto h-lvh max-h-[1100px] xs:h-[900px] flex xs:flex-col items-center justify-center gap-12 lg:gap-0 xs:gap-0 xs:mb-40">
				{/* Left Column - Content */}
				<div className="flex-1">
					<H1 className="mb-4 lg:hidden leading-14 xs:leading-11">Immobilien Cockpit – Ihre Daten immer griffbereit</H1>
					<H1 className="mb-4 hidden lg:block leading-14 xs:leading-11">Ihr Immobilien Cockpit</H1>
					<P className="text-neutral-500 mb-7 w-6/7 xs:w-full lg:w-full">
						Mit unserem Eigentümerportal haben Sie jederzeit und von überall Zugang zu allen wesentlichen Informationen Ihrer Liegenschaft – von Mietzinseinnahmen und
						Leerstandsübersichten bis hin zu Mieterwechseln und Handwerkerofferten, alles zentral und effizient gebündelt.
					</P>
					<div className="ml-3 xs:mb-12 ">
						<div className="space-y-4 xs:space-y-3">
							{[
								'Historie aller Aktivitäten rund um Ihre Immobilie',
								'Übersicht über alle relevante Kennzahlen',
								'Einblick in Leerstände und Immobilienwert',
								'Informationen zu Mieterwechseln und Sanierungsprojekten',
							].map((item, index) => (
								<div key={index} className="flex items-start gap-3 ">
									<CircleCheck className="text-white min-w-[20px] xs:mt-1 " fill="#E47839" size={20} />
									<span className="text-muted-foreground ">{item}</span>
								</div>
							))}
						</div>
					</div>
					{/* <button className="flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-lg">
					<ButtonText>Mehr Erfahren</ButtonText>
				</button> */}
				</div>

				<div className="flex-1 xs:hidden"></div>
				<div className="relative w-full hidden xs:flex flex-1">
					<img
						src="/assets/dashboard_2.webp"
						alt="Dashboard Image"
						className="absolute top-0 w-full -right-4 h-[350px] object-cover object-left overflow-hidden bg-transparent rounded-l-lg"
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
				className="xs:hidden absolute w-1/2 h-3/4 top-1/2 -translate-y-1/2 right-0 lg:-right-10 object-cover object-left overflow-visible bg-transparent rounded-l-4xl"
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
