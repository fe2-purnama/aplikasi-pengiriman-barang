const express = require('express');
const app = express();
const cors = require('cors'); // Import CORS middleware

// Middleware
app.use(express.json());
app.use(cors()); // Gunakan CORS untuk mengizinkan akses dari frontend

// In-memory user store (simulasi database)
let users = [];

// Endpoint untuk registrasi pengguna
app.post('/api/v1/users/register', (req, res) => {
  const { fullName, phoneNumber, city, country, email, password } = req.body;

  // Simulasi penyimpanan ke database
  const newUser = { id: users.length + 1, fullName, phoneNumber, city, country, email, password };
  users.push(newUser);

  res.status(201).json({ message: 'Registrasi berhasil', userId: newUser.id });
});

// Endpoint untuk mendapatkan semua pengguna
app.get('/api/v1/users', (req, res) => {
  res.json(users);
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
