const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const senderSchema = new Schema({
 
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  originCity: { type: String },
  postCode: { type: String },
  address: { type: String },
  pickUpId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Pickup' 
  },
  dropOffId: {
    type: Schema.Types.ObjectId, 
    ref: 'Dropoff' 
  },

}, { timestamps: true });


const Sender = mongoose.model('Sender', senderSchema);

module.exports = Sender;
