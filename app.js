const express = require('express');
const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', cards);
app.use('/', users);
app.use((req, res, next) => {
  res.status(404).json({ message: `A solicitação ${req.url} não foi encontrada` });
})

app.listen(PORT, () => {
  console.log(`O App está escutando na porta ${PORT}`);
})