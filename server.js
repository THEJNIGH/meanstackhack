'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/controllers', express.static(__dirname + '/client/controllers'));

const server = app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});

module.exports = server;
