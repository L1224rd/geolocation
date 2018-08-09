const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.static(`${__dirname}/views`));


app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/coords', (req, res) => {
  console.log(req.query);
  res.send('');
});
app.listen(process.env.PORT || 3000, () => {
  console.log('READY');
});