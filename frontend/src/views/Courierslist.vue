<template>
    <div class="couriers-list mt-5">
      <h2>Data Couriers</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Vehicle Type</th>
            <th>License Plate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(courier, index) in couriers" :key="index">
            <td>{{ courier.name }}</td>
            <td>{{ courier.phoneNumber }}</td>
            <td>{{ courier.vehicleType }}</td>
            <td>{{ courier.licensePlate }}</td>
            <td>
              <button class="btn btn-primary" @click="editCourier(index)">Edit</button>
              <button class="btn btn-danger" @click="deleteCourier(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="isAddCardVisible" class="card">
        <div class="card-header">
          Add New Courier
        </div>
        <div class="card-body">
          <form @submit.prevent="addCourier">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="newCourier.name" id="name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input type="text" v-model="newCourier.phoneNumber" id="phoneNumber" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="vehicleType">Vehicle Type</label>
              <input type="text" v-model="newCourier.vehicleType" id="vehicleType" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="licensePlate">License Plate</label>
              <input type="text" v-model="newCourier.licensePlate" id="licensePlate" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Add Courier</button>
            <button type="button" class="btn btn-secondary" @click="toggleAddCardVisibility">Cancel</button>
          </form>
        </div>
      </div>
  
      <div v-if="!isAddCardVisible">
        <button type="button" class="btn btn-primary" @click="toggleAddCardVisibility">Add Courier</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        couriers: [
          {
            name: "James Gordon",
            phoneNumber: "08121298234",
            vehicleType: "Manual",
            licensePlate: "B 1233 VIY"
          },
          // You can add more courier data here
        ],
        newCourier: {
          name: "",
          phoneNumber: "",
          vehicleType: "",
          licensePlate: ""
        },
        editingIndex: null,
        isAddCardVisible: false
      };
    },
    methods: {
      addCourier() {
        this.couriers.push({ ...this.newCourier });
        this.resetForm();
        this.toggleAddCardVisibility();
      },
      editCourier(index) {
        this.newCourier = { ...this.couriers[index] };
        this.editingIndex = index;
        this.isAddCardVisible = true;
      },
      saveCourier() {
        if (this.editingIndex !== null) {
          this.couriers.splice(this.editingIndex, 1, { ...this.newCourier });
          this.resetForm();
          this.toggleAddCardVisibility();
        }
      },
      deleteCourier(index) {
        this.couriers.splice(index, 1);
      },
      resetForm() {
        this.newCourier = {
          name: "",
          phoneNumber: "",
          vehicleType: "",
          licensePlate: ""
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
  .couriers-list {
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
  