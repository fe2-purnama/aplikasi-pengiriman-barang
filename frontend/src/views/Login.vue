<template>
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" class="form-control" v-model="username">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
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
      if (this.username === 'user' && this.password === 'pass') {
        localStorage.setItem('isLoggedIn', 'true');
        this.$router.push('/dashboard');
        $('#loginModal').modal('hide');
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
</script>

<style scoped>
  .modal-header {
    background-color: #007bff;
    color: white;
  }
  .btn-primary {
    background-color: #007bff;
    border: none;
  }
</style>
