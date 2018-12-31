// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// export const userSchema = new Schema(
//   {
//     username: String,
//     password: String
//   },
//   { timestamps: true }
// );

// module.exports = exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model("User", userSchema);
// import Post from './post';
// import Comment from './comment.js';

console.log("Executing Model: index.js ...");
