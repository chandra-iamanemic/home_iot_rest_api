const express = require('express');
const router =  express.Router();

//get a list of bulbs from the database
router.get('/', (req, res) => {
    
    res.send({type : 'GET'});
});

//add a new bulb to the database
router.post('/', (req, res) => {
    console.log(req.body);
    res.send({
        type : 'POST',
        bulb_id : req.body.bulb_id,
        room : req.body.room

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