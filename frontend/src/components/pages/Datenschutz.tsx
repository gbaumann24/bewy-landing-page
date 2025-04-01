import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Datenschutz: React.FC = () => {
	return (
		<>
			<Link to="/">
				<Button className=" fixed top-12 left-12 cursor-pointer" size={'lg'}>
					Zurück
				</Button>
			</Link>
			<div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
				<div className="space-y-8">
					<div className="text-center">
						<h1 className="text-3xl font-bold tracking-tight">Datenschutzerklärung</h1>
					</div>
					<Card className="p-6">
						<div className="space-y-6">
							<div className="space-y-2">
								<h2 className="text-xl font-semibold">1. Einleitung</h2>
								<p className="text-muted-foreground">
									Mit dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung von Personendaten im Zusammenhang mit unserer Website und unserem
									Angebot. Wir informieren Sie zudem über Ihre Rechte, wenn Sie von der Datenbearbeitung betroffen sind.
								</p>
								<p className="text-muted-foreground">
									Für einzelne oder zusätzliche Angebote können besondere, ergänzende oder weitere Datenschutzerklärungen bestehen.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">2. Verantwortlicher</h2>
								<p className="text-muted-foreground">Verantwortlich für die Datenbearbeitungen, die wir hier beschreiben, ist:</p>
								<p className="text-muted-foreground">
									[Firmenname]
									<br />
									[Adresse]
									<br />
									[PLZ/Ort]
									<br />
									[E-Mail]
									<br />
									[Telefon]
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">3. Erhebung und Bearbeitung von Personendaten</h2>
								<p className="text-muted-foreground">
									Wir bearbeiten in erster Linie die Personendaten, die wir im Rahmen unserer Geschäftsbeziehung mit unseren Kunden und anderen Geschäftspartnern
									von diesen und weiteren daran beteiligten Personen erhalten oder die wir beim Betrieb unserer Websites und weiteren Anwendungen von deren Nutzern
									erheben.
								</p>
								<p className="text-muted-foreground">
									Soweit dies erlaubt ist, entnehmen wir auch öffentlich zugänglichen Quellen (z.B. Handelsregister, Presse, Internet) gewisse Daten oder erhalten
									solche von Behörden und sonstigen Dritten.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">4. Zwecke und Rechtsgrundlagen</h2>
								<p className="text-muted-foreground">
									Wir verwenden die von uns erhobenen Personendaten in erster Linie, um unsere Verträge mit unseren Kunden und Geschäftspartnern abzuschliessen und
									zu erfüllen, also insbesondere im Rahmen der Bereitstellung unserer Produkte und Dienstleistungen und der Beschaffung von Produkten und
									Dienstleistungen von unseren Lieferanten und Subunternehmern, sowie um unseren gesetzlichen Pflichten im In- und Ausland nachzukommen.
								</p>
								<p className="text-muted-foreground">
									Wenn Sie für einen solchen Kunden oder Geschäftspartner tätig sind, können Sie in dieser Funktion mit Ihren Personendaten natürlich ebenfalls
									betroffen sein.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">5. Cookies / Tracking und andere Technologien</h2>
								<p className="text-muted-foreground">
									Wir setzen auf unseren Websites typischerweise "Cookies" und vergleichbare Techniken ein, mit denen Ihr Browser oder Ihr Gerät identifiziert
									werden kann. Ein Cookie ist eine kleine Datei, die an Ihren Computer gesendet bzw. vom verwendeten Webbrowser automatisch auf Ihrem Computer oder
									mobilen Gerät gespeichert wird, wenn Sie unsere Website besuchen.
								</p>
								<p className="text-muted-foreground">
									Sie können Ihren Browser so einstellen, dass er Sie vor dem Speichern von Cookies informiert, Cookies nur in bestimmten Fällen akzeptiert oder
									generell ablehnt sowie bereits gespeicherte Cookies löscht.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">6. Datenweitergabe und Datenübermittlung ins Ausland</h2>
								<p className="text-muted-foreground">
									Im Rahmen unserer geschäftlichen Aktivitäten und zu den Zwecken gemäss Ziff. 4, geben wir, soweit erlaubt und es uns als angezeigt erscheint, auch
									Dritten Personendaten bekannt, insbesondere an Anbieter, deren Leistungen wir in Anspruch nehmen (z.B. Hosting-Provider).
								</p>
								<p className="text-muted-foreground">
									Diese Empfänger sind teilweise im Inland, können aber irgendwo auf der Erde sein. Sie müssen insbesondere mit der Übermittlung Ihrer Daten in
									Länder ausserhalb der Schweiz und des Europäischen Wirtschaftsraums rechnen, in denen ein angemessener Datenschutz fehlen kann.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">7. Dauer der Aufbewahrung von Personendaten</h2>
								<p className="text-muted-foreground">
									Wir verarbeiten und speichern Ihre Personendaten, solange es für die Erfüllung unserer vertraglichen und gesetzlichen Pflichten oder sonst die mit
									der Bearbeitung verfolgten Zwecke erforderlich ist, d.h. also zum Beispiel für die Dauer der gesamten Geschäftsbeziehung sowie darüber hinaus
									gemäss den gesetzlichen Aufbewahrungs- und Dokumentationspflichten.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">8. Datensicherheit</h2>
								<p className="text-muted-foreground">
									Wir treffen angemessene technische und organisatorische Sicherheitsvorkehrungen zum Schutz Ihrer Personendaten vor unberechtigtem Zugriff und
									Missbrauch.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">9. Ihre Rechte</h2>
								<p className="text-muted-foreground">
									Im Rahmen des auf Sie anwendbaren Datenschutzgesetzes haben Sie das Recht auf Auskunft, Berichtigung, Löschung, das Recht auf Einschränkung der
									Datenbearbeitung und sonst dem Widerspruch gegen unsere Datenbearbeitungen sowie auf Herausgabe gewisser Personendaten zwecks Übertragung an eine
									andere Stelle (Datenportabilität).
								</p>
								<p className="text-muted-foreground">
									Bitte beachten Sie aber, dass wir uns vorbehalten, unsererseits die gesetzlich vorgesehenen Einschränkungen geltend zu machen, etwa wenn wir zur
									Aufbewahrung oder Bearbeitung gewisser Daten verpflichtet sind, daran ein überwiegendes Interesse haben oder sie für die Geltendmachung von
									Ansprüchen benötigen.
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<h2 className="text-xl font-semibold">10. Änderungen</h2>
								<p className="text-muted-foreground">
									Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte
									Fassung.
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

export default Datenschutz;
