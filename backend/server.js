const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Tambahkan ini untuk mengizinkan permintaan dari frontend
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Gunakan CORS
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Validasi data
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Silakan lengkapi semua kolom' });
  }

  // Simulasi penyimpanan data pengguna
  console.log('Data pengguna:', { username, email, password });

  res.status(201).json({ message: 'Registrasi berhasil!' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
