const User = require('../models/user');

const ERROR_CODE = 400;
const NOT_FOUND_CODE = 404;
const SERVER_ERROR_CODE = 500;

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .orFail(() => {
      const error = new Error(`Nenhum usuário encontrado com id ${req.params.id}`);
      error.name = 'ObjectNotFoundError';
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(ERROR_CODE).send(
          {
            description: `O campo ID possui 24 caracteres, foram enviados ${req.params.id.length}`,
            message: `${err}`,
          },
        );
      }
      if (err.name === 'ObjectNotFoundError') {
        return res.status(NOT_FOUND_CODE).send({ message: `${err}` });
      }
      return res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(ERROR_CODE).send({ message: `Error: ${err}` });
      }
      return res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const updateProfile = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      about: req.body.about,
    },
    { new: true }, // retornar o documento atualizado após a alteração
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const updateAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      avatar: req.body.avatar,
    },
    { new: true }, // retornar o documento atualizado após a alteração
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateAvatar,
  updateProfile,
};
