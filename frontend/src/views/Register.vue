<template>
  <div class="container">
    <div class="card mt-4">
      <div class="card-body">
        <h1 class="card-title">Registrasi</h1>
        <form @submit.prevent="register" class="needs-validation" novalidate>
          <div class="form-group mb-3">
            <label for="fullName" class="form-label">Nama Lengkap:</label>
            <input type="text" id="fullName" v-model="fullName" class="form-control" required>
          </div>
          <div class="form-group mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" v-model="email" class="form-control" required>
          </div>
          <div class="form-group mb-3">
            <label for="phoneNumber" class="form-label">Nomor Telepon:</label>
            <input type="text" id="phoneNumber" v-model="phoneNumber" class="form-control" required>
          </div>
          <div class="form-group mb-4">
            <label for="password" class="form-label">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Daftar</button>
        </form>
        <p v-if="message" :class="['alert mt-4', success ? 'alert-success' : 'alert-danger']">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      message: '',
      success: false,
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/users/registerNoVerify', {
          fullName: this.fullName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
        });
        this.message = response.data.message;
        this.success = true;
        // Redirect to login page after successful registration
        this.$router.push('/login');
      } catch (error) {
        if (error.response && error.response.data) {
          this.message = error.response.data.message;
        } else {
          this.message = 'Gagal mendaftar. Silakan coba lagi.';
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
  margin-bottom: 80px;
  margin-top: 100px;
}
h1 {
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
}
.alert {
  padding: 15px;
  border-radius: 5px;
}
.alert-success {
  background-color: lightgreen;
  color: #155724;
}
.alert-danger {
  background-color: lightcoral;
  color: #721c24;
}
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 24px;
  font-weight: bold;
}
</style>
