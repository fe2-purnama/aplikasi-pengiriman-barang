const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [];

// Endpoint untuk registrasi pengguna tanpa verifikasi email
app.post('/api/v1/users/registerNoVerify', (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  // Validasi data (pastikan semua kolom yang diperlukan diisi)
  if (!fullName || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: 'Semua kolom harus diisi' });
  }

  // Simulasi penyimpanan ke database (array users)
  const newUser = { id: users.length + 1, fullName, email, phoneNumber, password };
  users.push(newUser);

  // Kirim respons sukses dengan ID pengguna baru
  res.status(201).json({ message: 'Registrasi berhasil', userId: newUser.id });
});

// Endpoint untuk login pengguna
app.post('/api/v1/users/login', (req, res) => {
  const { email, password } = req.body;

  // Cek apakah pengguna ada dalam array users
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Kirim respons sukses dengan data pengguna
    res.json({ message: 'Login berhasil', user });
  } else {
    // Kirim respons gagal jika pengguna tidak ditemukan
    res.status(401).json({ message: 'Email atau password salah' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
