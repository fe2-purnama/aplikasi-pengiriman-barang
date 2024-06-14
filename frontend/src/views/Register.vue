<!-- src/views/Register.vue -->
<template>
  <div class="container">
    <h1 class="mt-1 mb-3">Registrasi</h1>

    <!-- Form Registrasi -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Isi Formulir Registrasi</h5>
        <div class="form-group">
          <label for="fullName">Nama Lengkap:</label>
          <input
            type="text"
            id="fullName"
            class="form-control"
            v-model="fullName"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Nomor Telepon:</label>
          <input
            type="text"
            id="phoneNumber"
            class="form-control"
            v-model="phoneNumber"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button @click="register" class="btn btn-primary">Register</button>
      </div>
    </div>

    <!-- Pesan Sukses atau Error -->
    <div class="mt-3" v-if="message">
      <div
        :class="[
          { alert: true, 'alert-success': success, 'alert-danger': !success },
        ]"
      >
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
      email: "",
      phoneNumber: "",
      password: "",
      message: "",
      success: false,
    };
  },
  methods: {
    async register() {
      // Validasi form
      if (
        this.fullName === "" ||
        this.email === "" ||
        this.phoneNumber === "" ||
        this.password === ""
      ) {
        this.message = "Silakan lengkapi semua kolom";
        this.success = false;
        return;
      }

      try {
        // Panggilan API untuk registrasi
        const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/users/registerNoVerify', {
          fullName: this.fullName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          role: "User"  // Default role untuk user baru
        });

        // Penanganan respons sukses
        this.message = response.data.message;
        this.success = true;

        // Bersihkan form setelah registrasi berhasil
        this.fullName = "";
        this.email = "";
        this.phoneNumber = "";
        this.password = "";

        // Redirect ke halaman Users setelah registrasi sukses (opsional)
        this.$router.push('/users');
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
