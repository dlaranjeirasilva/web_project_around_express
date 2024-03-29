const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    validate: {
      validator: (v) => /^(https?:\/\/)?(www\.)?[a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=,-]+#?$/.test(v),
      message: 'URL inválida',
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardSchema);
