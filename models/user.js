var bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String
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
