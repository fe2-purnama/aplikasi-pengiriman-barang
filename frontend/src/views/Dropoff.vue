<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Permintaan Pengantaran</h3>
      </div>
      <div class="card-body">
        <!-- Bagian Panduan -->
        <div class="row guide-section mb-4">
          <div class="card col-6">
            <div class="card-header bg-info text-white">Panduan Mengisi Formulir</div>
            <div class="card-body">
              <ul>
                <li>Pastikan semua bidang diisi dengan benar.</li>
                <li>Berikan detail penerima yang akurat untuk kelancaran proses.</li>
                <li>Pilih kurir dan jenis layanan yang sesuai.</li>
                <li>Masukkan detail paket dengan hati-hati, terutama dimensi dan beratnya.</li>
                <li>Gunakan bagian catatan untuk instruksi atau catatan khusus.</li>
              </ul>
            </div>
          </div>
          <div class="card col-6">
            <div class="card-header bg-info text-white">Informasi Tambahan</div>
            <div class="card-body">
              <p>Pastikan untuk memeriksa kembali detail sebelum mengirim formulir. Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan hubungi tim dukungan kami.</p>
            </div>
          </div>
        </div>
        
        <!-- Bagian Formulir -->
        <div class="form-section">
          <form @submit.prevent="submitDropOffRequest">
            <div class="row">
              <!-- Detail Penerima -->
              <div class="card col-6 mb-4">
                <div class="card-header bg-secondary text-white">Detail Penerima</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="receiverName">Nama</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="text" class="form-control" id="receiverName" v-model="dropOffRequest.receiver.name" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="receiverPhoneNumber">Nomor Telepon</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                      </div>
                      <input type="text" class="form-control" id="receiverPhoneNumber" v-model="dropOffRequest.receiver.phoneNumber" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="destinationCity">Kota</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-city"></i></span>
                      </div>
                      <input type="text" class="form-control" id="destinationCity" v-model="dropOffRequest.receiver.destinationCity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="postCode">Kode Pos</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-mail-bulk"></i></span>
                      </div>
                      <input type="text" class="form-control" id="postCode" v-model="dropOffRequest.receiver.postCode" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="address">Alamat</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                      </div>
                      <textarea class="form-control" id="address" v-model="dropOffRequest.receiver.address" required></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pilihan Kurir -->
              <div class="card col-6 mb-4">
                <div class="card-header bg-secondary text-white">Pilihan Kurir</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="courier">Pilih Kurir</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-truck"></i></span>
                      </div>
                      <select class="form-control" id="courier" v-model="dropOffRequest.courierId" required>
                        <option v-for="courier in couriers" :key="courier.id" :value="courier.id">{{ courier.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Pilihan Layanan -->
                <div class="card mb-4">
                  <div class="card-header bg-secondary text-white">Pilihan Layanan</div>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="service">Pilih Layanan</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-concierge-bell"></i></span>
                        </div>
                        <select class="form-control" id="service" v-model="dropOffRequest.serviceId" required>
                          <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Detail Paket -->
            <div class="card mb-4">
              <div class="card-header bg-secondary text-white">Detail Paket</div>
              <div class="card-body">
                <div class="form-group">
                  <label for="packageType">Jenis Paket</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-box"></i></span>
                    </div>
                    <input type="text" class="form-control" id="packageType" v-model="dropOffRequest.package.type" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="itemName">Nama Barang</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-tag"></i></span>
                    </div>
                    <input type="text" class="form-control" id="itemName" v-model="dropOffRequest.package.itemName" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="quantity">Kuantitas</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-sort-amount-up"></i></span>
                    </div>
                    <input type="number" class="form-control" id="quantity" v-model="dropOffRequest.package.quantity" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="itemValue">Nilai Barang</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                    </div>
                    <input type="number" class="form-control" id="itemValue" v-model="dropOffRequest.package.itemValue" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="weight">Berat (kg)</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-weight"></i></span>
                    </div>
                    <input type="number" class="form-control" id="weight" v-model="dropOffRequest.package.weight" required>
                  </div>
                </div>
                <div class="form-group">
                  <label for="dimensions">Dimensi (cm)</label>
                  <div class="d-flex">
                    <div class="input-group mr-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text">T</span>
                      </div>
                      <input type="number" class="form-control" placeholder="Tinggi" v-model="dropOffRequest.package.height" required>
                    </div>
                    <div class="input-group mr-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text">L</span>
                      </div>
                      <input type="number" class="form-control" placeholder="Lebar" v-model="dropOffRequest.package.width" required>
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                      <span class="input-group-text">P</span>
                      </div>
                      <input type="number" class="form-control" placeholder="Panjang" v-model="dropOffRequest.package.length" required>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="remarks">Catatan</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-comment"></i></span>
                    </div>
                    <textarea class="form-control" id="remarks" v-model="dropOffRequest.package.remarks"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block">Kirim Permintaan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couriers: [],
      services: [],
      dropOffRequest: {
        receiver: {
          name: '',
          phoneNumber: '',
          destinationCity: '',
          postCode: '',
          address: ''
        },
        courierId: null,
        serviceId: null,
        package: {
          type: '',
          itemName: '',
          quantity: '',
          itemValue: '',
          weight: '',
          height: '',
          width: '',
          length: '',
          remarks: ''
        }
      }
    };
  },
  created() {
    this.fetchCouriers();
    this.fetchServices();
  },
  methods: {
    fetchCouriers() {
      // Ganti dengan panggilan API sebenarnya
      this.couriers = [
        { id: 1, name: 'Kurir A' },
        { id: 2, name: 'Kurir B' }
      ];
    },
    fetchServices() {
      // Ganti dengan panggilan API sebenarnya
      this.services = [
        { id: 1, name: 'Layanan Standar' },
        { id: 2, name: 'Layanan Ekspres' }
      ];
    },
    submitDropOffRequest() {
      // Tangani pengiriman formulir
      console.log('Permintaan Pengantaran:', this.dropOffRequest);
      // Anda bisa mengirim data ini ke server menggunakan panggilan API
    }
  }
};
</script>

<style scoped>
.container {
  padding: 90px;
}

.guide-section,
.form-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}
.row {
  display: flex !important;
  justify-content: space-between !important;
}
.card-header {
  font-size: 1.2em;
}

.card {
  margin-bottom: 20px;
}

.input-group-prepend .input-group-text {
  background-color: #f8f9fa;
}

.btn-block {
  margin-top: 20px;
}

.guide-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.guide-section p {
  margin-top: 10px;
}
</style>
