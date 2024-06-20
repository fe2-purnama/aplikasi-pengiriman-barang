<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-orange topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <!-- Brand -->
    <router-link to="/" class="navbar-brand text-white">Brand</router-link>

    <!-- Toggler/collapsibe Button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/order" class="nav-link text-white"
            >Order</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-white"
            href="#"
            id="SearchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Search
          </a>
          <div class="dropdown-menu bg-orange" aria-labelledby="SearchDropdown">
            <router-link to="/tracetrack" class="dropdown-item text-white"
              >Trace & Track</router-link
            >
            <router-link to="/shippingrates" class="dropdown-item text-white"
              >Shipping Rates</router-link
            >
            <router-link to="/finddroppoint" class="dropdown-item text-white"
              >Find Drop Point</router-link
            >
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link text-white"
            >Services</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-white"
            href="#"
            id="InformationDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Information
          </a>
          <div
            class="dropdown-menu bg-orange"
            aria-labelledby="InformationDropdown"
          >
            <router-link to="/faq" class="dropdown-item text-white"
              >FAQ</router-link
            >
            <router-link
              to="/packaginginformation"
              class="dropdown-item text-white"
              >Packaging Information</router-link
            >
            <router-link to="/term" class="dropdown-item text-white"
              >Term</router-link
            >
          </div>
        </li>
        <li class="nav-item">
          <router-link to="/aboutus" class="nav-link text-white"
            >About Us</router-link
          >
        </li>
      </ul>

      <!-- Right side links -->
      <ul class="navbar-nav ml-auto">
   
        <template v-if="isLoggedIn">
          <li class="nav-item">
          <router-link to="/historyorder" class="nav-link text-white"
            >History Order</router-link
          >
        </li>
          <!-- Nav Item - My Profile -->
          <li class="nav-item">
            <router-link to="/profile" class="nav-link text-white"
              >My Profile</router-link
            >
          </li>
          <!-- Nav Item - Logout -->
          <li class="nav-item">
            <a href="#" class="nav-link text-white" @click.prevent="logout"
              >Logout</a
            >
          </li>
        </template>
        <template v-else>
          <!-- Nav Item - Login -->
          <li class="nav-item">
            <router-link to="/login" class="nav-link text-white"
              >Login</router-link
            >
          </li>
          <!-- Nav Item - Register -->
          <li class="nav-item">
            <router-link to="/register" class="nav-link text-white"
              >Register</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import VueCookies from "vue-cookies";

export default {
  data() {
    return {
      isLoggedIn: false, // Default value for login status
    };
  },
  created() {
    // Check if there's a token in cookies
    const token = VueCookies.get("token");
    if (token) {
      this.isLoggedIn = true; // Set login status to true
    }
  },
  methods: {
    logout() {
      // Clear token from cookies
      VueCookies.remove("token");
      // Update login status
      this.isLoggedIn = false;
      // Redirect to login page after logout
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffa500 !important;
}

.navbar-brand,
.nav-link {
  color: #ffffff !important;
}

.nav-link:hover,
.dropdown-item:hover {
  background-color: #db9200d2 !important;
  color: #ffffff !important;
}

.dropdown-menu {
  background-color: #ffa500 !important; /* Warna oranye */
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Menambahkan shadow untuk dropdown */
}

.dropdown-item {
  color: #ffffff !important;
  background-color: #ffa500 !important;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .navbar-collapse {
    background-color: #ffa500 !important; /* Warna oranye untuk mode mobile */
  }
}
</style>
