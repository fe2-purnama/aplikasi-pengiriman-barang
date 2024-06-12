<template>
  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="registerModalLabel">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" class="form-control" v-model="username">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
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
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      if (this.password === this.confirmPassword) {
        $('#registerModal').modal('hide');
      } else {
        alert('Passwords do not match');
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
