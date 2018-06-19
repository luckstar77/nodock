const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('You are amazing');
});

app.listen(8000);
