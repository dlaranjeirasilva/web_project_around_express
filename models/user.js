const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator: (v) => /^(https?:\/\/)?(www\.)?[a-zA-Z0-9._~:/?%#[\]@!$&'()*+,;=,-]+#?$/.test(v),
      message: 'URL inválida',
    },
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
