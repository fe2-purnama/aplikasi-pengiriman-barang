<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">My Profile</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                  <img src="https://via.placeholder.com/150" alt="Profile Picture" class="img-fluid rounded-circle">
                </div>
                <div class="col-md-8">
                  <h4>{{ profile.fullName }}</h4>
                  <p>Phone Number: {{ profile.phoneNumber }}</p>
                  <p>City: {{ profile.city }}</p>
                  <p>Country: {{ profile.country }}</p>
                  <button class="btn btn-primary" @click="editProfile">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          fullName: "John Doe 123123123123",
          phoneNumber: "1234567890",
          city: "New York",
          country: "USA"
        }
      };
    },
    methods: {
      editProfile() {
        console.log("Edit Profile");
      }
    }
  };
  </script>
  
  <style scoped>
  .container{
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .card {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    background-color: #ffa500 !important;
    color: #fff;
    border-radius: 10px 10px 0 0;
  }
  </style>
  