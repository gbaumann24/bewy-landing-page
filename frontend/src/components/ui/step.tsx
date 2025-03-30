import React from 'react';
import { H3, P } from '@/lib/typography';

interface StepProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export function Step({ icon, title, description }: StepProps) {
	return (
		<div className="flex items-start gap-4 px-4 py-0 rounded-xl group">
			<div className="flex flex-col items-center">
				<div className="flex items-center bg-secondary/10 justify-center w-10 h-10 aspect-square rounded-full border text-secondary border-secondary font-bold group-hover:bg-secondary group-hover:text-background transition-colors duration-200">
					{icon}
				</div>
				<div className="w-0.5 h-18 bg-secondary/20 my-1 group-last:hidden"></div>
			</div>
			<div className="pb-6">
				<H3 className="font-semibold text-xl mb-1">{title}</H3>
				<P className="text-muted-foreground text-sm">{description}</P>
			</div>
		</div>
	);
}
