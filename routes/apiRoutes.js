const db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findOne(req.body).then(function(userAddResponse) {
      res.json(userAddResponse);
    });
  });
};
