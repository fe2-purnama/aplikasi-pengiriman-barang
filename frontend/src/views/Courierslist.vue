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
        <tr v-for="(courier, index) in couriers" :key="courier._id">
          <td>{{ courier.name }}</td>
          <td>{{ courier.phoneNumber }}</td>
          <td>{{ courier.vehicleType }}</td>
          <td>{{ courier.licensePlate }}</td>
          <td>
            <button class="btn btn-primary" @click="editCourier(index)">
              Edit
            </button>
            <button
              class="btn btn-danger"
              @click="deleteCourier(courier._id, index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="isAddCardVisible" class="card">
      <div class="card-header">Add New Courier</div>
      <div class="card-body">
        <form
          @submit.prevent="editingIndex === null ? addCourier() : saveCourier()"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="newCourier.name"
              id="name"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="text"
              v-model="newCourier.phoneNumber"
              id="phoneNumber"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="vehicleType">Vehicle Type</label>
            <input
              type="text"
              v-model="newCourier.vehicleType"
              id="vehicleType"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="licensePlate">License Plate</label>
            <input
              type="text"
              v-model="newCourier.licensePlate"
              id="licensePlate"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ editingIndex === null ? "Add Courier" : "Save Courier" }}
          </button>
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
        Add Courier
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      couriers: [],
      newCourier: {
        name: "",
        phoneNumber: "",
        vehicleType: "",
        licensePlate: "",
      },
      editingIndex: null,
      isAddCardVisible: false,
    };
  },
  created() {
    this.fetchCouriers();
  },
  methods: {
    async fetchCouriers() {
      try {
        const response = await axios.get(
          "https://kirimkan-be.vercel.app/api/v1/couriers"
        );
        const couriersData = response.data.data;
        console.log(response.data.data);
        this.couriers = []; // Clear the current couriers array

        // Manually push each courier to the couriers array
        for (let i = 0; i < couriersData.length; i++) {
          const courier = couriersData[i];
          this.couriers.push({
            _id: courier._id,
            name: courier.name,
            phoneNumber: courier.phoneNumber,
            vehicleType: courier.vehicleType,
            licensePlate: courier.licensePlate,
          });
        }
      } catch (error) {
        console.error("Error fetching couriers:", error);
      }
    },
    async addCourier() {
      try {
        const response = await axios.post(
          "https://kirimkan-be.vercel.app/api/v1/couriers/create-courier",
          this.newCourier
        );
        this.couriers.push(response.data.data.courier);
        this.resetForm();
        this.toggleAddCardVisibility();
      } catch (error) {
        console.error("Error adding courier:", error);
      }
    },
    async saveCourier() {
      try {
        const response = await axios.put(
          `https://kirimkan-be.vercel.app/api/v1/couriers/${
            this.couriers[this.editingIndex]._id
          }`,
          this.newCourier
        );
        this.couriers.splice(this.editingIndex, 1, response.data.data.courier);
        this.resetForm();
        this.toggleAddCardVisibility();
        this.reloadData();
      } catch (error) {
        console.error("Error saving courier:", error);
      }
    },
    async deleteCourier(id, index) {
      try {
        await axios.delete(
          `https://kirimkan-be.vercel.app/api/v1/couriers/${id}`
        );
        this.couriers.splice(index, 1);
      } catch (error) {
        console.error("Error deleting courier:", error);
      }
    },
    async editCourier(index) {
      if (!this.isAddCardVisible) {
        // Check if the add card is not visible
        const courierToEdit = this.couriers[index];
        this.newCourier = { ...courierToEdit };
        this.editingIndex = index;
        this.isAddCardVisible = true; // Show the card for editing
      }
    },
    resetForm() {
      this.newCourier = {
        name: "",
        phoneNumber: "",
        vehicleType: "",
        licensePlate: "",
      };
      this.editingIndex = null;
    },
    toggleAddCardVisibility() {
      this.isAddCardVisible = !this.isAddCardVisible;
    },
    reloadData() {
      this.fetchCouriers();
    },
  },
};
</script>

<style scoped>
.couriers-list {
  font-family: Arial, sans-serif;
  padding: 20px;
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
