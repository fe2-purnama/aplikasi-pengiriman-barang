<template>
  <div class="shipments-list mt-5">
    <h2>Data Shipments</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Tracking Number</th>
          <th>Type</th>
          <th>Status</th>
          <th>Courier ID</th>
          <th>Courier Name</th>
          <th>Service ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shipment, index) in shipments" :key="shipment._id">
          <td>{{ shipment.noTrack }}</td>
          <td>{{ shipment.type }}</td>
          <td>{{ shipment.status }}</td>
          <td>{{ shipment.courierId }}</td>
          <td>{{ shipment.courierName }}</td>
          <td>{{ shipment.serviceId }}</td>
          <td>
            <button class="btn btn-primary" @click="editShipment(index)">
              Edit
            </button>
            <button
              class="btn btn-danger"
              @click="deleteShipment(shipment._id, index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="isAddCardVisible" class="card">
      <div class="card-header">Add New Shipment</div>
      <div class="card-body">
        <form
          @submit.prevent="
            editingIndex === null ? addShipment() : saveShipment()
          "
        >
          <div class="form-group">
            <label for="noTrack">Tracking Number</label>
            <input
              type="text"
              v-model="newShipment.noTrack"
              id="noTrack"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="type">Type</label>
            <input
              type="text"
              v-model="newShipment.type"
              id="type"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <input
              type="text"
              v-model="newShipment.status"
              id="status"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="courierId">Courier ID</label>
            <input
              type="text"
              v-model="newShipment.courierId"
              id="courierId"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="serviceId">Service ID</label>
            <input
              type="text"
              v-model="newShipment.serviceId"
              id="serviceId"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ editingIndex === null ? "Add Shipment" : "Save Shipment" }}
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
        Add Shipment
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shipments: [],
      newShipment: {
        noTrack: "",
        type: "",
        status: "",
        courierId: "",
        name: "",
        serviceId: "",
      },
      editingIndex: null,
      isAddCardVisible: false,
    };
  },
  created() {
    this.fetchShipments();
  },
  methods: {
    async fetchShipments() {
      try {
        const response = await axios.get(
          "https://kirimkan-be.vercel.app/api/v1/shipments/"
        );
        this.shipments = response.data.data;
        console.log(response.data.data[0].courier.name);
        this.shipments.forEach((shipment) => {
          shipment.courierName = shipment.courier.name;
        });
      } catch (error) {
        console.error("Error fetching shipments:", error);
      }
    },
    async addShipment() {
      try {
        const response = await axios.post(
          "https://kirimkan-be.vercel.app/api/v1/shipments/create-shipments",
          this.newShipment
        );
        this.shipments.push(response.data.data.shipment);
        this.resetForm();
        this.toggleAddCardVisibility();
        this.reloadData(); // Reload data after adding shipment
      } catch (error) {
        console.error("Error adding shipment:", error);
      }
    },
    async saveShipment() {
      if (this.editingIndex !== null) {
        try {
          const response = await axios.put(
            `https://kirimkan-be.vercel.app/api/v1/shipments/${
              this.shipments[this.editingIndex]._id
            }`,
            this.newShipment
          );
          this.shipments.splice(
            this.editingIndex,
            1,
            response.data.data.shipment
          );
          this.resetForm();
          this.toggleAddCardVisibility();
          this.reloadData();
        } catch (error) {
          console.error("Error saving shipment:", error);
        }
      }
    },
    async deleteShipment(id, index) {
      try {
        await axios.delete(
          `https://kirimkan-be.vercel.app/api/v1/shipments/${id}`
        );
        this.shipments.splice(index, 1);
        this.reloadData(); // Reload data after deleting shipment
      } catch (error) {
        console.error("Error deleting shipment:", error);
      }
    },
    editShipment(index) {
      this.newShipment = { ...this.shipments[index] };
      this.editingIndex = index;
      this.isAddCardVisible = true;
    },
    resetForm() {
      this.newShipment = {
        noTrack: "",
        type: "",
        status: "",
        courierId: "",
        name: "",
        serviceId: "",
      };
      this.editingIndex = null;
    },
    toggleAddCardVisibility() {
      this.isAddCardVisible = !this.isAddCardVisible;
    },
    reloadData() {
      this.fetchShipments();
    },
  },
};
</script>

<style scoped>
.shipments-list {
  font-family: Arial, sans-serif;
  padding: 20px;
  /* height: calc(100vh - 40px); */
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
