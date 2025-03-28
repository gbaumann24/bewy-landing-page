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
		<div className="container mx-auto flex items-center justify-center gap-10 py-12">
			<motion.div 
				className="flex flex-col items-start justify-center border-t pt-5"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={0}
			>
				<Database />
				<H4 className="text-secondary mt-3 mb-4">Transparent</H4>
				<P className="text-muted-foreground">
					Unser Eigentümerportal ermöglicht Ihnen jederzeit Einblick in aktuelle Vorgänge & Zahlen – strukturiert, nachvollziehbar und in Echtzeit.
				</P>
			</motion.div>
			<motion.div 
				className="flex flex-col items-start justify-center border-t pt-5"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={1}
			>
				<ChartLine />
				<H4 className="text-secondary mt-3 mb-4">Wertstiftend</H4>
				<P className="text-muted-foreground">Wir begleiten Sie mit fundierter Analyse, sorgfältiger Planung und einem klaren Blick auf den gesamten Lebenszyklus Ihrer Immobilie.</P>
			</motion.div>
			<motion.div 
				className="flex flex-col items-start justify-center border-t pt-5"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={2}
			>
				<Star />
				<H4 className="text-secondary mt-3 mb-4">Kompetent</H4>
				<P className="text-muted-foreground">Wir bringen komplexe Themen auf den Punkt und begleiten Sie mit fundierten Analysen und lösungsorientierter Beratung.</P>
			</motion.div>
			<motion.div 
				className="flex flex-col items-start justify-center border-t pt-5"
				variants={valueVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={3}
			>
				<Minimize />
				<H4 className="text-secondary mt-3 mb-4">Massgeschneidert</H4>
				<P className="text-muted-foreground">
					Ob zurückhaltend oder engagiert – Sie bestimmen den Grad Ihrer Mitwirkung. Wir sorgen dafür, dass die Verwaltung genau zu Ihrer Eigentümerrolle passt.
				</P>
			</motion.div>
		</div>
	);
};

export default ValuesSection;
