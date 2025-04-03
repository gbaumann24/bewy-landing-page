import express from 'express';
import { initDB } from './dblite';
import cors from 'cors';
import path from 'path';
import { sendContactEmail } from './mailer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let db: any;
initDB().then((database) => {
	db = database;
});

// const corsConfig = {
// 	origin: 'http://localhost:5173',
// 	methods: ['GET', 'POST'],
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

app.listen(PORT, () => {
	console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
