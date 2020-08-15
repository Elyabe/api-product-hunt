const express = require('express');

const app = express();

app.get('/', function( req, res){
    return res.status(200).send('Hello');
});

app.listen(3001);