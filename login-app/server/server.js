const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let db;

MongoClient.connect('mongodb://localhost:27017/mydatabase', { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  db = client.db('mydatabase');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const collection = db.collection('users');
  collection.findOne({ username, password }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
      return;
    }

    if (!user) {
      res.status(401).send('Unauthorized');
      return;
    }

    res.status(200).send('Login successful');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
