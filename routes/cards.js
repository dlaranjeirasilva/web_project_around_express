const cards = require('express').Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

cards.get('/cards', (req, res) => {
  fs.readFile(dataPath, {encoding: 'utf-8'}, (err, data) => {
    if(err) {
      console.log(err)
      return;
    }

    res.json(JSON.parse(data));
  });
});

module.exports = cards;