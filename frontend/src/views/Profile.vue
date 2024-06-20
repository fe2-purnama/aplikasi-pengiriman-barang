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
                <img src="/public/profile.jpg" alt="Profile Picture" class="img-fluid rounded-circle">
              </div>
              <div class="col-md-8">
                <h4>{{ profile.fullName }}</h4>
                <p>Email: {{ profile.email }}</p>
                <p>Phone Number: {{ profile.phoneNumber }}</p>
                <p>City: {{ profile.city }}</p>
                <p>Country: {{ profile.country }}</p>
                <button v-if="!isEditing" class="btn btn-primary" @click="editProfile">Edit</button>
                <button v-else class="btn btn-primary" @click="cancelEditing">Cancel</button>
              </div>
            </div>
            <form v-if="isEditing" @submit.prevent="submitEdit">
              <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" v-model="editedProfile.fullName" class="form-control">
              </div>
              <!-- <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="editedProfile.email" class="form-control">
              </div> -->
              <div class="form-group">
                <label for="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" v-model="editedProfile.phoneNumber" class="form-control">
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" v-model="editedProfile.city" class="form-control">
              </div>
              <div class="form-group">
                <label for="country">Country:</label>
                <input type="text" id="country" v-model="editedProfile.country" class="form-control">
              </div>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  data() {
    return {
      profile: {
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: "",
        picture: "https://via.placeholder.com/150" // Placeholder image
      },
      editedProfile: {
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        country: ""
      },
      isEditing: false
    };
  },
  async created() {
    // Memuat profil pengguna saat komponen dibuat
    await this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      try {
        const token = VueCookies.get('token');
        if (token) {
          const response = await axios.get('https://kirimkan-be.vercel.app/api/v1/users/authenticate', 
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          console.log(response.data);
          const userData = response.data.data.user;
          this.profile.fullName = userData.userProfile.fullName;
          this.profile.email = userData.email;
          this.profile.phoneNumber = userData.userProfile.phoneNumber;
          this.profile.city = userData.userProfile.city;
          this.profile.country = userData.userProfile.country;
          // Menyalin data ke editedProfile untuk mengizinkan pengeditan
          this.editedProfile.fullName = userData.userProfile.fullName;
          this.editedProfile.email = userData.email;
          this.editedProfile.phoneNumber = userData.userProfile.phoneNumber;
          this.editedProfile.city = userData.userProfile.city;
          this.editedProfile.country = userData.userProfile.country;
        } else {
          console.error('Token not found in cookies.');
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
    editProfile() {
      this.isEditing = true;
    },
    cancelEditing() {
      this.isEditing = false;
      // Reset editedProfile ke data profil saat ini
      this.editedProfile.fullName = this.profile.fullName;
      this.editedProfile.email = this.profile.email;
      this.editedProfile.phoneNumber = this.profile.phoneNumber;
      this.editedProfile.city = this.profile.city;
      this.editedProfile.country = this.profile.country;
    },
    async submitEdit() {
      try {
        const token = VueCookies.get('token');
        if (token) {
          const response = await axios.put(
            'https://kirimkan-be.vercel.app/api/v1/user-profiles/update-profile',
            this.editedProfile,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
            }
          );
          console.log('Edit profile response:', response.data);
          // Jika berhasil disimpan, update profile dengan data yang telah diedit
          this.profile.fullName = this.editedProfile.fullName;
          this.profile.email = this.editedProfile.email;
          this.profile.phoneNumber = this.editedProfile.phoneNumber;
          this.profile.city = this.editedProfile.city;
          this.profile.country = this.editedProfile.country;
          // Reset editedProfile untuk persiapan edit berikutnya
          this.editedProfile = { ...this.editedProfile };
          this.isEditing = false; // Keluar dari mode edit setelah berhasil disimpan
        } else {
          console.error('Token not found in cookies.');
        }
      } catch (error) {
        console.error("Error editing profile:", error);
      }
    }
  },
  mounted() {
    this.fetchProfile();
  }
};
</script>

<style scoped>
.container {
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