import React from 'react';
import { H4, P } from '@/lib/typography';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PricingCardProps {
	title: string;
	description: string;
	price: string;
	vorOrt?: Array<string>;
	mieterkommunikation?: Array<string>;
	eigentuemerkommunikation?: Array<string>;
	portal: Array<string>;
	mieterHandwerkerWahl?: Array<string>;
	versammlung?: Array<string>;
	buttonText: string;
	onButtonClick: () => void;
	containerClassName?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
	title,
	description,
	price,
	vorOrt,
	mieterkommunikation,
	eigentuemerkommunikation,
	portal,
	mieterHandwerkerWahl,
	buttonText,
	versammlung,
	onButtonClick,
	containerClassName,
}) => {
	return (
		<div className={cn(containerClassName, 'flex flex-col items-center justify-center border rounded-xl p-8 w-1/3 xs:w-full')}>
			<div className="w-full h-full">
				<H4 className="text-secondary">{title}</H4>
				<P className="text-muted-foreground text-sm">{description}</P>
				<div className="flex flex-row items-end mt-4">
					<P className=" tracking-tight text-5xl font-bold">{price}</P>
					<div className="ml-1 mb-1">
						<P className="text-xs text-muted-foreground">pro Objekt</P>
						<P className="text-xs text-muted-foreground">pro Jahr</P>
					</div>
				</div>
				<hr className="my-4 border-t border-gray-300" />
				<div className="space-y-3">
					{vorOrt && (
						<div>
							<P className="text-sm font-medium">Pysisch vor Ort</P>
							<ul className="text-xs ml-2 space-y-1 mt-1">
								{vorOrt.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className="mr-1 text-muted-foreground" size={'14px'} />
										<span className="text-muted-foreground">{item}</span>
									</li>
								))}
							</ul>
						</div>
					)}
					{mieterkommunikation && (
						<div>
							<P className="text-sm font-medium">Mieterkommunikation</P>
							<ul className=" text-xs ml-2 space-y-1 mt-1">
								{mieterkommunikation?.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className="mr-1 text-muted-foreground" size={'14px'} />
										<span className="text-muted-foreground">{item}</span>
									</li>
								))}
							</ul>
						</div>
					)}
					{eigentuemerkommunikation && (
						<div>
							<P className="text-sm font-medium">Eigentümerkommunikation</P>
							<P className="text-muted-foreground ">
								<ul className=" text-xs ml-2 space-y-1 mt-1">
									{eigentuemerkommunikation?.map((item, index) => (
										<li key={index} className="flex items-center">
											<Check className=" mr-1 text-muted-foreground" size={'14px'} />
											<span className="text-muted-foreground">{item}</span>
										</li>
									))}
								</ul>
							</P>
						</div>
					)}
					<div>
						<P className="text-sm font-medium">Eigentümerportal</P>
						<P className="text-muted-foreground ">
							<ul className=" text-xs ml-2 space-y-1 mt-1">
								{portal.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className=" mr-1 text-muted-foreground" size={'14px'} />
										<span className="text-muted-foreground">{item}</span>
									</li>
								))}
							</ul>
						</P>
					</div>
					{versammlung && (
						<div>
							<P className="text-sm font-medium">Versammlung</P>
							<P className="text-muted-foreground ">
								<ul className=" text-xs ml-2 space-y-1 mt-1">
									{versammlung?.map((item, index) => (
										<li key={index} className="flex items-center">
											<Check className=" mr-1 text-muted-foreground" size={'14px'} />
											<span className="text-muted-foreground">{item}</span>
										</li>
									))}
								</ul>
							</P>
						</div>
					)}
					{mieterHandwerkerWahl && (
						<div>
							<P className="text-sm font-medium">Handwerker- & Mieterwahl</P>
							<P className="text-muted-foreground text-xs ml-2">
								{mieterHandwerkerWahl?.map((item, index) => (
									<li key={index} className="flex items-center">
										<Check className=" mr-1 text-muted-foreground" size={'14px'} />
										<span className="text-muted-foreground">{item}</span>
									</li>
								))}
							</P>
						</div>
					)}
				</div>
				<Button variant={'outline'} className={`w-full mt-6 `} size="lg" onClick={onButtonClick}>
					{buttonText}
				</Button>
			</div>
		</div>
	);
};

export default PricingCard;
