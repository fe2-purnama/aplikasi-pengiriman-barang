<template>
    <b-modal v-model="modalShow" title="Shipment Details">
      <p><strong>Order ID:</strong> {{ shipment._id }}</p>
      <p><strong>Date:</strong> {{ formatDate(shipment.createdAt) }}</p>
      <p><strong>Status:</strong> {{ shipment.status }}</p>
      <!-- Tambahkan info detail pengiriman sesuai kebutuhan -->
    </b-modal>
  </template>
  
  <script>
  export default {
    props: {
      shipment: Object, // Properti untuk menerima objek pengiriman
    },
    data() {
      return {
        modalShow: false,
      };
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      },
    },
  };
  </script>
  