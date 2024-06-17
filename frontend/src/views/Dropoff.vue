<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Permintaan Drop Off</h3>
      </div>
      <div class="card-body">
        <div class="grid-container">
          <!-- Sisi Kiri - Formulir -->
          <div class="form-section">
            <form @submit.prevent="submitDropOffRequest">
              <!-- Detail Penerima -->
              <div class="card mb-4">
                <div class="card-header bg-secondary text-white">Detail Penerima</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="recipientName">Nama</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="text" class="form-control" id="recipientName" v-model="dropOffRequest.recipient.name" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="recipientPhoneNumber">Nomor Telepon</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                      </div>
                      <input type="text" class="form-control" id="recipientPhoneNumber" v-model="dropOffRequest.recipient.phoneNumber" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="destinationCity">Kota Tujuan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-city"></i></span>
                      </div>
                      <input type="text" class="form-control" id="destinationCity" v-model="dropOffRequest.recipient.destinationCity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="deliveryAddress">Alamat Pengiriman</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                      </div>
                      <textarea class="form-control" id="deliveryAddress" v-model="dropOffRequest.recipient.deliveryAddress" required></textarea>
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
                      <select class="form-control" id="service" v-model="dropOffRequest.serviceId" required>
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

          <!-- Sisi Kanan - Panduan -->
          <div class="guide-section">
            <div class="card mb-4">
              <div class="card-header bg-info text-white">Panduan Mengisi Formulir</div>
              <div class="card-body">
                <ul>
                  <li>Pastikan semua kolom diisi dengan benar.</li>
                  <li>Sertakan detail penerima yang akurat untuk proses yang lancar.</li>
                  <li>Pilih jenis layanan yang sesuai.</li>
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
      services: [],
      dropOffRequest: {
        recipient: {
          name: '',
          phoneNumber: '',
          destinationCity: '',
          deliveryAddress: ''
        },
        serviceId: null,
        package: {
          type: '',
          itemName: '',
          quantity: '',
          itemValue: '',
          weight: '',
          height: '',
          height: '',
          width: '',
          length: '',
          remarks: ''
        }
      }
    };
  },
  created() {
    this.fetchServices();
  },
  methods: {
    fetchServices() {
      // Misalkan ini adalah panggilan API yang sebenarnya untuk mendapatkan layanan
      this.services = [
        { id: 1, nameServices: 'Layanan Standar' },
        { id: 2, nameServices: 'Layanan Express' }
      ];
    },
    submitDropOffRequest() {
      // Metode untuk menangani pengiriman permintaan drop off
      console.log('Permintaan Drop Off:', this.dropOffRequest);
      // Di sini Anda bisa mengirimkan data ini ke server menggunakan panggilan API
    }
  }
};
</script>


<style scoped>
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

