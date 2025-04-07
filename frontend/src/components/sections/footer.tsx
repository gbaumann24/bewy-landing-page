import { H4, P } from '@/lib/typography';
import { Pin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
	return (
		<footer className="container mx-auto flex items-center justify-center bg-white rounded-lg  mb-4">
			<div className="w-full p-12 xs:px-8 xs:py-12 bg-neutral-700 rounded-lg">
				<div className="flex flex-row items-center justify-between xs:flex-col xs:items-start">
					<div>
						<a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse xs:mb-6">
							<img src="/assets/logo-invert.webp" className="h-18" alt="Your Logo" />
						</a>
						{/* <Linkedin color="white" /> */}
						<P className="text-xs text-accent xs:mb-6">Die neue Generation der Immobilien Bewirtschaftung.</P>
					</div>
					<div className="flex flex-col  items-start gap-3 text-sm xs:items-start xs:gap-2">
						<H4 className="text-white">Standorte</H4>

						<div className="text-muted flex flex-row xs:flex-col items-center xs:items-start gap-13 xs:gap-4">
							<div className="flex flex-row items-center gap-2">
								<Pin size={15} color="#E47839" fill="#E47839" className="self-start mt-1" />
								<div className="text-xs leading-5">
									<div className="font-semibold text-secondary"> Bewy AG</div>
									Giesshübelstrasse 88 <br />
									8045 Zürich
									<br /> Schweiz
									<br />{' '}
									<a className="hover:text-secondary" href="mailto:info@bewy.ch">
										info@bewy.ch
									</a>
								</div>
							</div>
							<div className="flex flex-row items-center gap-2">
								<Pin size={15} color="#E47839" fill="#E47839" className="self-start mt-1" />
								<div className="text-xs leading-5">
									{' '}
									<div className="font-semibold text-secondary"> Bewy AG</div>
									Rüeggiswilrain 11 <br />
									6045 Meggen
									<br /> Schweiz
									<br />{' '}
									<a className="hover:text-secondary" href="mailto:info@bewy.ch">
										info@bewy.ch
									</a>
								</div>
							</div>
							<div className="flex flex-row items-center gap-2">
								<Pin size={15} color="#E47839" fill="#E47839" className="self-start mt-1" />
								<div className="text-xs leading-5">
									{' '}
									<div className="font-semibold text-secondary"> Bewy AG</div>
									Rüeggiswilrain 11 <br />
									6045 Meggen
									<br /> Schweiz
									<br />{' '}
									<a className="hover:text-secondary" href="mailto:info@bewy.ch">
										info@bewy.ch
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr className="border-gray-200 my-8" />
				<div className="w-full flex flex-row items-center justify-between xs:flex-col xs:items-start xs:gap-4">
					<div>
						<span className="block text-sm text-gray-400 sm:text-left sm:mb-0">
							© {new Date().getFullYear()}{' '}
							<a href="/" className="hover:underline">
								Bewy
							</a>
							. Alle Rechte vorbehalten.
						</span>
						{/* <div className="flex items-center">
							<span className="text-sm text-gray-400 mr-4">Powered with ❤️</span>
						</div> */}
					</div>
					<ul className="flex flex-row items-start gap-3 text-sm text-white xs:flex-col xs:items-start xs:gap-2">
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
					{/* <Linkedin color="white" /> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
