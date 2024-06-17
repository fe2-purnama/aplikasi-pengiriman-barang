<template>
    <div class="container">
      <h1 class="mt-1 mb-3">Daftar Pengguna</h1>
      <div v-if="users.length">
        <table class="table">
          <thead>
            <tr>
              <th>Nama Lengkap</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Peran</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.fullName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phoneNumber }}</td>
              <td>{{ user.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Tidak ada pengguna yang terdaftar.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Users',
    data() {
      return {
        users: [],
      };
    },
    mounted() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/users/all-users');
          this.users = response.data;
        } catch (error) {
          console.error('Terjadi kesalahan saat mengambil data pengguna:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .table th {
    background-color: #f2f2f2;
    text-align: left;
  }
  </style>
  