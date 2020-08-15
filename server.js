const express = require('express');
const requireDir = require('require-dir');

// Starting App
const app = express();
app.use(express.json());

// Starting database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true, 
    useUnifiedTopology: true 
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);