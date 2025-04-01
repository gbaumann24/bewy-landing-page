import React from 'react';
import { cn } from '@/lib/utils';

type GridProps = {
	bgColor?: string;
};

const GridBackground: React.FC<GridProps> = ({bgColor = 'white'}) => {
	return (
		<div className="absolute inset-0 opacity-50">
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:40px_40px]',
					'[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
					'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
				)}
			/>
			<div className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-${bgColor} [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black`}></div>
		</div>
	);
};

export default GridBackground;
