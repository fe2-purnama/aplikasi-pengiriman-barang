<template>
    <div class="users-list mt-5">
      <h2>Data</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>Country</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phoneNumber }}</td>
            <td>{{ user.city }}</td>
            <td>{{ user.country }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button class="btn btn-primary" @click="editUser(index)">Edit</button>
              <button class="btn btn-danger" @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Card form tambah data -->
      <div v-if="isAddCardVisible" class="card">
        <div class="card-header">
          Add New User
        </div>
        <div class="card-body">
          <form @submit.prevent="addUser">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" v-model="newUser.fullName" id="fullName" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" v-model="newUser.email" id="email" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input type="text" v-model="newUser.phoneNumber" id="phoneNumber" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" v-model="newUser.city" id="city" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" v-model="newUser.country" id="country" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="role">Role</label>
              <input type="text" v-model="newUser.role" id="role" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Add User</button>
            <button type="button" class="btn btn-secondary" @click="toggleAddCardVisibility">Cancel</button>
          </form>
        </div>
      </div>
  
      <!-- Button Add User -->
      <div v-if="!isAddCardVisible">
        <button type="button" class="btn btn-primary" @click="toggleAddCardVisibility">Add User</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          {
            fullName: "danar",
            email: "danarzulfi@gmail.com",
            phoneNumber: "082114103459",
            city: "New York",
            country: "USA",
            role: "User",
          },
          // You can add more user data here
        ],
        newUser: {
          fullName: "",
          email: "",
          phoneNumber: "",
          city: "",
          country: "",
          role: "",
        },
        editingIndex: null,
        isAddCardVisible: false, // Flag untuk mengontrol visibilitas card tambah data
      };
    },
    methods: {
      addUser() {
        this.users.push({ ...this.newUser });
        this.resetForm();
        this.toggleAddCardVisibility();
      },
      editUser(index) {
        this.newUser = { ...this.users[index] };
        this.editingIndex = index;
      },
      saveUser() {
        if (this.editingIndex !== null) {
          this.users.splice(this.editingIndex, 1, { ...this.newUser });
          this.resetForm();
        }
      },
      deleteUser(index) {
        this.users.splice(index, 1);
      },
      resetForm() {
        this.newUser = {
          fullName: "",
          email: "",
          phoneNumber: "",
          city: "",
          country: "",
          role: "",
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
  .users-list {
    font-family: Arial, sans-serif;
    padding: 20px;
    /* margin-top: 100px; */
    height: calc(100vh - 40px);
  }
  
  .btn{
    margin-left: 5px;
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
  </style>