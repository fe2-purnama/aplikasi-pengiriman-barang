<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Trace & Track</h1>

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
              {{ trackingResult.trackingNumber }}
            </p>
            <p><strong>Status:</strong> {{ trackingResult.status }}</p>
            <p>
              <strong>Estimasi Pengiriman:</strong>
              {{ trackingResult.deliveryEstimate }}
            </p>
            <!-- Informasi pelacakan lainnya -->
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
export default {
  name: "Tracetrack",
  data() {
    return {
      trackingNumber: "",
      trackingResult: null,
    };
  },
  methods: {
    trackPackage() {
      // Simulasi data hasil pelacakan
      const simulatedResult = {
        trackingNumber: this.trackingNumber,
        status: "Dalam Proses",
        deliveryEstimate: "25 Juni 2024", // Tanggal estimasi pengiriman simulasi
        // Informasi pelacakan lainnya sesuai kebutuhan simulasi
      };
      this.trackingResult = simulatedResult;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 850px;
  margin: 40px auto ;
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
