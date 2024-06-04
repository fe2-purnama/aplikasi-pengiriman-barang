<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Simulate a login process
        if (this.username === 'user' && this.password === 'pass') {
          localStorage.setItem('isLoggedIn', 'true');
          this.$router.push('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      }
    }
  }
  </script>
  