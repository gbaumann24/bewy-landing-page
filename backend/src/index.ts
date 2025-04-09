import express from 'express';
import { initDB } from './dblite';
import cors from 'cors';
import path from 'path';
import { sendContactEmail, sendTrackingEmail } from './mailer';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

let db: any;
initDB().then((database) => {
	db = database;
});

// const corsConfig = {
// 	origin: 'http://localhost:5173',
// 	methods: ['GET', 'POST'],œ
// 	allowedHeaders: ['Content-Type'],
// };

// app.use(cors(corsConfig));
app.post('/api/contact', async (req, res) => {
	const { firstname, lastname, phone, broschure, email, message } = req.body;
	const created_at = new Date().toISOString();

	try {
		await db.run(`INSERT INTO contacts (firstname, lastname, phone, broschure, email, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`, [
			firstname,
			lastname,
			phone,
			broschure,
			email,
			message,
			created_at,
		]);
		res.status(200).json({ success: true });
		await sendContactEmail(firstname, lastname, phone, broschure, email, message);
	} catch (err) {
		res.status(500).json({ error: 'Datenbankfehler', details: err });
	}
});

// Statische Dateien aus dem dist-Verzeichnis servieren
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

console.log(`Serving static files from: ${distPath}`); // Debugging: Überprüfen Sie den Pfadå

app.get(/(.*)/, (req, res, next) => {
	const filePath = path.resolve(distPath, 'index.html');
	console.log(`Serving file: ${filePath}`); // Debugging
	res.sendFile(filePath, (err) => {
		if (err) {
			console.error('Fehler beim Senden der Datei:', err); // Debugging
			res.status(500).send('Fehler beim Laden der Datei.');
		}
	});
});

const pixel = Buffer.from('474946383961010001008000000000ffffff21f90401000000002c00000000010001000002024c01003b', 'hex');

app.get('/track/:recipientId/:emailId', (req, res) => {
	// Extracting the recipient and email identifiers from the URL
	const { recipientId, emailId } = req.params;

	// Log request details. In production, consider saving these details to a database.
	console.log(`Opened email -> recipientId: ${recipientId}, emailId: ${emailId}, IP: ${req.ip}, User-Agent: ${req.get('User-Agent')}`);

	sendTrackingEmail(recipientId, emailId, req.get('User-Agent'), req.ip);

	// Set appropriate headers to indicate the file is a GIF and to prevent caching.
	res.set('Content-Type', 'image/gif');
	res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.set('Pragma', 'no-cache');
	res.set('Expires', '0');

	// Send the 1x1 pixel image as the response.
	res.send(pixel);
});

app.listen(PORT, '127.0.0.1', () => {
	console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
