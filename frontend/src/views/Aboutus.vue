<template>
  <div class="container about-container" id="about">
    <div class="row">
      <div class="col-6">
        <div class="about-image">
          <img src="/public/kurir.jpeg" alt="about" />
        </div>
      </div>
      <div class="col-6">
        <div class="about-content">
          <!-- <p class="subheader">TENTANG KAMI</p> -->
          <h2 class="header">
            Pengiriman Barang yang Terbaik Dimulai dari Sini!
          </h2>
          <p class="description">
            Dengan fokus pada layanan pengiriman berkualitas, pengalaman yang
            dipersonalisasi, dan proses pemesanan yang mulus, platform kami
            didedikasikan untuk memastikan setiap pelanggan dapat mengirimkan
            barang mereka dengan percaya diri dan ketenangan.
          </p>
          <p class="description">
            Kami memahami betapa pentingnya keamanan dan keandalan dalam
            pengiriman barang, itulah sebabnya kami menggunakan teknologi
            terkini untuk memastikan setiap paket tiba dengan selamat dan tepat
            waktu.
          </p>
          <p class="description">
            Selain itu, kami memiliki tim dukungan pelanggan yang siap membantu
            Anda setiap saat. Jadi, jika Anda memiliki pertanyaan atau
            memerlukan bantuan, jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Tidak ada logika JavaScript yang diperlukan untuk contoh ini
};
</script>

<style scoped>
.container {
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 40px;
}

.about-content {
  max-width: 600px;
}

.subheader {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.header {
  font-size: 32px;
  color: #333;
  margin: 20px 0;
}

.description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.about-btn {
  margin-top: 20px;
}

.btn {
  background-color: #ffa500 !important;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
