const express = require('express');
const router =  express.Router();
const Bulb = require('../models/Bulb');

//get a list of bulbs from the database
router.get('/', (req, res) => {
    
    Bulb.find({room : req.query.room})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message : err});
    });
    
});

//add a new bulb to the database
router.post('/', (req, res) => {
    console.log(req.body)
    const bulb = new Bulb({
        bulb_id : req.body.bulb_id,
        room : req.body.room
    });

    bulb.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message : err});
        });

    
});

//update a ninja in the database
router.put('/:id', (req, res) => {
    
    Bulb.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Bulb.findOne({_id: req.params.id})
        .then((data) => {
            res.send(data);
        });

    })
    .catch(err => {
        res.json({message : err});
    });
});

//delete a bulb from the database
router.delete('/:id', (req, res) => {
    
    Bulb.findByIdAndRemove({_id: req.params.id})
    .then((data) => {
        res.send(data);

    })
    .catch(err => {
        res.json({message : err});
    });

    
});

module.exports = router;