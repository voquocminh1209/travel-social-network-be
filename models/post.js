const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    medias: [{ type: String }],
    location: { type: Object },
    tags: [{ type: String }],
    views: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" 
    }],
    likes: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" 
    }],
    comments: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Comment" 
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
