const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String
    },

    tags: {
      type: Array
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    imgUrl: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = exports = mongoose.model("Post", postSchema);
