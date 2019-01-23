const db = require("../models");
const path = require("path");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/new", (req, res) => {
    // console.log(req.body);
    db.Post.create(req.body).then(dbPost => {
      return db.User.findByIdAndUpdate(
        req.body.user,
        { $push: { posts: dbPost._id } },
        { new: true }
      ).then(dbUser => {
        res.send(dbUser);
      });
    });
  });
  app.post("/api/user-login", passport.authenticate("local"), function(
    req,
    res
  ) {
    res.send(req.user);
  });

  app.get("/api/all-users", function(req, res) {
    db.User.find(function(err, allUsers) {
      allUsers.filter(user => {
        user.password = undefined;
      });
      res.json(allUsers);
    });
  });

  app.get("/api/user/:id", function(req, res) {
    db.User.findById(req.params.id).then(function(userData) {
      // console.log(userData);
      userData.password = undefined;

      res.send(userData);
    });
  });
  app.get("/api/all-posts", function(req, res) {
    db.Post.find()
      .populate("users")
      .exec(function(err, allPosts) {
        res.send(allPosts);
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
  app.post("/api/update-post/:id", function(req, res) {
    console.log(req.body);

    db.Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
      console.log(post);
      res.send(post);
    });
  });

  app.get("/api/get-user", function(req, res) {
    if (req.user) {
      db.User.findOne({ username: req.user.username })
        .populate("posts")
        .exec((err, user) => {
          res.send(user);
        });
    } else {
      res.send(false);
    }
  });

  app.get("/logout", function(req, res) {
    // console.log("logout route hit");
    req.logout();
    res.send("/");
  });
  app.get("/api/single-post/:postId", function(req, res) {
    // console.log(req.params.postId);
    db.Post.findById(req.params.postId).then(postResponse => {
      // console.log(postResponse);

      res.send(postResponse);
    });
  });

  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
};
