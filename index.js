const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//body parser middleware
app.use(bodyParser.json())

//Bulb Router
const bulbRoute = require('./routes/bulbs');
app.use('/api/bulbs',bulbRoute);


//listen for requests
app.listen(4000, (req, res) => {
    console.log("listening for requests");
});
