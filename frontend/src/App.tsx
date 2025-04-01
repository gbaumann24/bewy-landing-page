import Home from './components/pages/Home';
import Datenschutz from './components/pages/Datenschutz';
import Impressum from './components/pages/Impressum';
import Kontakt from './components/pages/Kontakt';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="datenschutz" element={<Datenschutz />} />
			<Route path="impressum" element={<Impressum />} />
			<Route path="kontakt" element={<Kontakt />} />
		</Routes>
	);
};

export default App;
