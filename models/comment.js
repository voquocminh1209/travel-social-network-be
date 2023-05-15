const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
  content: {
    type: String, 
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post', 
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    reuired: true
  }]
}, {timestamps: true})

module.exports = mongoose.model("Comment", commentSchema);