const users = require('express').Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

users.get('/users', (req, res) => {
  fs.readFile(dataPath, {encoding: 'utf-8'}, (err, data) => {
    if(err) {
      console.log(err)
      return;
    }

    res.json(JSON.parse(data));
  });
});

users.get('/users/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(dataPath, {encoding: 'utf-8'}, (err, data) => {
    if(err) {
      console.log(err)
      return;
    }

    const userId = JSON.parse(data).find((user) => {
      return user._id === id
    });

    if(!userId) {
      res.status(404).send({message: `id ${id} de usuário não encontrado`});
      return;
    }

    res.send(userId);
  });
});

module.exports = users;