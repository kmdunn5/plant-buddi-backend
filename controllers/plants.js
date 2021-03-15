///////////////////////////
////    Requirements   ////
///////////////////////////
const express = require('express');
const PLANTS = express.Router();
const Plant = require('../models/Plant')


///////////////////////////
////       Routes      ////
///////////////////////////
PLANTS.get('/', (req, res) => {
    Plant.find({}, (err, foundPlants) => {
        if (err) {
            res.status(400).json({ error: err.message});
        }
        res.status(200).json(foundPlants);
    });
});

PLANTS.post('/', (req, res) => {
    Plant.create(req.body, (err, createdPlant) => {
        if (err) {
            res.status(400).json({ error: err.message});
        }
        res.status(200).json(createdPlant);
    });
});

module.exports = PLANTS;