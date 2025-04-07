import React from 'react';
import { H4, P } from '@/lib/typography';
import { Button } from '@/components/ui/button';
import { Check, UserRoundCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface PricingCardProps {
	title: string;
	description: string;
	price: string;
	vorOrt?: Array<string>;
	mieterkommunikation?: Array<string>;
	portal: Array<string>;
	mieterHandwerkerWahl?: Array<string>;
	versammlung?: Array<string>;
	buttonText: string;
	specialButton?: boolean;
	containerClassName?: string;
	kompetenzsumme?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
	title,
	description,
	price,
	vorOrt,
	mieterkommunikation,
	portal,
	mieterHandwerkerWahl,
	buttonText,
	versammlung,
	specialButton,
	kompetenzsumme,
	containerClassName,
}) => {
	return (
		<div className={cn(containerClassName, 'flex flex-col items-center  justify-center border rounded-xl p-8 w-full xs:w-full')}>
			<div className="w-full h-full">
				<H4 className="text-secondary">{title}</H4>
				<P className="text-muted-foreground text-sm">{description}</P>
				<div className="flex flex-row items-end mt-4">
					<P className="tracking-tight text-5xl font-bold">
						<span className="mr-2">CHF</span>
					</P>
					<P className="tracking-tight text-5xl font-bold">
						<motion.div
							key={price}
							initial={{ y: 5, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -5, opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							className={`${versammlung && 'w-15'}`}
						>
							{price}
						</motion.div>
					</P>

					<div className="ml-2 mb-1">
						<P className="text-xs text-muted-foreground">pro Objekt</P>
						<P className="text-xs text-muted-foreground">pro Monat</P>
					</div>
				</div>
				{kompetenzsumme && (
					<Badge className="mt-4 bg-muted-foreground">
						<UserRoundCheck />
						Kompetenzsumme*: {kompetenzsumme}
					</Badge>
				)}
				<hr className="my-6 border-t border-gray-300" />
				{/* <P className="text text-muted-foreground font-medium mb-1">Leistungen</P> */}

				<div className="space-y-3">
					<div>
						<P className="text-xs text-muted-foreground font-medium">Allgemein</P>
						<ul className="text-xs ml-2 space-y-1 mt-1">
							<li className="flex items-start ">
								<Check className="mr-1 mt-0.5" size={'16px'} color={'#E47839'}/>
								<span className="text-sm">Alle essentiellen Bewirtschaftungs-Standardleistungen</span>
							</li>
						</ul>
					</div>
					{vorOrt && (
						<div>
							<P className="text-xs text-muted-foreground font-medium">Persönliche Betreuung</P>
							<ul className="text-xs ml-2 space-y-1 mt-1">
								{vorOrt.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className="mr-1 " size={'16px'} color={'#E47839'}/>
										<span className="text-sm">{item}</span>
									</li>
								))}
							</ul>
						</div>
					)}
					{mieterkommunikation && (
						<div>
							<P className="text-xs text-muted-foreground font-medium">Mieterkommunikation</P>
							<ul className=" text-xs ml-2 space-y-1 mt-1">
								{mieterkommunikation?.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className="mr-1 " size={'16px'} color={'#E47839'}/>
										<span className="text-sm">{item}</span>
									</li>
								))}
							</ul>
						</div>
					)}
					<div>
						<P className="text-xs text-muted-foreground font-medium">Eigentümerportal</P>
						<ul className=" text-xs ml-2 space-y-1 mt-1">
							{portal.map((item, index) => (
								<li key={index} className="flex items-center">
									<Check className=" mr-1 " size={'16px'} color={'#E47839'}/>
									<span className="text-sm">{item}</span>
								</li>
							))}
						</ul>
					</div>
					{versammlung && (
						<div>
							<P className="text-xs text-muted-foreground font-medium">Versammlung</P>
							<ul className=" text-xs ml-2 space-y-1 mt-1">
								{versammlung?.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className=" mr-1 " size={'16px'} color={'#E47839'}/>
										<span className="text-sm">{item}</span>
									</li>
								))}
							</ul>
						</div>
					)}
					{mieterHandwerkerWahl && (
						<div>
							<P className="text-xs text-muted-foreground font-medium">Handwerker- & Mieterwahl</P>
							<ul className=" text-xs ml-2 space-y-1 mt-1">
								{mieterHandwerkerWahl?.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className=" mr-1 " size={'16px'} color={'#E47839'}/>
										<span className="text-sm">{item}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<hr className="my-6 border-gray-300" />

				<Link to={'/kontakt'} className="cursor-pointer">
					<Button variant={specialButton ? 'default' : 'outline'} className={`w-full cursor-pointer ${specialButton && 'bg-secondary hover:bg-secondary/90'}`} size="lg">
						{buttonText}
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default PricingCard;
