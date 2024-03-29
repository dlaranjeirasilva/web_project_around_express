const Card = require('../models/card');

const ERROR_CODE = 400;
const NOT_FOUND_CODE = 404;
const SERVER_ERROR_CODE = 500;

const getCards = (req, res) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const deleteCardById = (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .orFail(() => {
      const error = new Error(`Nenhum card encontrado com id ${req.params.id}`);
      error.name = 'ObjectNotFoundError';
      throw error;
    })
    .then((card) => res.send({ data: card }))
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

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }, // retornar o documento atualizado após a alteração
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }, // retornar o documento atualizado após a alteração
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      res.status(SERVER_ERROR_CODE).send({ message: `Error: ${err}` });
    });
};

module.exports = {
  getCards,
  deleteCardById,
  createCard,
  likeCard,
  dislikeCard,
};
