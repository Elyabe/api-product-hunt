const express = require('express');

// Starting App
const app = express();

// Starting database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

// First route
app.get('/', function( req, res){
    return res.status(200).send('Hello');
});


app.listen(3001);