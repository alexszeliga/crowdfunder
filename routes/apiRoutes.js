const db = require("../models");
const path = require("path");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/user-login", passport.authenticate("local"), function(
    req,
    res
  ) {
    res.send(req.user);
  });

  // app.post("/api/user-login", function(req, res) {
  //   console.log(req.body);
  //   res.send("testing");
  // });
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

  app.get("/api/get-user", function(req, res) {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send(false);
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};
