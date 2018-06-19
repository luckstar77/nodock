const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const MongoUrl = 'mongodb://mongo:27017/nodock';

app.get('/', function(req, res) {
  MongoClient.connect(MongoUrl, function(err, db) {
    if (err !== null) {
      res.send('Could not connect to MongoDB');
    } else {
      res.send('Connected to MongoDB');
      db.close();
    }
  });
});

app.listen(8000);
