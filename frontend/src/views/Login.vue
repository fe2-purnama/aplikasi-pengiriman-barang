<template>
  <div class="container">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">Login</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="emailOrPhoneNumber">Email:</label>
            <input type="text" id="emailOrPhoneNumber" v-model="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
        <p v-if="message" :class="{ 'alert': true, 'alert-success': success, 'alert-danger': !success }" class="mt-3 text-center">{{ message }}</p>
      </div>
    </div>
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
        console.log(response);
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
  padding: 20px;
  margin-bottom: 80px;
  margin-top: 100px;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 24px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

.alert {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
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