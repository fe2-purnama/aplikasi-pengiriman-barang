<template>
  <div class="services-list mt-5">
    <h2>Data Services</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Shipment ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in services" :key="index">
          <td>{{ service.nameServices }}</td>
          <td>{{ service.price }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.shipmentId }}</td>
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
      <div class="card-header">Add New Service</div>
      <div class="card-body">
        <form @submit.prevent="addService">
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
              type="number"
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
          <div class="form-group">
            <label for="shipmentId">Shipment ID</label>
            <input
              type="text"
              v-model="newService.shipmentId"
              id="shipmentId"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Add Service</button>
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
export default {
  data() {
    return {
      services: [
        {
          nameServices: "Express Delivery",
          price: 50.0,
          description: "Fast and reliable delivery within 24 hours.",
          shipmentId: "66687e834ef5de52723adb33",
        },
        // You can add more service data here
      ],
      newService: {
        nameServices: "",
        price: "",
        description: "",
        shipmentId: "",
      },
      editingIndex: null,
      isAddCardVisible: false,
    };
  },
  methods: {
    addService() {
      this.services.push({ ...this.newService });
      this.resetForm();
      this.toggleAddCardVisibility();
    },
    editService(index) {
      this.newService = { ...this.services[index] };
      this.editingIndex = index;
      this.isAddCardVisible = true;
    },
    saveService() {
      if (this.editingIndex !== null) {
        this.services.splice(this.editingIndex, 1, { ...this.newService });
        this.resetForm();
        this.toggleAddCardVisibility();
      }
    },
    deleteService(index) {
      this.services.splice(index, 1);
    },
    resetForm() {
      this.newService = {
        nameServices: "",
        price: "",
        description: "",
        shipmentId: "",
      };
      this.editingIndex = null;
    },
    toggleAddCardVisibility() {
      this.isAddCardVisible = !this.isAddCardVisible;
    },
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
