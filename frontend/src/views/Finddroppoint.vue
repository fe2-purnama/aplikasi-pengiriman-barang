<template>
  <div class="container mt-5">
    <h1 class="mt-5 mb-3">Find Drop Point</h1>

    <!-- Form untuk input nama kota -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Cari Lokasi Drop Point</h5>
        <div class="form-group">
          <label for="city">Nama Kota:</label>
          <input type="text" id="city" class="form-control" v-model="city_name" list="citiesList" />
          <datalist id="citiesList">
            <option v-for="city in cities" :value="city.city_name" :key="city.city_id"></option>
          </datalist>
        </div>
        <button @click="searchDropPoints" class="btn btn-primary">Cari</button>
        <button @click="getAllDropPoints" class="btn btn-secondary ml-2">
          Tampilkan Semua
        </button>
      </div>
    </div>

    <!-- Hasil pencarian drop point -->
    <div class="mt-3" v-if="dropPoints.length > 0">
      <h3 class="mt-4">Drop Points</h3>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="dropPoint in dropPoints"
          :key="dropPoint.city_name"
        >
          <strong> {{ dropPoint.city_name }}</strong>
          <p>{{ dropPoint.province }}</p>
          <p>{{ dropPoint.postal_code }}</p>
        </li>
      </ul>
    </div>
    <div class="no-result" v-else>
      <p>{{ noResultMessage }}</p>
    </div>

    <!-- Tabel untuk menampilkan semua data -->
    <div class="mt-3" v-if="allDropPoints.length > 0">
      <h3 class="mt-4">Semua Drop Points</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nama Kota</th>
            <th scope="col">Provinsi</th>
            <th scope="col">Kode Pos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dropPoint in allDropPoints" :key="dropPoint.city_id">
            <td>{{ dropPoint.city_name }}</td>
            <td>{{ dropPoint.province }}</td>
            <td>{{ dropPoint.postal_code }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FindDropPoint",
  data() {
    return {
      city_name: "",
      dropPoints: [],
      allDropPoints: [],
      noResultMessage: "Tidak ada drop point ditemukan.",
      cities: [],
    };
  },
  methods: {
    async searchDropPoints() {
      try {
        const response = await axios.get(
          "https://kirimkan-be.vercel.app/api/v1/rajaongkir/city"
        );
        this.cities = response.data.rajaongkir.results;

        if (this.city_name) {
          const selectedCity = this.cities.find(
            (city) => city.city_name.toLowerCase() === this.city_name.toLowerCase()
          );
          if (selectedCity) {
            this.dropPoints = [selectedCity];
            this.noResultMessage = ""; 
          } else {
            this.dropPoints = [];
            this.noResultMessage = `Tidak ada drop point ditemukan untuk nama kota ${this.city_name}.`;
          }
        } else {
          this.dropPoints = [];
          this.noResultMessage = "Silakan masukkan nama kota.";
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data layanan:", error);
        this.dropPoints = [];
        this.noResultMessage = "Terjadi kesalahan saat mengambil data layanan.";
      }
    },
    async getAllDropPoints() {
      try {
        const response = await axios.get(
          "https://kirimkan-be.vercel.app/api/v1/rajaongkir/city"
        );
        this.allDropPoints = response.data.rajaongkir.results;
        console.log(response.data.rajaongkir.results);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data layanan:", error);
        this.allDropPoints = [];
        this.noResultMessage = "Terjadi kesalahan saat mengambil data layanan.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  margin-top: 20px;
}

.no-result {
  margin-top: 20px;
  font-style: italic;
  color: #999;
}

.table {
  margin-top: 20px;
}

.btn-secondary {
  margin-left: 10px;
}
</style>
