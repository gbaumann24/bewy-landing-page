import { Linkedin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
	return (
		<footer className="container mx-auto flex items-center justify-center bg-white rounded-lg shadow-sm m-4">
			<div className="w-full p-8 bg-neutral-700 rounded-lg">
				<div className="flex flex-row items-end justify-between xs:flex-col xs:items-start">
					<a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse xs:mb-6">
						<img src="/assets/logo-invert.webp" className="h-18" alt="Your Logo" />
					</a>
					<ul className="flex flex-wrap items-center text-sm text-white xs:flex-col xs:items-start xs:gap-2">
						<li>
							<Link to="/datenschutz" className="hover:text-secondary me-4 md:me-6">
								Datenschutzbestimmung
							</Link>
						</li>
						<li>
							<Link to="/impressum" className="hover:text-secondary me-4 md:me-6">
								Impressum
							</Link>
						</li>
						<li>
							<Link to="/kontakt" className="hover:text-secondary ">
								Kontakt
							</Link>
						</li>
					</ul>
				</div>
				<hr className="border-gray-200 my-8" />
				<div className="w-full flex flex-row items-center justify-between xs:flex-col xs:items-start xs:gap-4">
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
