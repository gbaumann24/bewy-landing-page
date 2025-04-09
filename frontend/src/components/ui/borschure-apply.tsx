import { ButtonText } from '@/lib/typography';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export function BroschureApply() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [sucess, setSuccess] = useState<string | undefined>(undefined);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!email.trim()) {
			setError('Bitte geben Sie eine E-Mail-Adresse ein.');
			return;
		}

		if (!validateEmail(email)) {
			setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
			return;
		}

		setError('');
		setIsSubmitting(true);

		try {
			const res = await fetch('https://bewy.ch/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					broschure: true,
				}),
			});

			const data = await res.json();
			if (data.result === 'Success') {
				alert('Nachricht erfolgreich gesendet!');
			}
		} catch (error) {
			alert('Fehler beim Senden');
			console.error(error);
		}

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setEmail('');
			setSuccess('Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.');
		}, 1000);
		setTimeout(() => {
			setSuccess(undefined);
		}, 5000);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="flex w-6/7 mt-4 rounded-xl shadow-lg  xs:hidden focus-within:shadow-secondary/40">
				<input
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						if (error) setError('');
					}}
					placeholder="ihre.email@beispiel.ch"
					className={`flex-grow px-6 py-3 text-muted-foreground bg-white placeholder-gray-300 border rounded-l-xl focus:outline-none ${
						error ? 'border-red-500' : 'border-secondary focus-visible:shadow-secondary/20'
					}`}
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className={`cursor-pointer flex bg-secondary border border-secondary hover:bg-secondary/90 hover:border-secondary/90 items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-r-xl ${
						isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
					}`}
				>
					<ButtonText>{isSubmitting ? 'Wird gesendet...' : 'Broschüre anfordern'}</ButtonText>
				</button>
			</form>
			{error && <p className="text-red-500 text-sm mt-1 xs:hidden">{error}</p>}
			{sucess && <p className="text-secondary text-sm mt-1 xs:hidden">{sucess}</p>}

			<form onSubmit={handleSubmit} className="hidden xs:flex flex-col gap-3 focus-within:shadow-secondary/20">
				{/* <input
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						if (error) setError('');
					}}
					placeholder="ihre.email@beispiel.ch"
					className={`flex-grow px-6 py-3 text-muted-foreground shadow-sm bg-white placeholder-gray-300 focus-visible:shadow-secondary/20 border rounded-xl focus:outline-none ${
						error ? 'border-red-500' : 'border-secondary focus-visible:border-secondary'
					}`}
				/>
				{error && <p className="text-red-500 text-sm -mt-2">{error}</p>}
				{sucess && <p className="text-secondary text-sm -mt-2">{sucess}</p>} */}
				<button
					type="submit"
					disabled={isSubmitting}
					className={`w-full shadow-sm bg-secondary border border-secondary items-center justify-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-xl flex ${
						isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
					}`}
				>
					<Link to={'/kontakt'}>
						<ButtonText className="text-md">Kontaktieren Sie uns</ButtonText>
					</Link>
				</button>
			</form>
		</>
	);
}
