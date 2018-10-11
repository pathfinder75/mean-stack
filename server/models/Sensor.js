const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SensorSchema = new Schema({
    name: {
        type: String,
        // required: true,
        max: 40
    },
    value: {
        type: String,
        // required: true
    },
    sequence: {
        type: String,
        // required: true
    },
    id: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Sensor = mongoose.model('sensors', SensorSchema);