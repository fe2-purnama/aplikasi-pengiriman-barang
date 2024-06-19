<template>
  <div class="container w-100" v-if="isAuthenticated">
    <h1 class="mt-5 mb-3">Order</h1>
    <div class="row">
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card flex-fill">
          <div class="card-body">
            <h5 class="card-title">Pick Up</h5>
            <p class="card-text">Kami akan mengambil paket dari lokasi Anda.</p>
            <button @click="createShipment('PickUp')" class="btn btn-primary">Pilih Pick Up</button>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card flex-fill">
          <div class="card-body">
            <h5 class="card-title">Drop Off</h5>
            <p class="card-text">Anda dapat mengirimkan paket ke drop point terdekat.</p>
            <button @click="createShipment('DropOff')" class="btn btn-primary">Pilih Drop Off</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <h1 class="mt-5 mb-3">Loading...</h1>
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
      user: null, // Tambahkan data pengguna ke state
      shipmentId: null, // Tambahkan shipmentId ke state
    };
  },
  async created() {
    try {
      const token = VueCookies.get('token');
      if (token) {
        const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/users/authenticate', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        this.isAuthenticated = response.data.status;
        this.user = response.data.data.user; // Simpan data pengguna
      } else {
        this.isAuthenticated = false;
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      this.isAuthenticated = false;
    }
  },
  methods: {
    async createShipment(type) {
      if (!this.user) {
        console.error("User is not authenticated.");
        return;
      }

      const shipmentData = {
        userId: this.user._id,
        noTrack: 'TRACK123456789', // Contoh nomor tracking, Anda mungkin ingin mengenerate ini secara dinamis
        type: type,
        status: 'In Progress', // Status yang sesuai
      };

      console.log("User ID:", this.user._id); // Log ID pengguna

      try {
        const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/shipments/create-shipments', shipmentData);
        console.log('Shipment created:', response.data);
        
        // Set shipmentId
        this.shipmentId = response.data.data._id;

        // Alihkan pengguna ke halaman /pickup atau /dropoff berdasarkan tipe
        if (type === 'PickUp') {
          this.$router.push(`/pickup/${this.shipmentId}`); // Menambahkan shipmentId ke URL
        } else if (type === 'DropOff') {
          this.$router.push(`/dropoff/${this.shipmentId}`); // Menambahkan shipmentId ke URL
        }
      } catch (error) {
        console.error("Error creating shipment:", error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  max-width: 800px;
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
