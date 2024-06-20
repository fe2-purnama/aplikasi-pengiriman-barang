<template>
  <div class="services-list mt-5">
    <h2>Data Services</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in services" :key="index">
          <td>{{ service.nameServices }}</td>
          <td>{{ service.price }}</td>
          <td>{{ service.description }}</td>
          <td>
            <button class="btn btn-primary" @click="editService(index)">
              Edit
            </button>
            <button class="btn btn-danger" @click="deleteService(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="isAddCardVisible" class="card">
      <div class="card-header">{{ editingIndex === null ? 'Add New Service' : 'Edit Service' }}</div>
      <div class="card-body">
        <form @submit.prevent="editingIndex === null ? addService() : saveService()">
          <div class="form-group">
            <label for="nameServices">Name</label>
            <input
              type="text"
              v-model="newService.nameServices"
              id="nameServices"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="text"
              v-model="newService.price"
              id="price"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input
              type="text"
              v-model="newService.description"
              id="description"
              class="form-control"
              required
            />
          </div>
          <!-- <div class="form-group">
            <label for="shipmentId">Shipment ID</label>
            <input
              type="text"
              v-model="newService.shipmentId"
              id="shipmentId"
              class="form-control"
              required
            />
          </div> -->
          <button type="submit" class="btn btn-primary">{{ editingIndex === null ? 'Add Service' : 'Save Service' }}</button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="toggleAddCardVisibility"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>

    <div v-if="!isAddCardVisible">
      <button
        type="button"
        class="btn btn-primary"
        @click="toggleAddCardVisibility"
      >
        Add Service
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      services: [],
      newService: {
        nameServices: '',
        price: '',
        description: '',
        shipmentId: ''
      },
      editingIndex: null,
      isAddCardVisible: false,
    };
  },
  methods: {
    async fetchService() {
      try {
        const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/services');
        this.services = response.data.data;
        console.log(this.services);
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data layanan:', error);
      }
    },
    async addService() {
      try {
        const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/services/create-service', this.newService);
        this.services.push(response.data.data);
        this.resetForm();
        this.toggleAddCardVisibility();
      } catch (error) {
        console.error('Terjadi kesalahan saat menambahkan layanan:', error);
      }
    },
    editService(index) {
      this.newService = { ...this.services[index] };
      this.editingIndex = index;
      this.isAddCardVisible = true;
    },
    async saveService() {
      if (this.editingIndex !== null) {
        try {
          const response = await axios.put(`https://kirimkan-be.vercel.app/api/v1/services/${this.services[this.editingIndex]._id}`, this.newService);
          this.services.splice(this.editingIndex, 1, response.data.data);
          this.resetForm();
          this.toggleAddCardVisibility();
        } catch (error) {
          console.error('Terjadi kesalahan saat mengupdate layanan:', error);
        }
      }
    },
    async deleteService(index) {
      try {
        await axios.delete(`https://kirimkan-be.vercel.app/api/v1/services/${this.services[index]._id}`);
        this.services.splice(index, 1);
      } catch (error) {
        console.error('Terjadi kesalahan saat menghapus layanan:', error);
      }
    },
    resetForm() {
      this.newService = {
        nameServices: '',
        price: '',
        description: '',
        shipmentId: ''
      };
      this.editingIndex = null;
    },
    toggleAddCardVisibility() {
      this.isAddCardVisible = !this.isAddCardVisible;
    },
  },
  created() {
    this.fetchService();
  },
};
</script>

<style scoped>
.services-list {
  font-family: Arial, sans-serif;
  padding: 20px;
  height: calc(100vh - 40px);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.card {
  margin-top: 20px;
}

.card-header {
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-size: 1.2em;
}

.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

.btn {
  margin-right: 10px;
}
</style>
