const dotenv = require("dotenv").config();
const path = require("path");
var session = require("express-session");

var passport = require("./config/passport");

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
// const logger = require("morgan");

const API_PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = `mongodb://${process.env.DB_USER}:${
  process.env.DB_PASS
}@ds161134.mlab.com:61134/heroku_hvz63prr`;

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.static(path.join(__dirname, "client/build")));
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "messed up unique string that is unlikely to be guessed",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
