const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;
const DB   = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());

// ── Helpers ──
function readDB() {
  if (!fs.existsSync(DB)) return { pets: [], bookings: [] };
  return JSON.parse(fs.readFileSync(DB, 'utf8'));
}
function writeDB(data) { fs.writeFileSync(DB, JSON.stringify(data, null, 2)); }
function genId() { return '_' + Math.random().toString(36).slice(2, 9); }

// ── Pets ──
app.get('/api/pets', (req, res) => {
  res.json(readDB().pets);
});

app.post('/api/pets', (req, res) => {
  const db  = readDB();
  const pet = { id: genId(), ...req.body, createdAt: new Date().toISOString() };
  db.pets.push(pet);
  writeDB(db);
  res.status(201).json(pet);
});

app.put('/api/pets/:id', (req, res) => {
  const db  = readDB();
  const idx = db.pets.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Pet not found' });
  db.pets[idx] = { ...db.pets[idx], ...req.body };
  writeDB(db);
  res.json(db.pets[idx]);
});

app.delete('/api/pets/:id', (req, res) => {
  const db = readDB();
  db.pets  = db.pets.filter(p => p.id !== req.params.id);
  writeDB(db);
  res.status(204).end();
});

// ── Bookings ──
app.get('/api/bookings', (req, res) => {
  res.json(readDB().bookings);
});

app.post('/api/bookings', (req, res) => {
  const db      = readDB();
  const booking = { id: genId(), ...req.body, createdAt: new Date().toISOString() };
  db.bookings.push(booking);
  writeDB(db);
  res.status(201).json(booking);
});

app.delete('/api/bookings/:id', (req, res) => {
  const db      = readDB();
  db.bookings   = db.bookings.filter(b => b.id !== req.params.id);
  writeDB(db);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`PawSitter API running on http://localhost:${PORT}`));
