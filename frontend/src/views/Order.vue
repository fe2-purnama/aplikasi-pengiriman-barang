<template>
  <div class="container w-100" v-if="isAuthenticated">
    <h1 class="mt-5 mb-3">Order</h1>
    <div class="row">
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card flex-fill">
          <div class="card-body">
            <h5 class="card-title">Pick Up</h5>
            <p class="card-text">Kami akan mengambil paket dari lokasi Anda.</p>
            <router-link to="/pickup" class="btn btn-primary">Pilih Pick Up</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card flex-fill">
          <div class="card-body">
            <h5 class="card-title">Drop Off</h5>
            <p class="card-text">Anda dapat mengirimkan paket ke drop point terdekat.</p>
            <router-link to="/dropoff" class="btn btn-primary">Pilih Drop Off</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <h1 class="mt-5 mb-3">Anda belum login</h1>
    <router-link to="/login" class="btn btn-primary">Login</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: "Order",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  async created() {
    try {
      // Mengambil token dari cookies
      const token = VueCookies.get('token');
      console.log('Token from cookies:', token); 

      if (token) {
        const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/users/authenticate', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log('API response:', response.data.data.user); 
        this.isAuthenticated = response.data.status; 
      } else {
        this.isAuthenticated = false;
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      this.isAuthenticated = false;
    }
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  max-width: 800px;
  /* margin: 40px auto; */
  margin-bottom: 30px;
  padding: 20px;

}

.card {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.btn {
  font-size: 1rem;
}

.d-flex {
  display: flex;
}

.align-items-stretch {
  align-items: stretch;
}

.flex-fill {
  flex: 1 1 auto;
}
</style>
