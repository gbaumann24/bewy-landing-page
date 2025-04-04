import { cn } from '@/lib/utils';

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h1 className={cn('scroll-m-20 font-bold leading-tight tracking-tight text-5xl lg:text-xl xs:text-[43px]', className)}>{children}</h1>;
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h2 className={cn('scroll-m-20  font-semibold leading-13 tracking-normal text-4xl md:text-5xl', className)}>{children}</h2>;
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-normal', className)}>{children}</h3>;
}

export function H4({ children, className }: { children: React.ReactNode; className?: string }) {
	return <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-normal', className)}>{children}</h4>;
}

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
	return <p className={cn('leading-6', className)}>{children}</p>;
}

export function ButtonText({ children, className }: { children: React.ReactNode; className?: string }) {
	return <span className={cn('text-sm font-medium', className)}>{children}</span>;
}
