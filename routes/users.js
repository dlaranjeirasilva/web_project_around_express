const users = require('express').Router();

const { getUsers, getUserById, createUser, updateProfile, updateAvatar } = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/:id', getUserById);
users.post('/users', createUser);
users.patch('/users/me/:id', updateProfile);
users.patch('/users/me/:id/avatar', updateAvatar);

module.exports = users;