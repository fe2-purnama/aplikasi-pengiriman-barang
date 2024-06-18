<template>
  <footer class="footer">
    <div class="container">
      <p>
        &copy; {{ new Date().getFullYear() }} Kirimkan.
        <span><br />Hak Cipta Dilindungi Undang-Undang.</span>
      </p>
      <div class="social-icons">
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  /* position: fixed;
  bottom: 0; */
  background-color: #ffa500;
  color: #000;
  padding: 20px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.social-icons .social-icon {
  display: inline-block;
  margin-right: 10px;
  color: #000;
  font-size: 1.5rem;
}

.social-icons .social-icon:hover {
  color: #fff;
}
</style>
