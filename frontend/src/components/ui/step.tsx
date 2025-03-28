import React from 'react';
import { H3, P } from '@/lib/typography';

interface StepProps {
	number: number;
	title: string;
	description: string;
}

export function Step({ number, title, description }: StepProps) {
	return (
		<div className="flex items-start gap-4 p-4 rounded-xl group">
			<div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full border text-secondary border-secondary font-bold group-hover:bg-secondary group-hover:text-background transition-colors duration-200">
				{number}
			</div>
			<div>
				<H3 className="font-semibold text-xl mb-1">{title}</H3>
				<P className="text-muted-foreground text-sm">{description}</P>
			</div>
		</div>
	);
}
