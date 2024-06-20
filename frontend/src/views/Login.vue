<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="emailOrPhoneNumber">Email:</label>
        <input type="text" id="emailOrPhoneNumber" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p v-if="message" :class="{ 'alert': true, 'alert-success': success, 'alert-danger': !success }">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
      success: false
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/users/login', {
          emailOrPhoneNumber: this.email,
          password: this.password
        });

        // Simpan token ke cookies
        VueCookies.set('token', response.data.data.token);

        this.message = response.data.message;
        this.success = true;

        // Periksa peran pengguna
        const userRole = response.data.data.user.role;
        if (userRole === 'Admin') {
          this.$router.push('/dashboard').then(() => {
            location.reload();
          });
        } else {
          this.$router.push('/').then(() => {
            location.reload();
          });
        }

      } catch (error) {
        if (error.response && error.response.data) {
          this.message = error.response.data.message;
        } else {
          this.message = 'Gagal login. Silakan coba lagi.';
        }
        this.success = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 80px;
}
.form-group {
  margin-bottom: 20px;
}
.alert {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
}
.alert-success {
  background-color: lightgreen;
}
.alert-danger {
  background-color: lightcoral;
}
</style>