<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/dashboard">Dashboard</router-link></li>
        <li v-if="isLoggedIn"><a href="#" @click="logout">Logout</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    computed: {
      isLoggedIn() {
        // You can use Vuex or another state management to handle authentication state
        return localStorage.getItem('isLoggedIn') === 'true';
      }
    },
    methods: {
      logout() {
        localStorage.setItem('isLoggedIn', 'false');
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style>
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li {
    margin-right: 10px;
  }
  </style>
  