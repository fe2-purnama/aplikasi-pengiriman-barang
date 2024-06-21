<template>
  <div class="container mt-5">
    <h1 class="mb-3">Trace & Track</h1>

    <!-- Bagian untuk proses melacak -->
    <div class="row">
      <div class="col-6">
        <div class="card mb-3">
          <div class="card-header">Melacak Paket</div>
          <div class="card-body">
            <div class="form-group">
              <label for="trackingNumber">Masukkan nomor pelacakan:</label>
              <input
                type="text"
                id="trackingNumber"
                class="form-control"
                v-model="trackingNumber"
              />
              <button @click="trackPackage" class="btn btn-primary mt-2">
                Lacak
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bagian untuk menampilkan hasil pelacakan -->
      <div class="col-6">
        <div class="card" v-if="trackingResult">
          <div class="card-header">Hasil Pelacakan</div>
          <div class="card-body">
            <p>
              <strong>Nomor Pelacakan:</strong>
              {{ trackingResult.shipment?._id || 'N/A' }}
            </p>
            <p><strong>Status:</strong> {{ trackingResult.shipment?.status || 'N/A' }}</p>
            <p>
              <strong>Estimasi Pengiriman:</strong>
              {{ trackingResult.deliveryEstimate || 'N/A' }}
            </p>
            <!-- Informasi pelacakan lainnya -->
            <p><strong>Detail:</strong> {{ trackingResult.shipment?.type || 'N/A' }}</p>
            <p>
              <strong>Kurir:</strong>
              {{ trackingResult.shipment?.courier?.name || 'N/A' }}
            </p>
            <p>
              <strong>Nomor Kurir:</strong>
              {{ trackingResult.shipment?.courier?.phoneNumber || 'N/A' }}
            </p>
            <p>
              <strong>Biaya:</strong>
              {{ trackingResult.shipment?.payments?.[0]?.amount || 'N/A' }}
            </p>
            <p>
              <strong>Metode Pembayaran:</strong>
              {{ trackingResult.shipment?.payments?.[0]?.payment_method || 'N/A' }}
            </p>
          </div>
        </div>
        <div class="no-result" v-else>
          <p>Silakan masukkan nomor pelacakan untuk melacak paket Anda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Tracetrack",
  data() {
    return {
      trackingNumber: "",
      trackingResult: null,
    };
  },
  methods: {
    async trackPackage() {
      try {
        const response = await axios.get(`https://kirimkan-be.vercel.app/api/v1/shipments/${this.trackingNumber}`);
        console.log('Response data:', response.data); // Tambahkan console.log untuk melihat data
        this.trackingResult = response.data.data;
      } catch (error) {
        console.error("Error fetching tracking data:", error);
        alert("Nomor pelacakan tidak ditemukan atau terjadi kesalahan pada server.");
        this.trackingResult = null;
      }
    },
  },
};
</script>

<style scoped>
.container {
  /* margin-top: 200px; */
  /* margin-top: 500px; */
  max-width: 850px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.result {
  margin-top: 30px;
}

.no-result {
  margin-top: 30px;
  font-style: italic;
  color: #999;
}
</style>