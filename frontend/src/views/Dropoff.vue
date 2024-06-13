<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-primary text-white">
        <h3 class="mb-0">Drop Off Request</h3>
      </div>
      <div class="card-body">
        <div class="grid-container">
          <!-- Left side - Form -->
          <div class="form-section">
            <form @submit.prevent="submitDropOffRequest">
              <!-- Receiver Details -->
              <div class="card mb-4">
                <div class="card-header bg-secondary text-white">Receiver Details</div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="receiverName">Name</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="text" class="form-control" id="receiverName" v-model="dropOffRequest.receiver.name" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="receiverPhoneNumber">Phone Number</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-phone"></i></span>
                      </div>
                      <input type="text" class="form-control" id="receiverPhoneNumber" v-model="dropOffRequest.receiver.phoneNumber" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="destinationCity">City</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-city"></i></span>
                      </div>
                      <input type="text" class="form-control" id="destinationCity" v-model="dropOffRequest.receiver.destinationCity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="postCode">Post Code</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-mail-bulk"></i></span>
                      </div>
                      <input type="text" class="form-control" id="postCode" v-model="dropOffRequest.receiver.postCode" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="address">Address</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-map-marker-alt"></i></span>
                      </div>
                      <textarea class="form-control" id="address" v-model="dropOffRequest.receiver.address" required></textarea>
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
                      <select class="form-control" id="courier" v-model="dropOffRequest.courierId" required>
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
                      <select class="form-control" id="service" v-model="dropOffRequest.serviceId" required>
                        <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }}</option>
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
                      <input type="text" class="form-control" id="packageType" v-model="dropOffRequest.package.type" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="itemName">Item Name</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-tag"></i></span>
                      </div>
                      <input type="text" class="form-control" id="itemName" v-model="dropOffRequest.package.itemName" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-sort-amount-up"></i></span>
                      </div>
                      <input type="number" class="form-control" id="quantity" v-model="dropOffRequest.package.quantity" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="itemValue">Item Value</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                      </div>
                      <input type="number" class="form-control" id="itemValue" v-model="dropOffRequest.package.itemValue" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="weight">Weight (kg)</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-weight"></i></span>
                      </div>
                      <input type="number" class="form-control" id="weight" v-model="dropOffRequest.package.weight" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="dimensions">Dimensions (cm)</label>
                    <div class="d-flex">
                      <div class="input-group mr-2">
                        <div class="input-group-prepend">
                          <span class="input-group-text">H</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Height" v-model="dropOffRequest.package.height" required>
                      </div>
                      <div class="input-group mr-2">
                        <div class="input-group-prepend">
                          <span class="input-group-text">W</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Width" v-model="dropOffRequest.package.width" required>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">L</span>
                        </div>
                        <input type="number" class="form-control" placeholder="Length" v-model="dropOffRequest.package.length" required>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="remarks">Remarks</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-comment"></i></span>
                      </div>
                      <textarea class="form-control" id="remarks" v-model="dropOffRequest.package.remarks"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block">Submit Request</button>
            </form>
          </div>

          <!-- Right side - Guide -->
          <div class="guide-section">
            <div class="card mb-4">
              <div class="card-header bg-info text-white">Guide to Fill the Form</div>
              <div class="card-body">
                <ul>
                  <li>Ensure all fields are filled correctly.</li>
                  <li>Provide accurate receiver details for smooth processing.</li>
                  <li>Select the appropriate courier and service type.</li>
                  <li>Enter package details carefully, especially dimensions and weight.</li>
                  <li>Use the remarks section for any special instructions or notes.</li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-info text-white">Additional Information</div>
              <div class="card-body">
                <p>Make sure to double-check the details before submitting the form. If you have any questions or need assistance, please contact our support team.</p>
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
      couriers: [],
      services: [],
      dropOffRequest: {
        receiver: {
          name: '',
          phoneNumber: '',
          destinationCity: '',
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
        { id: 1, name: 'Standard Service' },
        { id: 2, name: 'Express Service' }
      ];
    },
    submitDropOffRequest() {
      // Handle form submission
      console.log('Drop Off Request:', this.dropOffRequest);
      // You can send this data to the server using an API call
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-section, .guide-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

.card-header {
  font-size: 1.2em;
}

.card {
  margin-bottom: 20px;
}

.input-group-prepend .input-group-text {
  background-color: #f8f9fa;
}

.btn-block {
  margin-top: 20px;
}

.guide-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.guide-section p {
  margin-top: 10px;
}
</style>
