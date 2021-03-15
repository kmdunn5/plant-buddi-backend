///////////////////////////
////    Requirements   ////
///////////////////////////
const express = require('express');
const PLANTS = express.Router();
const Plants = 


///////////////////////////
////       Routes      ////
///////////////////////////
PLANTS.get('/', (req, res) => {
    Plants.find({}, (err, foundPlants) => {
        if (err) {
            res.status(400).json({ error: err.message});
        }
        res.status(200).json(foundPlants)
    })
})

module.exports = PLANTS