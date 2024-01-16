const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
  .then(users => res.send({ data: users }))
  .catch((err) => {
    res.status(500).send({message: `Error: ${err}`})
  });
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
  .orFail(() => {
    const error = new Error(`Nenhum usuário encontrado com id ${req.params.id}`)
    error.name = 'ObjectNotFoundError'
    error.httpStatusCode = 404;
    throw error;
  })
  .then(user => res.send({data: user}))
  .catch((err) => {
    if(err.name === 'CastError') {
      return res.status(400).send(
        {
          description: `O campo ID possui 24 caracteres, foram enviados ${req.params.id.length}`,
          message: `${err}`
        });
    }
    if(err.name === 'ObjectNotFoundError') {
      return res.status(err.httpStatusCode).send({message: `${err}`});
    }
    return res.status(500).send({message: `Error: ${err}`})
  });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
  .then(user => res.send({ data: user}))
  .catch((err) => {
    if(err.name === 'ValidationError') {
      return res.status(400).send({message: `Error: ${err}`})
    }
    return res.status(500).send({message: `Error: ${err}`})
  });
};

module.exports.updateProfile = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      about: req.body.about
    },
    { new: true } //retornar o documento atualizado após a alteração
  )
  .then(user => res.send({ data: user}))
  .catch((err) => {
    res.status(500).send({message: `Error: ${err}`})
  });
};

module.exports.updateAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      avatar: req.body.avatar
    },
    { new: true } //retornar o documento atualizado após a alteração
  )
  .then(user => res.send({ data: user}))
  .catch((err) => {
    res.status(500).send({message: `Error: ${err}`})
  });
};