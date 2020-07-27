const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb database
mongoose.connect('mongodb+srv://sadlagger:mirana@123@jsapi.0xwpi.azure.mongodb.net/bulbs?retryWrites=true&w=majority')

//body parser middleware
app.use(bodyParser.json())

//Bulb Router
const bulbRoute = require('./routes/bulbs');
app.use('/api/bulbs',bulbRoute);


//listen for requests
app.listen(4000, (req, res) => {
    console.log("listening for requests");
});
