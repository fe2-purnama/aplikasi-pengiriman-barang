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
                v-model.number="weight"
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
        <div class="card mt-3" v-if="shippingCost.city_name && shippingCost.destination_details.city_name">
          <div class="card-body">
            <h5 class="card-title">Hasil Perhitungan</h5>
            <p><strong>Kota Asal:</strong> {{ shippingCost.origin_details.city_name }}</p>
            <p><strong>Kota Tujuan:</strong> {{ shippingCost.destination_details.city_name }}</p>
            <p><strong>Berat Barang:</strong> {{ weight }} kg</p>
            <p><strong>Tarif Pengiriman:</strong> Rp {{ shippingCost.results[0].costs[0].value.toLocaleString() }}</p>

            <!-- Menampilkan data hasil perhitungan -->
            <div v-if="shippingCost.results.length > 0">
              <h6>Data Hasil Perhitungan</h6>
              <ul>
                <li v-for="result in shippingCost.results" :key="result.code">
                  <p><strong>Layanan:</strong> {{ result.service }}</p>
                  <p><strong>Deskripsi:</strong> {{ result.description }}</p>
                  <p><strong>Biaya:</strong> Rp {{ result.costs[0].value.toLocaleString() }}</p>
                  <p><strong>Estimasi Pengiriman:</strong> {{ result.costs[0].etd }} hari</p>
                </li>
              </ul>
            </div>
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
      courier: "jne",
      shippingCost: {
        city_name: "",
        origin_details: {
          city_name: "",
        },
        destination_details: {
          city_name: "",
        },
        results: [
          {
            costs: [
              {
                value: 0,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    async calculateShipping() {
      try {
        const requestData = {
          origin: this.origin,
          destination: this.destination,
          weight: this.weight,
          courier: this.courier,
        };

        const response = await axios.post(
          "https://kirimkan-be.vercel.app/api/v1/rajaongkir",
          requestData
        );

        this.shippingCost = response.data.rajaongkir;
        console.log(response.data.rajaongkir);
      } catch (error) {
        console.error("Error calculating shipping:", error);
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
