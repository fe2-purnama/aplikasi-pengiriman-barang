<template>
  <div class="container">
    <h1 class="mt-5 mb-3">Find Drop Point</h1>

    <!-- Form untuk input lokasi pengiriman -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Cari Lokasi Drop Point</h5>
        <div class="form-group">
          <label for="city">Kota:</label>
          <input type="text" id="city" class="form-control" v-model="city" />
        </div>
        <button @click="searchDropPoints" class="btn btn-primary">Cari</button>
      </div>
    </div>

    <!-- Hasil pencarian drop point -->
    <div class="mt-3" v-if="dropPoints.length > 0">
      <h3 class="mt-4">Drop Points di {{ city }}</h3>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="dropPoint in dropPoints"
          :key="dropPoint.id"
        >
          <strong>{{ dropPoint.name }}</strong>
          <p>{{ dropPoint.address }}</p>
        </li>
      </ul>
    </div>
    <div class="no-result" v-else>
      <p>Tidak ada drop point ditemukan untuk kota {{ city }}.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindDropPoint",
  data() {
    return {
      city: "",
      dropPoints: [],
    };
  },
  methods: {
    searchDropPoints() {
      // API
      const response = [
        { id: 1, name: "Drop Point 1", address: "Jl. Manggarai" },
        { id: 2, name: "Drop Point 2", address: "Jl. Contoh No. 2" },
      ];

      // Filter drop point berdasarkan kota
      this.dropPoints = response.filter((point) =>
        point.address.toLowerCase().includes(this.city.toLowerCase())
      );
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
</style>
