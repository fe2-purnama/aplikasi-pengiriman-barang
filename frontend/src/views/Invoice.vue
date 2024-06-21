<template>
  <div class="invoice-container">
    <div class="invoice-header">
      <h1></h1>
      <div class="d-flex justify-content-end" ref="printButton">
        <button class="btn btn-primary" @click="printPDF">Print to PDF</button>
      </div>
    </div>
    <div class="invoice" ref="invoice">
      <div class="invoice-details">
        <h2 class="text-center">Invoice #{{ sender.shipmentId }}</h2>
        <h2 class="text-center">{{ typeShipment.type }}</h2>
        <p>Tanggal: {{ getFormattedDate(invoiceDate) }}</p>
      </div>
      <div class="invoice-content d-flex">
        <div class="sender-details">
          <div class="sender">
            <p>Nama Pengirim : {{ sender.name }}</p>
            <p>Alamat Pengirim : {{ sender.address }}</p>
            <p>No Telp Pengirim : {{ sender.phoneNumber }}</p>
          </div>
        </div>
        <div class="recipient-details ml-auto">
          <div class="recipient">
            <p>Nama Penerima : {{ recipient.name }}</p>
            <p>Alamat Penerima : {{ recipient.address }}</p>
            <p>No Telp Penerima : {{ recipient.phoneNumber }}</p>
          </div>
        </div>
      </div>
      <div class="invoice-items">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Width</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.type }}</td>
              <td>{{ item.itemName }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.weight }}</td>
              <td>{{ item.height }}</td>
              <td>{{ item.width }}</td>
              <td>{{ item.remarks }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="invoice-total">
        <h3>Total: {{ service.price }}</h3>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <router-link to="/order" class="btn btn-secondary ml-2 mt-1">Cancel</router-link>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import html2pdf from 'html2pdf.js';
  
  export default {
    data() {
      return {
        invoiceNumber: 'INV123456789',
        invoiceDate: new Date().toLocaleDateString(),
        sender: {
          name: '',
          address: '',
          phoneNumber: '',
          shipmentId: '',
        },
        recipient: {
          name: '',
          address: '',
          phoneNumber: '',
        },
        typeShipment:{
            type: '',
        },
        service:{
            price: '',
        },
        items: [], 
      };
    },
    computed: {
      total() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
      },
    },
    methods: {
      printPDF() {
        const printButton = this.$refs.printButton;
        printButton.style.display = 'none';
        const element = this.$refs.invoice;
  
        html2pdf()
          .from(element)
          .set({
            margin: 1,
            filename: `Invoice_${this.invoiceNumber}.pdf`,
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true },
          })
          .save()
          .finally(() => {
            printButton.style.display = 'flex';
          });
      },
      fetchSenderDetails(shipmentId) {
        axios.get(`https://kirimkan-be.vercel.app/api/v1/shipments/${shipmentId}`)
          .then(response => {
            const shipment = response.data.data.shipment;
            const senderData = shipment.sender;
            this.sender.name = senderData.name;
            this.sender.address = senderData.address;
            this.sender.phoneNumber = senderData.phoneNumber;
            this.sender.shipmentId = shipmentId;
  
            const recipientData = shipment.recipient;
            this.recipient.name = recipientData.name;
            this.recipient.address = recipientData.address;
            this.recipient.phoneNumber = recipientData.phoneNumber;
  
            this.items = shipment.packages;
            console.log(response.data.data.shipment);
            this.typeShipment = shipment;

            this.service = shipment.service;
          })
          .catch(error => {
            console.error('Error fetching sender details:', error);
          });
      },
      getFormattedDate(dateString) {
        const months = [
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
          'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

        const date = new Date(dateString);
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();

        return `${dayName}, ${date.getDate()} ${monthName} ${year}`;
      },
    },
    created() {
      // Ambil shipmentId dari URL
      this.fetchSenderDetails(this.$route.params.shipmentId);
    },
  };
  </script>
  
  <style scoped>
  .invoice-container {
    margin-top: 100px;
    padding: 20px;
    font-family: Arial, sans-serif;
    margin-top: 100px;
    text-align: left;
  }
  
  .invoice-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .invoice {
    border: 1px solid #ddd;
    padding: 20px;
    background-color: #fff;
  }
  
  .invoice-details,
  .invoice-info,
  .invoice-items,
  .invoice-total {
    margin-bottom: 20px;
  }
  
  .invoice-info {
    display: flex;
    justify-content: space-between;
  }
  
  .invoice-items table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .invoice-items th,
  .invoice-items td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .invoice-items th {
    background-color: #f2f2f2;
  }
  
  .sender {
    text-align: left;
  }
  
  .d-flex {
    display: flex;
  }
  
  .justify-content-end {
    justify-content: flex-end;
  }
  
  .btn {
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    border: none;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  