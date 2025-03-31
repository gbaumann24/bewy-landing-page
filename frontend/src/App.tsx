import HeroSection from './components/sections/hero';
import ValuesSection from './components/sections/values';
import MessageSection from './components/sections/message';
import DashboardSection from './components/sections/dashboard';
import Navbar from './components/ui/navbar';
import FeatureSection from './components/sections/feature';
import OnboardingSection from './components/sections/onboarding';
import CTA from './components/sections/CTA';
import Footer from './components/sections/footer';
import Pricing from './components/sections/pricing';
import { useState, useEffect } from 'react';

const App: React.FC = () => {
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
		<>
			<Navbar setView={setView} activeView={activeView} />

			<section className="home flex w-full h-fit items-center justify-center">
				<HeroSection />
			</section>
			<section className=" flex w-full h-fit items-center justify-center">
				<ValuesSection />
			</section>
			<section>
				<MessageSection />
			</section>
			<section className="portal relative">
				<DashboardSection />
				<FeatureSection />
			</section>
			<section className="relative overflow-clip bg-secondary">
				<CTA />
				<img src="assets/pattern-2.webp" alt="" className="absolute -right-40 scale-200 h-full opacity-70 top-30 overflow-visible " />
			</section>
			<section className="onboarding">
				<OnboardingSection />
			</section>
			<section className="pricing">
				<Pricing />
			</section>
			<section>
				<Footer />
			</section>
		</>
	);
};

export default App;
