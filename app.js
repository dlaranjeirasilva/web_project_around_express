const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/aroundb');

app.use((req, res, next) => {
  req.user = {
    _id: '658a206f4f536ada2da6e410',
  };
  next();
});

app.use('/', cards);
app.use('/', users);
app.use((req, res, next) => {
  res.status(404).json({ message: `A solicitação ${req.url} não foi encontrada` });
  next();
});

app.listen(PORT, () => {
  console.log(`O App está escutando na porta ${PORT}`);
});
