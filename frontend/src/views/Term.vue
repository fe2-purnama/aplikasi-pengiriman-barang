<template>
  <div class="container">
    <!-- Button to trigger the modal -->
    <!-- <button @click="showModal = true" class="btn btn-primary">Buka Modal Syarat dan Ketentuan</button> -->

    <!-- Modal component -->
    <b-modal v-model="showModal" title="Syarat dan Ketentuan">
      <div class="term-content">
        <h3>1. Pengantar</h3>
        <p>
          Selamat datang di website kami. Jika Anda melanjutkan untuk
          menggunakan dan mengakses website ini, Anda dianggap telah menyetujui
          dan terikat oleh syarat dan ketentuan penggunaan berikut.
        </p>
        <h3>2. Penggunaan Website</h3>
        <p>
          Isi dari halaman-halaman website ini hanya untuk tujuan informasi umum
          dan penggunaan Anda. Konten tersebut dapat berubah tanpa pemberitahuan
          sebelumnya.
        </p>
        <h3>3. Kebijakan Privasi</h3>
        <p>
          Penggunaan Anda terhadap website ini tunduk pada Kebijakan Privasi
          kami, yang mengatur bagaimana kami mengumpulkan, menggunakan, dan
          menyimpan informasi pribadi Anda.
        </p>
        <h3>4. Penolakan</h3>
        <p>
          Informasi yang terdapat di website ini hanya untuk tujuan informasi
          umum. Informasi tersebut diberikan dengan sebaik-baiknya, namun kami
          tidak memberikan jaminan akan kelengkapan, ketepatan, keterandalan,
          atau ketersediaan informasi tersebut.
        </p>
        <h3>5. Perubahan Syarat</h3>
        <p>
          Kami dapat merevisi syarat dan ketentuan ini dari waktu ke waktu.
          Mohon periksa halaman ini secara berkala untuk memastikan Anda
          memahami versi yang terbaru.
        </p>
      </div>
      <!-- Footer with close button -->
      <template #modal-footer>
        <button type="button" class="btn btn-secondary" @click="showModal = false">Tutup</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
// Tidak ada logika JavaScript yang diperlukan untuk contoh ini
export default {
  data() {
    return {
      showModal: true // Properti untuk mengendalikan tampilan modal
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  /* margin: 0 auto; */
  margin-top: 100px;
  margin-bottom: 20px;
}

.term-content {
  font-size: 16px;
  line-height: 1.6;
}

h3 {
  margin-top: 20px;
}
</style>
