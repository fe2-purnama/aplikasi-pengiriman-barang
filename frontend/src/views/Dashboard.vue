<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Users</h5>
            <h6 class="card-subtitle mb-2 text-muted">Data Pengguna</h6>
            <router-link to="/userslist" class="btn btn-primary">Details</router-link>
            <!-- <button class="btn btn-primary" @click="goToPage('userslist')">Details</button> -->
            <!-- <button class="btn  btn-primary">Details</button> -->
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Couriers</h5>
            <h6 class="card-subtitle mb-2 text-muted">Data Kurir</h6>
            <!-- <button class="btn btn-primary">Details</button> -->
            <router-link to="/courierslist" class="btn btn-primary">Details</router-link>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Services</h5>
            <h6 class="card-subtitle mb-2 text-muted">Data Pelayanan</h6>
            <!-- <button  class="btn btn-primary">Details</button> -->
            <router-link to="/serviceslist" class="btn btn-primary">Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  name: "Dashboard",
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("isLoggedIn") === "true") {
      next();
    } else {
      next("/login");
    }
  },
};
</script> -->

<style scoped>
.dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  height: calc(100vh - 40px);
}
.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.col-4 {
  flex: 1;
}
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 80px; 
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-body {
  padding: 20px;
}
.card-title {
  margin-top: 0;
  font-size: 1.5em;
  color: #333;
}
.card-subtitle {
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
}
.card-text {
  font-size: 0.9em;
  color: #777;
}
.card-link {
  font-size: 0.9em;
  color: #007bff;
  text-decoration: none;
  margin-right: 10px;
}
.card-link:hover {
  text-decoration: underline;
}
</style>
