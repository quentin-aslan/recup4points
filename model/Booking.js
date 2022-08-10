const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    slotID: { type: mongoose.Schema.Types.ObjectId, ref: 'Slot' },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bornDate: { type: Date, required: true },
    bornPlace: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    files: [{ // Dans le cas où l'utilisateur auraient plusieurs images à envoyer
        name: { type: String, required: true },
        base64: { type: String, required: true }
    }]
});

const Booking = mongoose.model('User', BookingSchema)
module.exports = Booking;
