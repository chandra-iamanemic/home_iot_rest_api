const express = require('express');
const router =  express.Router();
const Bulb = require('../models/bulb');

//get a list of bulbs from the database
router.get('/', (req, res) => {
    
    res.send({type : 'GET'});
});

//add a new bulb to the database
router.post('/', (req, res) => {
    console.log(req.body)
    Bulb.create(req.body).then((bulb) => {

        res.send(bulb);

    });

    
});

//update a ninja in the database
router.put('/:id', (req, res) => {
    
    res.send({type : 'PUT'});
});

//delete a bulb from the database
router.delete('/:id', (req, res) => {
    
    res.send({type : 'DELETE'});
});

module.exports = router;