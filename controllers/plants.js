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


/* to test the create route, or to create something in your local database
curl -X POST -H "Content-Type: application/json" -d '{"commonName":"monstera", "scientificName":"monstera spruceana", "image":"https://bs.plantnet.org/image/o/0a3b168b7eb637d717e4f6a48e9e90a91c5f67c4"}' http://localhost:3003/plants
*/
PLANTS.post('/', (req, res) => {
    Plant.create(req.body, (err, createdPlant) => {
        if (err) {
            res.status(400).json({ error: err.message});
        }
        res.status(200).json(createdPlant);
    });
});

PLANTS.put('/:id', (req, res) => {
    Plant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlant) => {
        if (err) {
            res.status(400).json({ error: err.message});
        }
        res.status(200).json(updatedPlant);
    })
})

PLANTS.delete('/:id', (req, res) => {
    Plant.findByIdAndRemove(req.params.id, (err, deletedPlant) => {
        if (err) {
            res.status(400).json({ error: err.message});
        }
        res.status(200).json(deletedPlant);
    })
})

module.exports = PLANTS;