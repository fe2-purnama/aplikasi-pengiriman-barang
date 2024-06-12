<template>
  <nav class="navbar navbar-expand navbar-light bg-primary topbar mb-4 static-top shadow">

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
    </button>

    <!-- Menu Dropdown for Orders -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="ordersDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Order
        </a>
        <div class="dropdown-menu" aria-labelledby="ordersDropdown">
          <router-link to="/pickup" class="dropdown-item">Pick Up</router-link>
          <router-link to="/dropoff" class="dropdown-item">Drop Off</router-link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="SearchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Search
        </a>
        <div class="dropdown-menu" aria-labelledby="SearchDropdown">
          <router-link to="/tracetrack" class="dropdown-item">Trace & Track</router-link>
          <router-link to="/shippingrates" class="dropdown-item">Shipping Rates</router-link>
          <router-link to="/finddroppoint" class="dropdown-item">Find Drop Point</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="/services" class="nav-link">Services</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="InformationDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Information
        </a>
        <div class="dropdown-menu" aria-labelledby="SearchDropdown">
          <router-link to="/faq" class="dropdown-item">FAQ</router-link>
          <router-link to="/packaginginformation" class="dropdown-item">Packaging Information</router-link>
          <router-link to="/term" class="dropdown-item">Term</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="/aboutus" class="nav-link">About Us</router-link>
      </li>
    </ul>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Login -->
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <!-- Nav Item - Register -->
      <li class="nav-item">
        <router-link to="/register" class="nav-link">Register</router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
export default {
  // Your script here
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #FDFFE2 !important ; /* Bootstrap primary color */
}

.nav-link {
  color: #1A2130 !important;
}

.dropdown-menu {
  width: fit-content !important;
}

.dropdown-item {
  color: #1A2130 !important;
}

.nav-link:hover, .dropdown-item:hover {
  background-color: #83B4FF !important; /* Darker shade of primary */
  color: #1A2130 !important;
}

body {
  margin: 0;
  padding-top: 56px; /* Ensure content below the navbar */
}
</style>
