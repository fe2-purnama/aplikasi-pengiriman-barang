<template>
  <div class="container">
    <h1 class="mt-1 mb-3">Registrasi</h1>

    <!-- Form Registrasi -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Isi Formulir Registrasi</h5>
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" />
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
        <div class="form-group">
          <label for="confirmPassword">Konfirmasi Password:</label>
          <input
            type="password"
            id="confirmPassword"
            class="form-control"
            v-model="confirmPassword"
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
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      success: false,
    };
  },
  methods: {
    register() {
      // Validasi form
      if (
        this.username === "" ||
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

      // Simulasi proses registrasi
      // Gantilah dengan panggilan API sesungguhnya
      // Contoh: axios.post('http://example.com/api/register', { username: this.username, email: this.email, password: this.password })
      this.message = "Registrasi berhasil!";
      this.success = true;

      // Bersihkan form setelah registrasi berhasil
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
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
