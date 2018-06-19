const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('You are pretty cool');
});

app.listen(10000);
