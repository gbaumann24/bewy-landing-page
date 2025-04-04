import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { P } from '@/lib/typography';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return <AccordionPrimitive.Item data-slot="accordion-item" className={cn('border-b last:border-b-0 py-1', className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					'cursor-pointer focus-visible:border-ring text-lg [&[data-state=open]]:text-secondary focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-2 rounded-md py-4 text-left  font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
					className
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon className="text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> & {
	progress: number;
};

function AccordionContent({ progress, className, children, ...props }: AccordionContentProps) {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm flex "
			{...props}
		>
			{/* Progress Bar */}
			<div className="flex flex-col items-center justify-center pt-2 pb-5 ">
				<div className="h-full w-1 bg-gray-200 rounded-full mr-4">
					<div className="bg-secondary w-full rounded-full transition-all duration-100 ease-linear" style={{ height: `${progress}%` }} />
				</div>
			</div>
			<P className={cn('pt-0 pb-4 text-muted-foreground', className)}>{children}</P>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
