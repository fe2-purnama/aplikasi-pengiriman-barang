<template>
  <div class="container">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Permintaan Pengambilan</h3>
      </div>
      <div class="card-body">
        <div class="grid-container">
          <!-- Sisi Kiri - Formulir -->
          <div class="form-section">
            <form @submit.prevent="submitPickupRequest">
              <!-- Detail Pengirim -->
              <div class="card mb-4">
                <div class="card-header bg-secondary text-white">Detail Pengirim</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="senderName">Nama</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="text" class="form-control" id="senderName" v-model="pickupRequest.sender.name" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="senderPhoneNumber">Nomor Telepon</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                      </div>
                      <input type="text" class="form-control" id="senderPhoneNumber" v-model="pickupRequest.sender.phoneNumber" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="originCity">Kota</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-city"></i></span>
                      </div>
                      <input type="text" class="form-control" id="originCity" v-model="pickupRequest.sender.originCity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="postCode">Kode Pos</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-mail-bulk"></i></span>
                      </div>
                      <input type="text" class="form-control" id="postCode" v-model="pickupRequest.sender.postCode" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="address">Alamat</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                      </div>
                      <textarea class="form-control" id="address" v-model="pickupRequest.sender.address" required></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pemilihan Kurir -->
              <div class="card mb-4">
                <div class="card-header bg-secondary text-white">Pemilihan Kurir</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="courier">Pilih Kurir</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-truck"></i></span>
                      </div>
                      <select class="form-control" id="courier" v-model="pickupRequest.courierId" required>
                        <option v-for="courier in couriers" :key="courier.id" :value="courier.id">{{ courier.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pemilihan Layanan -->
              <div class="card mb-4">
                <div class="card-header bg-secondary text-white">Pemilihan Layanan</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="service">Pilih Layanan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-concierge-bell"></i></span>
                      </div>
                      <select class="form-control" id="service" v-model="pickupRequest.serviceId" required>
                        <option v-for="service in services" :key="service.id" :value="service.id">{{ service.nameServices }}</option>
                      </select>
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
                      <input type="text" class="form-control" id="packageType" v-model="pickupRequest.package.type" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="itemName">Nama Barang</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-tag"></i></span>
                      </div>
                      <input type="text" class="form-control" id="itemName" v-model="pickupRequest.package.itemName" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="quantity">Kuantitas</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-sort-amount-up"></i></span>
                      </div>
                      <input type="number" class="form-control" id="quantity" v-model="pickupRequest.package.quantity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="itemValue">Nilai Barang</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                      </div>
                      <input type="number" class="form-control" id="itemValue" v-model="pickupRequest.package.itemValue" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="weight">Berat (kg)</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-weight"></i></span>
                      </div>
                      <input type="number" class="form-control" id="weight" v-model="pickupRequest.package.weight" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="dimensions">Dimensi (cm)</label>
                    <div class="d-flex">
                      <div class="input-group mr-2">
                        <div class="input-group-prepend">
                          <span class="input-group-text">T</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Tinggi" v-model="pickupRequest.package.height" required>
                      </div>
                      <div class="input-group mr-2">
                        <div class="input-group-prepend">
                          <span class="input-group-text">L</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Lebar" v-model="pickupRequest.package.width" required>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">P</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Panjang" v-model="pickupRequest.package.length" required>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="remarks">Catatan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-comment"></i></span>
                      </div>
                      <textarea class="form-control" id="remarks" v-model="pickupRequest.package.remarks"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block">Kirim Permintaan</button>
            </form>
          </div>

          <!-- Sisi Kanan - Panduan -->
          <div class="guide-section">
            <div class="card mb-4">
              <div class="card-header bg-info text-white">Panduan Mengisi Formulir</div>
              <div class="card-body">
                <ul>
                  <li>Pastikan semua kolom diisi dengan benar.</li>
                  <li>Sertakan detail pengirim yang akurat untuk proses yang lancar.</li>
                  <li>Pilih kurir dan jenis layanan yang sesuai.</li>
                  <li>Masukkan detail paket dengan hati-hati, terutama dimensi dan berat.</li>
                  <li>Gunakan bagian catatan untuk instruksi khusus atau catatan tambahan.</li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-info text-white">Informasi Tambahan</div>
              <div class="card-body">
                <p>Pastikan untuk memeriksa kembali detail sebelum mengirimkan formulir. Jika ada pertanyaan atau butuh bantuan, silakan hubungi tim dukungan kami.</p>
              </div>
            </div>
          </div>
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
      pickupRequest: {
        sender: {
          name: '',
          phoneNumber: '',
          originCity: '',
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
      // Ganti dengan panggilan API yang sebenarnya
      this.couriers = [
        { id: 1, name: 'Kurir A' },
        { id: 2, name: 'Kurir B' }
      ];
    },
    fetchServices() {
      // Ganti dengan panggilan API yang sebenarnya
      this.services = [
        { id: 1, nameServices: 'Layanan Standar' },
        { id: 2, nameServices: 'Layanan Express' }
      ];
    },
    submitPickupRequest() {
      // Menangani pengiriman formulir
      console.log('Permintaan Pengambilan:', this.pickupRequest);
      // Anda bisa mengirimkan data ini ke server menggunakan panggilan API
    }
  }
};
</script>

<style scoped>
.container{
  margin-top: 100px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-section, .guide-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

.card-header {
  font-size: 1.2em;
}

.card {
  margin-bottom: 20px;
}
.card-body ul{
  text-align: justify;
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
