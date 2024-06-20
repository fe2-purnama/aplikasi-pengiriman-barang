<template>
  <div class="container">
    <h1 class="mt-1 mb-3">Shipping Rates</h1>

    <div class="row">
      <div class="col-6">
        <!-- Form untuk input informasi pengiriman -->
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Informasi Pengiriman</h5>
            <div class="form-group">
              <label for="origin">Kota Asal:</label>
              <input
                type="text"
                id="origin"
                class="form-control"
                v-model="origin"
              />
            </div>
            <div class="form-group">
              <label for="destination">Kota Tujuan:</label>
              <input
                type="text"
                id="destination"
                class="form-control"
                v-model="destination"
              />
            </div>
            <div class="form-group">
              <label for="weight">Berat Barang (kg):</label>
              <input
                type="number"
                id="weight"
                class="form-control"
                v-model="weight"
              />
            </div>
            <button @click="calculateShipping" class="btn btn-primary">
              Hitung Tarif
            </button>
          </div>
        </div>
      </div>
      <div class="col-6">
        <!-- Hasil perhitungan tarif pengiriman -->
        <div class="card mt-3" v-if="shippingCost">
          <div class="card-body">
            <h5 class="card-title">Hasil Perhitungan</h5>
            <p><strong>Kota Asal:</strong> {{ origin }}</p>
            <p><strong>Kota Tujuan:</strong> {{ destination }}</p>
            <p><strong>Berat Barang:</strong> {{ weight }} kg</p>
            <p><strong>Tarif Pengiriman:</strong> {{ shippingCost }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShippingRates",
  data() {
    return {
      origin: "",
      destination: "",
      weight: 0,
      shippingCost: null,
    };
  },
  methods: {
    async calculateShipping() {
      try {
        const response = await axios.post(
          "https://kirimkan-be.vercel.app/api/v1/rajaongkir",
          {
            origin: this.origin,
            destination: this.destination,
            weight: this.weight,
            courier: "jne",
          }
        );
        this.shippingCost = response.data.costs[0].service;
      } catch (error) {
        console.error("Terjadi kesalahan saat menghitung tarif pengiriman:", error);
        this.shippingCost = "Terjadi kesalahan saat menghitung tarif pengiriman.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.card {
  margin-top: 20px;
}
</style>
