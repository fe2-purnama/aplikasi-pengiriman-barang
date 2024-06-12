<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Pick Up Request</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitPickupRequest">
          <!-- Sender Details -->
          <div class="card mb-4">
            <div class="card-header bg-secondary text-white">Sender Details</div>
            <div class="card-body">
              <div class="form-group">
                <label for="senderName">Name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" id="senderName" v-model="pickupRequest.sender.name" required>
                </div>
              </div>
              <div class="form-group">
                <label for="senderPhoneNumber">Phone Number</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-phone"></i></span>
                  </div>
                  <input type="text" class="form-control" id="senderPhoneNumber" v-model="pickupRequest.sender.phoneNumber" required>
                </div>
              </div>
              <div class="form-group">
                <label for="originCity">City</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-city"></i></span>
                  </div>
                  <input type="text" class="form-control" id="originCity" v-model="pickupRequest.sender.originCity" required>
                </div>
              </div>
              <div class="form-group">
                <label for="postCode">Post Code</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-mail-bulk"></i></span>
                  </div>
                  <input type="text" class="form-control" id="postCode" v-model="pickupRequest.sender.postCode" required>
                </div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                  </div>
                  <textarea class="form-control" id="address" v-model="pickupRequest.sender.address" required></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Courier Selection -->
          <div class="card mb-4">
            <div class="card-header bg-secondary text-white">Courier Selection</div>
            <div class="card-body">
              <div class="form-group">
                <label for="courier">Select Courier</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-truck"></i></span>
                  </div>
                  <select class="form-control" id="courier" v-model="pickupRequest.courierId" required>
                    <option v-for="courier in couriers" :key="courier.id" :value="courier.id">{{ courier.name }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Selection -->
          <div class="card mb-4">
            <div class="card-header bg-secondary text-white">Service Selection</div>
            <div class="card-body">
              <div class="form-group">
                <label for="service">Select Service</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-concierge-bell"></i></span>
                  </div>
                  <select class="form-control" id="service" v-model="pickupRequest.serviceId" required>
                    <option v-for="service in services" :key="service.id" :value="service.id">{{ service.nameServices }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Package Details -->
          <div class="card mb-4">
            <div class="card-header bg-secondary text-white">Package Details</div>
            <div class="card-body">
              <div class="form-group">
                <label for="packageType">Package Type</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-box"></i></span>
                  </div>
                  <input type="text" class="form-control" id="packageType" v-model="pickupRequest.package.type" required>
                </div>
              </div>
              <div class="form-group">
                <label for="itemName">Item Name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-tag"></i></span>
                  </div>
                  <input type="text" class="form-control" id="itemName" v-model="pickupRequest.package.itemName" required>
                </div>
              </div>
              <div class="form-group">
                <label for="quantity">Quantity</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-sort-amount-up"></i></span>
                  </div>
                  <input type="number" class="form-control" id="quantity" v-model="pickupRequest.package.quantity" required>
                </div>
              </div>
              <div class="form-group">
                <label for="itemValue">Item Value</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                  </div>
                  <input type="number" class="form-control" id="itemValue" v-model="pickupRequest.package.itemValue" required>
                </div>
              </div>
              <div class="form-group">
                <label for="weight">Weight (kg)</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-weight"></i></span>
                  </div>
                  <input type="number" class="form-control" id="weight" v-model="pickupRequest.package.weight" required>
                </div>
              </div>
              <div class="form-group">
                <label for="dimensions">Dimensions (cm)</label>
                <div class="d-flex">
                  <div class="input-group mr-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text">H</span>
                    </div>
                    <input type="number" class="form-control" placeholder="Height" v-model="pickupRequest.package.height" required>
                  </div>
                  <div class="input-group mr-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text">W</span>
                    </div>
                    <input type="number" class="form-control" placeholder="Width" v-model="pickupRequest.package.width" required>
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">L</span>
                    </div>
                    <input type="number" class="form-control" placeholder="Length" v-model="pickupRequest.package.length" required>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="remarks">Remarks</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-comment"></i></span>
                  </div>
                  <textarea class="form-control" id="remarks" v-model="pickupRequest.package.remarks"></textarea>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block">Submit Request</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couriers: [],
      services: [],
      pickupRequest: {
        sender: {
          name: '',
          phoneNumber: '',
          originCity: '',
          postCode: '',
          address: ''
        },
        courierId: null,
        serviceId: null,
        package: {
          type: '',
          itemName: '',
          quantity: '',
          itemValue: '',
          weight: '',
          height: '',
          width: '',
          length: '',
          remarks: ''
        }
      }
    };
  },
  created() {
    // Fetch couriers and services data when component is created
    this.fetchCouriers();
    this.fetchServices();
  },
  methods: {
    fetchCouriers() {
      // Replace with actual API call
      this.couriers = [
        { id: 1, name: 'Courier A' },
        { id: 2, name: 'Courier B' }
      ];
    },
    fetchServices() {
      // Replace with actual API call
      this.services = [
        { id: 1, nameServices: 'Standard Service' },
        { id: 2, nameServices: 'Express Service' }
      ];
    },
    submitPickupRequest() {
      // Handle form submission
      console.log('Pickup Request:', this.pickupRequest);
      // You can send this data to the server using an API call
    }
  }
};
</script>

<style scoped>
/* Add scoped CSS styles here */
</style>
