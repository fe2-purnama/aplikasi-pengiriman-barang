const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  phoneNumber: { 
    type: String, 
    required: true 
  },
  destinationCity: { 
    type: String, 
    required: true 
  },
  postCode: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  shipmentId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Shipment',
    required: true 
  },
  dropOffId: {
    type: Schema.Types.ObjectId, 
    ref: 'Dropoff',
    required: true 
  },
}, { timestamps: true });

const Recipient = mongoose.model('Recipient', recipientSchema);

module.exports = Recipient;
