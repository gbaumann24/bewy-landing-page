import React from 'react';
import { cn } from '@/lib/utils';

const DotBackground: React.FC = () => {
	return (
		<div className="absolute inset-0 opacity-70 -z-50">
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:20px_20px]',
					'[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]',
					'dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]'
				)}
			/>
			{/* Radial gradient for the container to give a faded look */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
		</div>
	);
};

export default DotBackground;
