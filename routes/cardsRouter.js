const cards = require('express').Router();

const { getCards, deleteCardById, createCard, likeCard, dislikeCard } = require('../controllers/cardController');

cards.get('/cards', getCards);
cards.delete('/cards/:id', deleteCardById);
cards.post('/cards', createCard);
cards.put('/cards/:cardId/likes', likeCard);
cards.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cards;