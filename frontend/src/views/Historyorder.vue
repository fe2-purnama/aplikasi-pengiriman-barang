<template>
  <div class="history-order-list mt-5">
    <h2>Order History</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Status</th>
          <!-- <th>Total</th> -->
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shipment, index) in shipments" :key="shipment._id">
          <td>{{ shipment._id }}</td>
          <td>{{ formatDate(shipment.createdAt) }}</td>
          <td>{{ shipment.status }}</td>
          <!-- <td>{{ shipment.total | currency }}</td> -->
          <td>
            <button class="btn btn-primary" @click="viewShipmentDetails(index)">
              View Details
            </button>
          </td>
        </tr>
        <tr v-if="shipments.length === 0">
          <td colspan="5" class="text-center">No shipments found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  data() {
    return {
      shipments: [],
    };
  },
  created() {
    this.authenticateUser();
  },
  methods: {
    async authenticateUser() {
      try {
        const token = VueCookies.get('token');
        if (token) {
          const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/users/authenticate', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          console.log(response.data);
          if (response.data.status && response.data.data && response.data.data.user.shipments) {
            // Filter shipments to include only those with a serviceId
            this.shipments = response.data.data.user.shipments.filter(shipment => shipment.serviceId);
            console.log("Filtered shipments:", this.shipments);
          }
        } else {
          console.error("User not authenticated");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    viewShipmentDetails(index) {
      const shipment = this.shipments[index];
      alert(`Shipment Details:\n\nID: ${shipment._id}\nDate: ${this.formatDate(shipment.createdAt)}\nStatus: ${shipment.status}`);
    }
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.history-order-list {
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

.table tr:nth-child(odd) {
  background-color: #ffffff;
}

.text-center {
  text-align: center;
}

.btn {
  margin-right: 5px;
}
</style>
