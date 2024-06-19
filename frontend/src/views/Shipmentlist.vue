<template>
    <div class="shipments-list mt-5">
      <h2>Data Shipments</h2>
      <table class="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Tracking Number</th>
            <th>Type</th>
            <th>Status</th>
            <th>Courier ID</th>
            <th>Service ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="shipments.length > 0">
            <td>{{ shipments[0].userId }}</td>
            <td>{{ shipments[0].noTrack }}</td>
            <td>{{ shipments[0].type }}</td>
            <td>{{ shipments[0].status }}</td>
            <td>{{ shipments[0].courierId }}</td>
            <td>{{ shipments[0].serviceId }}</td>
            <td>
              <button class="btn btn-primary" @click="editShipment(0)">Edit</button>
              <button class="btn btn-danger" @click="deleteShipment(0)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="isAddCardVisible" class="card">
        <div class="card-header">
          Add New Shipment
        </div>
        <div class="card-body">
          <form @submit.prevent="addShipment">
            <div class="form-group">
              <label for="userId">User ID</label>
              <input type="text" v-model="newShipment.userId" id="userId" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="noTrack">Tracking Number</label>
              <input type="text" v-model="newShipment.noTrack" id="noTrack" class="form-control">
            </div>
            <div class="form-group">
              <label for="type">Type</label>
              <input type="text" v-model="newShipment.type" id="type" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="status">Status</label>
              <input type="text" v-model="newShipment.status" id="status" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="courierId">Courier ID</label>
              <input type="text" v-model="newShipment.courierId" id="courierId" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="serviceId">Service ID</label>
              <input type="text" v-model="newShipment.serviceId" id="serviceId" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Add Shipment</button>
            <button type="button" class="btn btn-secondary" @click="toggleAddCardVisibility">Cancel</button>
          </form>
        </div>
      </div>
  
      <div v-if="!isAddCardVisible">
        <button type="button" class="btn btn-primary" @click="toggleAddCardVisibility">Add Shipment</button>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        shipments: [],
        newShipment: {
          userId: "",
          noTrack: "",
          type: "",
          status: "",
          courierId: "",
          serviceId: ""
        },
        editingIndex: null,
        isAddCardVisible: false
      };
    },
    created() {
      this.fetchShipments();
    },
    methods: {
      async fetchShipments() {
        try {
          const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/shipments/');
          this.shipments = response.data.data; // Disini, pastikan Anda mengambil data yang benar dari response
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching shipments:', error);
        }
      },
      async addShipment() {
        try {
          const response = await axios.post('https://kirimkan-be.vercel.app/api/v1/shipments/create-shipments', this.newShipment);
          this.shipments.push(response.data);
          this.resetForm();
          this.toggleAddCardVisibility();
        } catch (error) {
          console.error('Error adding shipment:', error);
        }
      },
      editShipment(index) {
        this.newShipment = { ...this.shipments[index] };
        this.editingIndex = index;
        this.isAddCardVisible = true;
      },
      async saveShipment() {
        if (this.editingIndex !== null) {
          try {
            const response = await axios.put(`https://kirimkan-be.vercel.app/api/v1/shipments/${this.shipments[this.editingIndex]._id}`, this.newShipment);
            this.shipments.splice(this.editingIndex, 1, response.data);
            this.resetForm();
            this.toggleAddCardVisibility();
          } catch (error) {
            console.error('Error saving shipment:', error);
          }
        }
      },
      async deleteShipment(index) {
        try {
          await axios.delete(`https://kirimkan-be.vercel.app/api/v1/shipments/${this.shipments[index]._id}`);
          this.shipments.splice(index, 1);
        } catch (error) {
          console.error('Error deleting shipment:', error);
        }
      },
      resetForm() {
        this.newShipment = {
          userId: "",
          noTrack: "",
          type: "",
          status: "",
          courierId: "",
          serviceId: ""
        };
        this.editingIndex = null;
      },
      toggleAddCardVisibility() {
        this.isAddCardVisible = !this.isAddCardVisible;
      }
    }
  };
  </script>
  
  <style scoped>
  .shipments-list {
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
  