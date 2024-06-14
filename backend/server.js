const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint untuk registrasi pengguna
app.post('/api/register', (req, res) => {
  // Ambil data dari body request
  const { fullName, phoneNumber, city, country, email, password } = req.body;

  // Lakukan validasi data (opsional)
  if (!fullName || !phoneNumber || !city || !country || !email || !password) {
    return res.status(400).json({ success: false, message: "Silakan lengkapi semua kolom" });
  }

  // Simpan data pengguna ke database atau lakukan operasi lainnya
  // Di sini Anda bisa menggunakan MongoDB, PostgreSQL, dll.

  // Simulasikan respons sukses
  res.status(200).json({ success: true, message: "Registrasi berhasil!" });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
