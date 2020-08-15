const express = require('express');
const requireDir = require('require-dir');

// Starting App
const app = express();

// Starting database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true, 
    useUnifiedTopology: true 
});

requireDir('./src/models');


const Product = mongoose.model('Product');

// First route
app.get('/', function( req, res){
    Product.create({
        title: 'React Native',
        description: 'Build Native apps with React',
        url: '/'
    })
    return res.status(200).send('Hello');
});


app.listen(3001);