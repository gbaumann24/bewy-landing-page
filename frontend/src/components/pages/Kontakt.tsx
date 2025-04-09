import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Check, Mail, SendHorizonal } from 'lucide-react';
import { H1, P } from '@/lib/typography';
import { Link } from 'react-router-dom';
import { Checkbox } from '../ui/checkbox';
import { Helmet } from 'react-helmet';

export default function Kontakt() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [inputData, setInputData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		message: '',
		broschure: false,
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { id, value } = e.target;
		setInputData((prev) => ({ ...prev, [id]: value }));
	}

	function handleCheckboxChange(checked: boolean) {
		setInputData((prev) => ({ ...prev, broschure: checked }));
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		try {
			const res = await fetch('https://bewy.ch/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(inputData),
			});

			const data = await res.json();
			console.log(data);
			if (data.success === true) {
				console.log('Nachricht erfolgreich gesendet!');
				setTimeout(() => {}, 10000);
				setIsSubmitted(true);
			}
		} catch (error) {
			alert('Fehler beim Senden');
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			<Helmet>
				<title>Kontakt - Bewy Immobilienbewirtschaftung | Individuelle Beratung</title>
				<meta
					name="description"
					content="Kontaktieren Sie Bewy für individuelle Beratung zu Immobilienbewirtschaftung für Stockwerkeigentum und Mietliegenschaften. Erhalten Sie unverbindlich eine kostenlose Broschüre."
				/>
				<link rel="canonical" href="https://www.bewy.ch/kontakt" />

				{/* Keywords */}
				<meta name="keywords" content="Kontakt, Immobilienbewirtschaftung, Beratung, Stockwerkeigentum, kostenlose Broschüre" />
			</Helmet>

			<main className="w-screen flex flex-row xs:flex-col mx-auto h-screen xs:py-12 xs:h-fit items-center justify-center" itemScope itemType="https://schema.org/ContactPage">
				<section className="w-1/2 xs:w-full px-26 xs:px-3 max-w-3xl" aria-labelledby="kontakt-heading">
					<Link to="/">
						<Button className="fixed xs:static top-6 left-6 xs:mb-6 cursor-pointer" variant={'outline'} size={'lg'}>
							<span aria-hidden="true">←</span> Zurück zur Startseite
						</Button>
					</Link>
					<H1 className="text-4xl font-bold text-start mb-2">Kontakt</H1>
					<P className="text-muted-foreground mb-8">
						Haben Sie Fragen oder benötigen Sie Unterstützung? Kontaktieren Sie uns über das Formular oder die untenstehende E-Mail Adresse.
					</P>

					<div className="grid gap-8 mx-auto">
						{/* Contact Form */}
						<div className="w-full">
							<form onSubmit={handleSubmit} aria-label="Kontaktformular" itemProp="mainEntity" itemScope itemType="https://schema.org/ContactPoint">
								<div className="space-y-4">
									<div className="flex flex-row gap-4">
										<div className="w-full space-y-2">
											<Label htmlFor="firstname">Vorname</Label>
											<Input id="firstname" value={inputData.firstname} onChange={handleChange} required placeholder="Max" aria-required="true" />
										</div>
										<div className="w-full space-y-2">
											<Label htmlFor="lastname">Nachname</Label>
											<Input id="lastname" value={inputData.lastname} onChange={handleChange} required placeholder="Mustermann" aria-required="true" />
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">E-Mail</Label>
										<Input
											id="email"
											type="email"
											value={inputData.email}
											onChange={handleChange}
											required
											placeholder="ihre.email@beispiel.ch"
											aria-required="true"
											itemProp="email"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">Telefon (optional)</Label>
										<Input id="phone" type="tel" value={inputData.phone} onChange={handleChange} placeholder="xxx xxx xx xx" itemProp="telephone" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="message">Nachricht</Label>
										<Textarea
											id="message"
											value={inputData.message}
											onChange={handleChange}
											required
											placeholder="Wie können wir Ihnen helfen?"
											className="min-h-[120px]"
											aria-required="true"
										/>
									</div>
									<div className="flex flex-row items-center gap-2">
										<Checkbox id="broschure" checked={inputData.broschure} onCheckedChange={handleCheckboxChange} aria-label="Kostenlose Broschüre anfordern" />
										<Label htmlFor="broschure" className="cursor-pointer">
											Kostenlose Broschüre erhalten
										</Label>
									</div>
								</div>
								<div>
									<Button
										type="submit"
										className="w-full py-6 mt-6 bg-secondary hover:bg-secondary/70"
										size={'lg'}
										disabled={isSubmitting || isSubmitted}
										aria-busy={isSubmitting}
									>
										{isSubmitting ? (
											<>
												Wird gesendet...
												<SendHorizonal className="ml-2 h-4 w-4" aria-hidden="true" />
											</>
										) : isSubmitted ? (
											<>
												<Check className="mr-2 h-4 w-4" aria-hidden="true" />
												Nachricht gesendet!
											</>
										) : (
											<>
												Nachricht senden
												<SendHorizonal className="ml-2 h-4 w-4" aria-hidden="true" />
											</>
										)}
									</Button>
									<div className="flex flex-row items-center gap-1 justify-center w-full mt-2 text-muted-foreground text-sm underline">
										<Mail size={16} aria-hidden="true" />
										<a href="mailto:info@bewy.ch" itemProp="contactOption">
											{' '}
											info@bewy.ch
										</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
				<aside className="relative h-full w-1/2 p-8 xs:hidden">
					<img
						src="/assets/kontakt-1.webp"
						alt="Bürogebäude von Bewy Immobilienbewirtschaftung"
						className="rounded-2xl object-cover h-full w-full"
						loading="eager"
						itemProp="image"
					/>
				</aside>
			</main>
		</>
	);
}
