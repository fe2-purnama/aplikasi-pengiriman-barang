const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pickUpSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  noTrack: { type: String, required: true },
}, 
  {
    sender: { type: Schema.Types.ObjectId, ref: 'Sender' } 
  },
  { timestamps: true });

const PickUp = mongoose.model('PickUp', pickUpSchema);

module.exports = PickUp;
