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
          <h2>Invoice #{{ invoiceNumber }}</h2>
          <p>Date: {{ invoiceDate }}</p>
        </div>
        <div class="sender">
            <p>Nama Pengirim : {{ sender.name }}</p>
            <p>Alamat Pengirim : {{ sender.address }}</p>
            <p>No Telp Pengirim : {{ sender.phoneNumber }}</p>
        </div>
        <div class="invoice-items">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.description }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="invoice-total">
          <h3>Total: {{ total }}</h3>
        </div>
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
        },
        recipient: {
          name: 'Client Name',
          address: '5678 Another St, City, Country',
          phoneNumber: '+0987654321',
        },
        items: [
          { id: 1, description: 'Item 1', quantity: 2, price: 50, total: 100 },
          { id: 2, description: 'Item 2', quantity: 1, price: 150, total: 150 },
        ],
      };
    },
    computed: {
      total() {
        return this.items.reduce((sum, item) => sum + item.total, 0);
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
        axios.get(`https://kirimkan-be.vercel.app/api/v1/senders/${shipmentId}`)
          .then(response => {
            const sender = response.data;
            this.sender.name = sender.name;
            this.sender.address = `${sender.address}, ${sender.originCity}, ${sender.postCode}`;
            this.sender.phoneNumber = sender.phoneNumber;
          })
          .catch(error => {
            console.error('Error fetching sender details:', error);
          });
      },
    },
    created() {
      const shipmentId = '6668838a583d85dada4b45a3';  // Ganti dengan ID yang valid
      this.fetchSenderDetails(shipmentId);
    },
  };
  </script>
  
  <style scoped>
  .invoice-container {
    padding: 20px;
    font-family: Arial, sans-serif;
    margin-top: 100px;
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
  
  .invoice-details, .invoice-info, .invoice-items, .invoice-total {
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
  
  .invoice-items th, .invoice-items td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .invoice-items th {
    background-color: #f2f2f2;
  }

  .sender{
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
  