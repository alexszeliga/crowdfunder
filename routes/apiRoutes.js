const db = require("../models");

module.exports = function(app) {
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(userAddResponse) {
      res.json(userAddResponse);
    });
  });
  app.post("/api/user-login", function(req, res) {
    db.User.findOne({ username: req.body.username }, function(err, userFromDb) {
      if (userFromDb !== null) {
        if (userFromDb.validPassword(req.body.password)) {
          res.json(userFromDb.username);
        } else {
          res.send("Incorrect Password");
        }
      } else {
        // user not found
        res.send("User not found");
      }
    });
  });
};
