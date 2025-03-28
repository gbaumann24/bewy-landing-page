'use client';
import React from 'react';
import { HoverBorderGradient } from './hover-border-gradient';

export function HoverBorderGradientDemo() {
	return (
		<div className="m-40 flex justify-center text-center">
			<HoverBorderGradient containerClassName="rounded-full" as="button" className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
				<img src="/assets/logo.webp" alt="" className="w-4" />
				<span>Kontakt aufnehmen</span>
			</HoverBorderGradient>
		</div>
	);
}
