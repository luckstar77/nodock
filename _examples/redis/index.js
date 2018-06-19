const express = require('express');
const app = express();
const redis = require('redis');


app.get('/', function(req, res) {
  const client = redis.createClient({
    host: 'redis',
    port: '6379',
  });

  client.on('error', function(err) {
    res.send('Could not connect to redis');
  });

  client.on('connect', function() {
    res.send('Connected to redis');
  });
});

app.listen(8000);
