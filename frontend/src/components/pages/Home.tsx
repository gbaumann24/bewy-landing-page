import HeroSection from '@/components/sections/hero';
import ValuesSection from '@/components/sections/values';
import MessageSection from '@/components/sections/message';
import DashboardSection from '@/components/sections/dashboard';
import Navbar from '@/components/ui/navbar';
import FeatureSection from '@/components/sections/feature';
import OnboardingSection from '@/components/sections/onboarding';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/footer';
import Pricing from '@/components/sections/pricing';
import { useState, useEffect } from 'react';
import FeatureMobileSection from '@/components/sections/feature-mobile';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
	const [view, setView] = useState('home');
	const [activeView, setActiveView] = useState('home');

	useEffect(() => {
		console.log('view', view);
		const section = document.querySelector(`.${view}`);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}, [view]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section');
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			sections.forEach((section) => {
				const top = section.offsetTop;
				const height = section.offsetHeight;

				if (scrollPosition >= top && scrollPosition < top + height) {
					const sectionClass = section.className.split(' ')[0];
					if (activeView !== sectionClass) {
						setActiveView(sectionClass);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [activeView]);

	return (
		<div className="xs:overflow-x-clip">
			<Helmet>
				<title>Bewy - Professionelle Immobilienbewirtschaftung für Stockwerkeigentum</title>
				<meta
					name="description"
					content="Bewy bietet moderne Lösungen für die Verwaltung von Mietliegenschaften und Stockwerkeigentum mit digitaler Transparenz und individuellem Service."
				/>
				<link rel="canonical" href="https://www.bewy.ch" />

				{/* Keywords */}
				<meta name="keywords" content="Immobilienbewirtschaftung, Stockwerkeigentum, Mietliegenschaften, digitale Immobilienverwaltung, Eigentümerportal" />

				{/* Language */}
				<meta property="og:locale" content="de_CH" />
				<html lang="de" />
			</Helmet>

			<header>
				<Navbar setView={setView} activeView={activeView} />
			</header>

			<main id="main-content">
				<section className="home flex w-full h-fit items-center justify-center" aria-labelledby="hero-heading">
					<HeroSection />
				</section>

				<section className="values flex w-full h-fit items-center justify-center" aria-labelledby="values-heading">
					<ValuesSection />
				</section>

				<section className="message" aria-labelledby="message-heading">
					<MessageSection />
				</section>

				<section className="portal relative overflow-x-clip" aria-labelledby="portal-heading">
					<DashboardSection />
					<div className="lg:block hidden">
						<FeatureMobileSection />
					</div>
					<div className="block lg:hidden">
						<FeatureSection />
					</div>
				</section>

				<section className="cta overflow-clip" aria-labelledby="cta-heading">
					<CTA />
				</section>

				<section className="onboarding" aria-labelledby="onboarding-heading">
					<OnboardingSection />
				</section>

				<section className="pricing" aria-labelledby="pricing-heading">
					<Pricing />
				</section>
			</main>

			<footer>
				<Footer />
			</footer>

			{/* Schema.org structured data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Bewy Immobilienbewirtschaftung AG',
						url: 'https://www.bewy.ch',
						mainEntity: {
							'@type': 'Organization',
							name: 'Bewy Immobilienbewirtschaftung',
							email: 'info@bewy.ch',
							contactPoint: {
								'@type': 'ContactPoint',
								contactType: 'customer service',
								email: 'info@bewy.ch',
								availableLanguage: ['German'],
							},
							sameAs: ['https://www.linkedin.com/company/bewy', 'https://www.facebook.com/bewyimmobilien'],
						},
						logo: 'https://www.bewy.ch/assets/logo-full.webp',
						description: 'Professionelle Immobilienbewirtschaftung für Mietliegenschaften & Stockwerkeigentum mit digitaler Transparenz und individueller Betreuung.',
						address: {
							'@type': 'PostalAddress',
							addressCountry: 'CH',
							addressLocality: 'Schweiz',
						},
						sameAs: ['https://www.linkedin.com/company/bewy', 'https://www.facebook.com/bewyimmobilien'],
						offers: {
							'@type': 'Offer',
							name: 'Immobilienbewirtschaftung',
							description: 'Moderne Immobilienbewirtschaftung von Stockwerkeigentum und Mietliegenschaften',
						},
					}),
				}}
			/>
		</div>
	);
};

export default Home;
