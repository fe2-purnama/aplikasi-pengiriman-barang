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
                    <label for="name">Nama</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="text" class="form-control" id="name" v-model="pickupRequest.name" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="phoneNumber">Nomor Telepon</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                      </div>
                      <input type="text" class="form-control" id="phoneNumber" v-model="pickupRequest.phoneNumber" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="originCity">Kota</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-city"></i></span>
                      </div>
                      <input type="text" class="form-control" id="originCity" v-model="pickupRequest.originCity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="postCode">Kode Pos</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-mail-bulk"></i></span>
                      </div>
                      <input type="text" class="form-control" id="postCode" v-model="pickupRequest.postCode" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="address">Alamat</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                      </div>
                      <textarea class="form-control" id="address" v-model="pickupRequest.address" required></textarea>
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
                        <option v-for="courier in couriers" :key="courier._id" :value="courier._id">{{ courier.shipment.courier.name }}</option>
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
                    <label for="serviceId">Pilih Layanan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-concierge-bell"></i></span>
                      </div>
                      <select class="form-control" id="serviceId" v-model="pickupRequest.serviceId" required>
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
                      <input type="text" class="form-control" id="packageType" v-model="pickupRequest.packageType" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="itemName">Nama Barang</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-tag"></i></span>
                      </div>
                      <input type="text" class="form-control" id="itemName" v-model="pickupRequest.itemName" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="quantity">Kuantitas</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-sort-amount-up"></i></span>
                      </div>
                      <input type="number" class="form-control" id="quantity" v-model="pickupRequest.quantity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="itemValue">Nilai Barang</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                      </div>
                      <input type="number" class="form-control" id="itemValue" v-model="pickupRequest.itemValue" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="weight">Berat (kg)</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-weight"></i></span>
                      </div>
                      <input type="number" class="form-control" id="weight" v-model="pickupRequest.weight" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="dimensions">Dimensi (cm)</label>
                    <div class="d-flex">
                      <div class="input-group mr-2">
                        <div class="input-group-prepend">
                          <span class="input-group-text">T</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Tinggi" v-model="pickupRequest.dimensions.height" required>
                      </div>
                      <div class="input-group mr-2">
                        <div class="input-group-prepend">
                          <span class="input-group-text">L</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Lebar" v-model="pickupRequest.dimensions.width" required>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">P</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Panjang" v-model="pickupRequest.dimensions.length" required>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="remarks">Catatan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-comment"></i></span>
                      </div>
                      <textarea class="form-control" id="remarks" v-model="pickupRequest.remarks"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">Kirim Permintaan</button>
            </form>
          </div>
          <!-- Sisi Kanan - Tampilan Data (Jika Ada) -->
          <div class="data-section">
            <!-- Bisa ditambahkan tampilan data jika diperlukan -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pickupRequest: {
        name: '',
        phoneNumber: '',
        originCity: '',
        postCode: '',
        address: '',
        courierId: '',
        serviceId: '',
        packageType: '',
        itemName: '',
        quantity: '',
        itemValue: '',
        weight: '',
        dimensions: {
          height: '',
          width: '',
          length: ''
        },
        remarks: ''
      },
      couriers: [],
      services: []  // Asumsikan services juga akan diambil dari API atau sudah ada data static
    };
  },
  created() {
    this.fetchCouriers();
  },
  methods: {
    fetchCouriers() {
      axios.get('http://localhost:8000/api/v1/couriers')
        .then(response => {
          this.couriers = response.data.data;  // Adjust according to the actual API response structure
        })
        .catch(error => {
          console.error('Error fetching couriers:', error);
        });
    },
    submitPickupRequest() {
      // Logic to submit the pickup request form
      axios.post('http://localhost:8000/api/v1/senders/create-senders', this.pickupRequest)
        .then(response => {
          console.log('Pickup request submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting pickup request:', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.card-header {
  background-color: #007bff;
  color: white;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.form-section, .data-section {
  flex: 1;
}

.input-group-text {
  background-color: #f8f9fa;
}
</style>
