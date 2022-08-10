// Slots mongoose schema
const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    price: { type: Number, required: true }, // 250 €
    description: { type: String, required: true },
    participant: {type: Number, default: 20}, // 20 participants max

    // Pourquoi il y à des files ?
    files: [{
        name: { type: String, required: true },
        base64: { type: String, required: true }
    }]
});

const Slot = mongoose.model('Slot', SlotSchema);
module.exports = Slot;