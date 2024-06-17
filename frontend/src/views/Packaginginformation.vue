<template>
  <div class="container">
    <h1 class="mb-4">Package Information</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Type: {{ packageInfo.type }}</h5>
        <p class="card-text">
          <strong>Item Name:</strong> {{ packageInfo.itemName }}
        </p>
        <p class="card-text">
          <strong>Quantity:</strong> {{ packageInfo.quantity }}
        </p>
        <p class="card-text">
          <strong>Item Value:</strong> ${{ packageInfo.itemValue }}
        </p>
        <p class="card-text">
          <strong>Weight:</strong> {{ packageInfo.weight }} kg
        </p>
        <p class="card-text">
          <strong>Dimensions:</strong> {{ packageInfo.height }} cm (H) x {{ packageInfo.width }} cm (W)
        </p>
        <p class="card-text">
          <strong>Remarks:</strong> {{ packageInfo.remarks }}
        </p>
        <p class="card-text">
          <strong>Shipment ID:</strong> {{ packageInfo.shipmentId }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageInfo: {
        type: "goods",
        itemName: "Books",
        quantity: "5",
        itemValue: "100",
        weight: 10,
        height: 20,
        width: 15,
        remarks: "Handle with care",
        shipmentId: "6668838a583d85dada4b45a3"
      }
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 20px;
}

.card {
  max-width: 600px;
  margin: 0 auto;
}

.card-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.card-text {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
