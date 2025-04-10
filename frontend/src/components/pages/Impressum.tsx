import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Impressum: React.FC = () => {
	return (
		<>
			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet>
			<Link to="/">
				<Button className=" fixed top-12 left-12 cursor-pointer" size={'lg'}>
					Zurück
				</Button>
			</Link>
			<div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
				<div className="space-y-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight">Impressum</h1>
					</div>

					<Card className="p-6">
						<div className="space-y-6">
							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Angaben gemäss Schweizer Recht</h2>
								<p className="text-muted-foreground">
									Bewy AG
									<br />
									Giesshübelstrasse 88
									<br />
									CH-8045 Zürich
									<br />
									Schweiz
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Kontakt</h2>
								<p className="text-muted-foreground">
									Telefon: +41 76 545 24 09
									<br />
									E-Mail: info@bewy.ch
									<br />
									Website: www.bewy.ch
								</p>
							</div>

							{/* <Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Handelsregistereintrag</h2>
								<p className="text-muted-foreground">
									Eingetragen im Handelsregister des Kantons Zürich
									<br />
									Firmennummer: CHE-123.456.789
								</p>
							</div> */}

							{/* <Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Mehrwertsteuer</h2>
								<p className="text-muted-foreground">MWST-Nummer: CHE-123.456.789 MWST</p>
							</div> */}

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Vertretungsberechtigte Person</h2>
								<p className="text-muted-foreground">Luca Serratore, Geschäftsführer</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Rechtsform & Status</h2>
								<p className="text-muted-foreground">
									Bewy ist derzeit in Gründung. Ein Eintrag im Handelsregister sowie eine MWST-Nummer bestehen aktuell noch nicht.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Haftungsausschluss</h2>
								<p className="text-muted-foreground">
									Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit,
									Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
								</p>
								<p className="text-muted-foreground">
									Diese Website enthält Verweise auf Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der
									Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstösse bestehen. Zu
									dem Zeitpunkt waren keine Rechtsverstösse ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die
									Inhalte der verknüpften Seiten.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">Urheberrecht</h2>
								<p className="text-muted-foreground">
									Die auf dieser Website veröffentlichten Inhalte unterliegen dem schweizerischen Urheber- und Leistungsschutzrecht. Jede vom schweizerischen
									Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
									Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten
									in Datenbanken oder anderen elektronischen Medien und Systemen.
								</p>
							</div>
						</div>
					</Card>

					<div className="text-right text-sm text-muted-foreground">Stand: {new Date().toLocaleDateString('de-CH')}</div>
				</div>
			</div>
		</>
	);
};

export default Impressum;
