const express = require('express');
var path = require('path');

const app = express();

let coords = {
  lat: 0,
  lng: 0
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/map.html'));
});

app.get('/coords', (req, res) => {
  coords = req.query;
  res.send('');
});


app.get('/map/get', (req, res) => {
  res.send(coords);
});


app.listen(process.env.PORT || 3000, () => {
  console.log('READY');
});