const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  website: {
    type: String
  }
});

module.exports = exports = mongoose.model("Post", postSchema);
