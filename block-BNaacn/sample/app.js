var express = require('express');
var mongoose = require('mongoose');

// connect to mongodb

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'connected true');
})

var app = express()

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(3000, () => {
    console.log('server is listening on port 3k')
})