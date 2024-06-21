<template>
  <div class="users-list mt-5">
    <h2>Data Users</h2>
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
            <button class="btn btn-danger" @click="deleteUser(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Card form tambah data -->
    <div v-if="isAddCardVisible" class="card">
      <div class="card-header">Add New User</div>
      <div class="card-body">
        <form @submit.prevent="addUser">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              v-model="newUser.fullName"
              id="fullName"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="newUser.email"
              id="email"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="text"
              v-model="newUser.phoneNumber"
              id="phoneNumber"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input
              type="text"
              v-model="newUser.city"
              id="city"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input
              type="text"
              v-model="newUser.country"
              id="country"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <input
              type="text"
              v-model="newUser.role"
              id="role"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="newUser.password"
              id="password"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Add User</button>
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

    <!-- Button Add User -->
    <div v-if="!isAddCardVisible">
      <button
        type="button"
        class="btn btn-primary"
        @click="toggleAddCardVisibility"
      >
        Add User
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      newUser: {
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: "",
        role: "",
        password: "",
      },
      isAddCardVisible: false,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://kirimkan-be.vercel.app/api/v1/users/all-users"
        );
        console.log(response.data);

        const usersData = response.data.data.users;
        this.users = [];

        for (let i = 0; i < usersData.length; i++) {
          const user = usersData[i];
          const newUser = {
            fullName: user.userProfile.fullName,
            email: user.email,
            phoneNumber: user.userProfile.phoneNumber,
            city: user.userProfile.city || "",
            country: user.userProfile.country || "",
            role: user.role,
          };
          this.users.push(newUser);
        }

        console.log(this.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async addUser() {
      try {
        const response = await axios.post(
          "https://kirimkan-be.vercel.app/api/v1/users/registerNoVerify",
          {
            fullName: this.newUser.fullName,
            email: this.newUser.email,
            phoneNumber: this.newUser.phoneNumber,
            city: this.newUser.city,
            country: this.newUser.country,
            role: this.newUser.role,
            password: this.newUser.password,
          }
        );
        console.log("User added:", response.data);
        this.users.push({ ...this.newUser });
        this.resetForm();
        this.toggleAddCardVisibility();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
    async deleteUser(index) {
      const userId = this.users[index]._id;

      try {
        const response = await axios.delete(
          `https://kirimkan-be.vercel.app/api/v1/users/${userId}`
        );
        console.log("User deleted:", response.data);
        this.users.splice(index, 1);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    resetForm() {
      this.newUser = {
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: "",
        role: "",
        password: "",
      };
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
  /* height: calc(100vh - 40px); */
}

.btn {
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
</style>