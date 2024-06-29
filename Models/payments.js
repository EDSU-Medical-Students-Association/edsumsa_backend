const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    paymentId: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: false
    },
      paymentType: {
        type:String ,
        required: true
    },
},{timestamps:true});
const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment