import { Linkedin } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
	return (
		<footer className="container mx-auto flex items-center justify-center bg-white rounded-lg shadow-sm m-4">
			<div className="w-full p-8 bg-neutral-700 rounded-lg">
				<div className="flex flex-row items-end justify-between">
					<a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
						<img src="/assets/logo-invert.webp" className="h-18" alt="Your Logo" />
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 ">
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Datenschutzbestimmung
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline me-4 md:me-6">
								Impressum
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Kontakt
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="w-full flex flex-row items-center justify-between">
					<div>
						<span className="block text-sm text-gray-400 sm:text-left mb-4 sm:mb-0">
							© {new Date().getFullYear()}{' '}
							<a href="/" className="hover:underline">
								Bewy
							</a>
							. Alle Rechte vorbehalten.
						</span>
						<div className="flex items-center">
							<span className="text-sm text-gray-400 mr-4">Powered with ❤️</span>
						</div>
					</div>
					<Linkedin color="white" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
