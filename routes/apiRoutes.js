const db = require("../models");

module.exports = function(app) {
  app.post("/api/user-new", function(req, res) {
    console.log(db.User);
    db.User.create(req.body).then(function(userAddResponse) {
      res.json(userAddResponse);
    });
  });
};
