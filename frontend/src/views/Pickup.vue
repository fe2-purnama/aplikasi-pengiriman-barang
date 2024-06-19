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
                  <button type="submit" class="btn btn-primary btn-block">Kirim Permintaan</button>
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
                      <select class="form-control" id="service" v-model="pickupRequest.serviceId" >
                        <option v-for="service in services" :key="service.id" :value="service.id">{{ service.nameServices }}</option>
                      </select>
                    </div>         
                  </div>
                </div>
              </div>
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
      services: [],
      pickupRequest: {
        sender: {
          name: '',
          phoneNumber: '',
          originCity: '',
          postCode: '',
          address: ''
        },
        serviceId: null
      }
    };
  },
  created() {
    this.fetchServices();
  },
  methods: {
    fetchServices() {
      fetch('https://kirimkan-be.vercel.app/api/v1/services')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (!data.status) {
            throw new Error(data.message || 'Failed to fetch services');
          }
          if (!Array.isArray(data.data)) {
            throw new Error('Data is not an array');
          }
          this.services = data.data.map(service => ({
            id: service._id,
            nameServices: service.nameServices
          }));
        })
        .catch(error => {
          console.error('Error fetching services:', error);
          // Handle error by setting services to an empty array
          this.services = [];
        });
    },
    submitPickupRequest() {
      // Simpan detail pengirim terlebih dahulu
      this.createSender()
        .then(() => {
          // Setelah pengirim berhasil dibuat, kirim permintaan pengambilan
          console.log('Permintaan Pengambilan:', this.pickupRequest);
          // Anda bisa mengirimkan data ini ke server menggunakan panggilan API
        })
        .catch(error => {
          console.error('Error creating sender:', error);
          // Tampilkan pesan error kepada pengguna
          alert('Gagal membuat pengirim. Mohon coba lagi.');
        });
    },
    createSender() {
      const { name, phoneNumber, originCity, postCode, address } = this.pickupRequest.sender;
      const url = 'https://kirimkan-be.vercel.app/api/v1/senders/create-senders';
      const payload = {
        name,
        phoneNumber,
        originCity,
        postCode,
        address,
        shipmentId:""
      };

      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data.status) {
          throw new Error(data.message || 'Failed to create sender');
        }
        // You can add any necessary handling here, if needed
      })
      .catch(error => {
        console.error('Error creating sender:', error);
        throw error; // Propagate the error to the calling function
      });
    }
  }
};
</script>

<style scoped>
.container {
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
.card-body ul {
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
