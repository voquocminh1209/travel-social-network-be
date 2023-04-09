const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {type: Boolean},
  avatar: {type: String},
  address: {type: String},
  dayOfBirth: {type: Date},
  email: {type: String, default: 'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1'},
  follwers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followings: [{type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, {timestamp: true});

module.exports = mongoose.model('User', userSchema, 'user')
