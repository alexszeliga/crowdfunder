const db = require("../models");
const path = require("path");

module.exports = function(app) {
  app.get("/api/all-users", function(req, res) {
    db.User.find(function(err, allUsers) {
      allUsers.filter(user => {
        user.password = undefined;
      });
      res.json(allUsers);
    });
  });
  app.post("/api/user", function(req, res) {
    db.User.create(req.body)
      .then(function(userAddResponse) {
        res.json(userAddResponse);
      })
      .catch(function(err) {
        res.json(err);
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
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
