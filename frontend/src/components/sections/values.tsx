import { ChartLine, Database, Minimize, Star } from 'lucide-react';
import { H4, P } from '@/lib/typography';
import { motion } from 'framer-motion';

const ValuesSection: React.FC = () => {
	const valueVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.6,
			},
		}),
	};

	return (
		<div className="container flex xs:flex-col items-start justify-center gap-10 py-12">
			<motion.div
				className="flex flex-1 w-full flex-col items-start justify-center border-t pt-5 xs:border-none xs:pt-10 xs:px-2"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={0}
			>
				<div className="flex flex-col xs:flex-row-reverse items-start xs:items-center w-full justify-between xs:pb-2">
					<Database className="xs:w" />
					<H4 className="text-secondary mt-3 mb-4">Transparent</H4>
				</div>
				<P className="text-muted-foreground">
					Unser Eigentümerportal ermöglicht Ihnen jederzeit Einblick in aktuelle Vorgänge & Zahlen – strukturiert, nachvollziehbar und in Echtzeit.
				</P>
			</motion.div>
			<motion.div
				className="flex flex-1 flex-col items-start justify-center border-t pt-5 xs:pt-10 xs:px-2"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={1}
			>
				<div className="flex flex-col xs:flex-row-reverse items-start xs:items-center w-full justify-between xs:pb-2">
					<ChartLine />
					<H4 className="text-secondary mt-3 mb-4">Wertstiftend</H4>
				</div>
				<P className="text-muted-foreground">Wir begleiten Sie mit fundierten Analysen, sorgfältiger Planung und einem klaren Blick auf den gesamten Lebenszyklus Ihrer Immobilie.</P>
			</motion.div>

			<motion.div
				className="flex flex-col flex-1 items-start justify-center border-t pt-5 xs:pt-10 xs:px-2"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={2}
			>
				<div className="flex flex-col xs:flex-row-reverse items-start xs:items-center w-full justify-between xs:pb-2">
					<Star />
					<H4 className="text-secondary mt-3 mb-4">Kompetent</H4>
				</div>
				<P className="text-muted-foreground"> Langfristig an Ihrer Seite mit klaren Prozessen, schneller Reaktionszeit und einem lösungsorientierten Verständnis für Ihre Immobilie.</P>
			</motion.div>

			<motion.div
				className="flex flex-col flex-1 items-start justify-center border-t pt-5 xs:pt-10 xs:px-2"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={3}
			>
				<div className="flex flex-col xs:flex-row-reverse items-start xs:items-center w-full justify-between xs:pb-2">
					<Minimize />
					<H4 className="text-secondary mt-3 mb-4">Massgeschneidert</H4>
				</div>

				<P className="text-muted-foreground">Wir richten uns nach Ihren Bedürfnissen. Ob zurückhaltend oder engagiert – Sie bestimmen den Grad Ihrer Mitwirkung.</P>
			</motion.div>
		</div>
	);
};

export default ValuesSection;
