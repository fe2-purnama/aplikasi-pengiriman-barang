<template>
  <h1>Dashboard</h1>
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
  