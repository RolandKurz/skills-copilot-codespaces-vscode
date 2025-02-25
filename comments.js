// Create web server

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.status(500).end();
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});