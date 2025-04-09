'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }: { words: string; className?: string; filter?: boolean; duration?: number }) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(' ');
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					animate(
						'span',
						{
							opacity: 1,
							filter: filter ? 'blur(0px)' : 'none',
						},
						{
							duration: duration ? duration : 1,
							delay: stagger(0.25),
						}
					);
					observer.disconnect();
				}
			},
			{ threshold: 0.4 } // Text is 70% visible before animation starts
		);

		if (scope.current) {
			observer.observe(scope.current);
		}

		return () => {
			if (scope.current) observer.disconnect();
		};
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="dark:text-white text-black opacity-0 tracking-normal"
							style={{
								filter: filter ? 'blur(10px)' : 'none',
							}}
						>
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn('font-bold', className)}>
			<div className="mt-4">
				<div className=" dark:text-white text-black  leading-24  xs:leading-18">{renderWords()}</div>
			</div>
		</div>
	);
};
