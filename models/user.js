var bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      validate: {
        validator: function(v) {
          if (v) {
            return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
              v
            );
          } else {
            return true;
          }
        },
        message: "Invalid email address provided"
      }
    },
    password: String,
    username: String,
    location: String
  },
  { timestamps: true }
);
userSchema.methods.validPassword = function(comparePW) {
  if (bcrypt.compareSync(comparePW, this.password)) {
    return true;
  } else {
    return false;
  }
};
// before creating or saving a user
userSchema.pre("save", function() {
  var user = this;

  // cofirm change in password
  if (user.isModified("password")) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  }
});

module.exports = exports = mongoose.model("User", userSchema);
