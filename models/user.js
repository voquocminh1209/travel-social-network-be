const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // Account
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    // Profile
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    address: { type: String }, // optional
    dayOfBirth: { type: Date }, // optional
    email: {
      type: String,
      lowercase: true,
    },
    avatar: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    },
    biography: { type: String },
    follwers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followings: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "user");
