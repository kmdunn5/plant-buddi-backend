const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    commonName: {type: String, required: true},
    scientificName: {type: String, required: true},
    image: {type: String, required: true},
    lastWatered: {type: String, required: true, default: 'Not Watered Yet'},
    howOftenToWater: {type: String, default:''},
    lastFertilized: {type: String, default:''},
    lightingRequirements: {type: String, default:''},
    notes: {type: String, default: ''}
});

module.exports = mongoose.model('Plant', plantSchema)