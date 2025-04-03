import { ButtonText } from '@/lib/typography';
import { FormEvent, useState } from 'react';

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
			const res = await fetch('http://localhost:3000/api/contact', {
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
			<form onSubmit={handleSubmit} className="flex w-full mt-4 rounded-xl shadow-lg  xs:hidden focus-within:border-secondary">
				<input
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						if (error) setError('');
					}}
					placeholder="max@muster.ch"
					className={`flex-grow px-6 py-3 text-muted-foreground bg-white placeholder-gray-300 border rounded-l-xl focus:outline-none ${
						error ? 'border-red-500' : 'border-secondary/40 focus-visible:border-secondary'
					}`}
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className={`cursor-pointer flex bg-secondary border border-secondary items-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-r-xl ${
						isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
					}`}
				>
					<ButtonText>{isSubmitting ? 'Wird gesendet...' : 'Brochüre anfordern'}</ButtonText>
				</button>
			</form>
			{error && <p className="text-red-500 text-sm mt-1 xs:hidden">{error}</p>}
			{sucess && <p className="text-secondary text-sm mt-1 xs:hidden">{sucess}</p>}

			<form onSubmit={handleSubmit} className="hidden xs:flex flex-col gap-3">
				<input
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						if (error) setError('');
					}}
					placeholder="hans@beispiel.com"
					className={`flex-grow px-6 py-3 text-muted-foreground bg-white placeholder-gray-300 border rounded-xl focus:outline-none ${
						error ? 'border-red-500' : 'border-secondary/40 focus-visible:border-secondary'
					}`}
				/>
				{error && <p className="text-red-500 text-sm -mt-2">{error}</p>}
				{sucess && <p className="text-secondary text-sm -mt-2">{sucess}</p>}
				<button
					type="submit"
					disabled={isSubmitting}
					className={`w-full bg-secondary border border-secondary items-center justify-center gap-2 px-6 py-3 text-white whitespace-nowrap rounded-xl flex ${
						isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
					}`}
				>
					<ButtonText className="text-md">{isSubmitting ? 'Wird gesendet...' : 'Brochüre anfordern'}</ButtonText>
				</button>
			</form>
		</>
	);
}
