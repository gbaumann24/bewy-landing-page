import React from 'react';

export const Footer: React.FC = () => {
	return (
		<footer className="container mx-auto flex items-center justify-center bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
			<div className="w-full p-8 bg-primary rounded-lg">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
						<img src="/logo-invert.webp" className="h-8" alt="Your Logo" />
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								About
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© {new Date().getFullYear()}{' '}
					<a href="/" className="hover:underline">
						Your Brand
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
