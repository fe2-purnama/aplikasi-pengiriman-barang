<template>
  <div class="container">
    <h1 class="mt-1 mb-3">Registrasi</h1>

    <!-- Form Registrasi -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Isi Formulir Registrasi</h5>
        <div class="form-group">
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" class="form-control" v-model="fullName" />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" class="form-control" v-model="phoneNumber" />
        </div>
        <div class="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" class="form-control" v-model="city" />
        </div>
        <div class="form-group">
          <label for="country">Country:</label>
          <input type="text" id="country" class="form-control" v-model="country" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword" />
        </div>
        <button @click="register" class="btn btn-primary">Register</button>
      </div>
    </div>

    <!-- Pesan Sukses atau Error -->
    <div class="mt-3" v-if="message">
      <div :class="[{ alert: true, 'alert-success': success, 'alert-danger': !success }]">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Register",
  data() {
    return {
      fullName: "",
      phoneNumber: "",
      city: "",
      country: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      success: false,
    };
  },
  methods: {
    async register() {
      // Validasi form
      if (
        this.fullName === "" ||
        this.phoneNumber === "" ||
        this.city === "" ||
        this.country === "" ||
        this.email === "" ||
        this.password === "" ||
        this.confirmPassword === ""
      ) {
        this.message = "Silakan lengkapi semua kolom";
        this.success = false;
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.message = "Konfirmasi password tidak cocok";
        this.success = false;
        return;
      }

      try {
        // Panggilan API untuk registrasi
        const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/users/registerNoVerify', {
          fullName: this.fullName,
          phoneNumber: this.phoneNumber,
          city: this.city,
          country: this.country,
          email: this.email,
          password: this.password,
        });

        // Penanganan respons sukses
        this.message = response.data.message;
        this.success = true;

        // Bersihkan form setelah registrasi berhasil (opsional)
        this.fullName = "";
        this.phoneNumber = "";
        this.city = "";
        this.country = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";

      } catch (error) {
        // Penanganan kesalahan dari server
        if (error.response && error.response.data) {
          this.message = error.response.data.message;
        } else {
          this.message = "Terjadi kesalahan saat melakukan registrasi";
        }
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  margin-top: 20px;
}

.alert {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}
.alert-success {
  background-color: #d4edda;
  color: #155724;
}
.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
}
</style>
