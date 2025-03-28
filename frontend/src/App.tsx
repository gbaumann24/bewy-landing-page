import HeroSection from './components/sections/hero';
import ValuesSection from './components/sections/values';
import MessageSection from './components/sections/message';
import DashboardSection from './components/sections/dashboard';
import Navbar from './components/ui/navbar';
import FeatureSection from './components/sections/feature';
import OnboardingSection from './components/sections/onboarding';
import CTA from './components/sections/CTA';
import Footer from './components/sections/footer';

const App: React.FC = () => {
	return (
		<>
			<Navbar />

			<section className="flex w-full h-fit items-center justify-center">
				<HeroSection />
			</section>
			<section className="flex w-full h-fit items-center justify-center">
				<ValuesSection />
			</section>
			<section>
				<MessageSection />
			</section>
			<section>
				<DashboardSection />
			</section>
			<section>
				<FeatureSection />
			</section>
			<section className="bg-secondary">
				<CTA />
			</section>
			<section>
				<OnboardingSection />
			</section>
			<section>
				<Footer />
			</section>
		</>
	);
};

export default App;
