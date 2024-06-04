<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  </template>
  
  <script>
  export default {
    beforeRouteEnter(to, from, next) {
      if (localStorage.getItem('isLoggedIn') === 'true') {
        next();
      } else {
        next('/login');
      }
    }
  }
  </script>
  