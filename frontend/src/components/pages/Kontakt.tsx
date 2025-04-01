import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Check, SendHorizonal } from 'lucide-react';
import { H1, P } from '@/lib/typography';
import { Link } from 'react-router-dom';

export default function Kontakt() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);

			// Reset form after showing success message
			setTimeout(() => {
				setIsSubmitted(false);
				(event.target as HTMLFormElement).reset();
			}, 3000);
		}, 1500);
	}

	return (
		<div className="w-screen flex flex-row mx-auto  h-screen items-center justify-center ">
			<div className="w-1/2 px-26">
				<Link to="/">
					<Button className=" fixed top-6 left-6 cursor-pointer" variant={'outline'} size={'lg'}>
						Zurück
					</Button>
				</Link>
				<H1 className="text-4xl font-bold text-start mb-2">Kontakt</H1>
				<P className="text-muted-foreground mb-8">Haben Sie Fragen oder benötigen Sie Unterstützung? Kontaktieren Sie uns über das Formular oder die nebenstehenden Kontaktdaten.</P>

				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Contact Form */}
					<div>
						<div className="w-full">
							<form onSubmit={handleSubmit}>
								<div className="space-y-4">
									<div className="flex flex-row  gap-4">
										<div className="w-full space-y-2">
											<Label htmlFor="firstName">Vorname</Label>
											<Input id="firstName" required placeholder="Max" />
										</div>
										<div className="w-full space-y-2">
											<Label htmlFor="lastName">Nachname</Label>
											<Input id="lastName" required placeholder="Mustermann" />
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">E-Mail</Label>
										<Input id="email" type="email" required placeholder="ihre.email@example.com" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">Telefon (optional)</Label>
										<Input id="phone" type="tel" placeholder="+41 12 345 67 89" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="message">Nachricht</Label>
										<Textarea id="message" required placeholder="Wie können wir Ihnen helfen?" className="min-h-[120px]" />
									</div>
								</div>
								<div>
									<Button type="submit" className="w-full mt-6 bg-secondary hover:bg-secondary/70" size={'lg'} disabled={isSubmitting || isSubmitted}>
										{isSubmitting ? (
											<>
												Wird gesendet...
												<SendHorizonal className="mr-2 h-4 w-4" />
											</>
										) : isSubmitted ? (
											<>
												<Check className="mr-2 h-4 w-4" />
												Nachricht gesendet!
											</>
										) : (
											<>
												Nachricht senden
												<SendHorizonal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-10" />
											</>
										)}
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-full w-1/2">
				<img src="/assets/kontakt-1.webp" alt="" className="object-cover h-full w-full" />
				{/* <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-6 backdrop-blur-xs border bg-white/60 rounded-lg shadow-lg">
					<div className="space-y-3">
						<div className="flex items-center">
							<Mail className=" mr-3" size={'18px'} />
							<span>info@bewy.ch</span>
						</div>
						<div className="flex items-center">
							<Phone className=" mr-3" size={'18px'} />
							<span>+41 12 345 67 89</span>
						</div>
						<div className="flex items-center">
							<MapPin className=" mr-3" size={'18px'} />
							<span>Musterstrasse 123, 8000 Zürich</span>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
