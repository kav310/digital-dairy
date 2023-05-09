// Import express.js
const express = require("express");
const { User } = require("./models/user");

// Create express app
let app = express();

// Add static files location
app.use(express.static("static"));

// Add bootstrap
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));

// Use the Pug templating engine
app.set("view engine", "pug");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: true }));

// Get the functions in the db.js file to use
const db = require("./services/db");

// Create a route for root - /
app.get("/", function (req, res) {
  res.render("index");
});

// Create a route for login - /
app.get("/login", function (req, res) {
  res.render("loginPage");
});

// Create a route for sign up - /
app.get("/signUp", function (req, res) {
  res.render("signupPage");
});
app.get("/memories", function (req, res) {
  res.render("memories");
});
app.get("/editMemory", function (req, res) {
  res.render("editMemory");
});
app.get("/memoryList", function (req, res) {
  res.render("listMemory");
});
app.get("/mainPage", function (req, res) {
  res.render("mainPage");
});

app.post("/register", async function (req, res) {
  console.log(req);
  params = req.body;
  let user = new User(params.email);
  try {
    uId = await user.getIdFromEmail();
    if (uId) {
      // If a valid, existing user is found, set the password and redirect to the users single-student page
      await user.setUserPassword(params.password);
      res.redirect("/mainPage");
    } else {
      // If no existing user is found, add a new one
      newId = await user.addUser(params.email);
      res.redirect("/login");
    }
  } catch (err) {
    console.error(`Error while adding password `, err.message);
  }
});

app.post("/authenticate", async function (req, res) {
  params = req.body;
  let user = new User(params.email);
  try {
    uId = await user.getIdFromEmail();
    if (uId) {
      match = await user.authenticate(params.password);
      if (match) {
        res.redirect("/single-student/" + uId);
      } else {
        // TODO improve the user journey here
        res.send("invalid password");
      }
    } else {
      res.send("invalid email");
    }
  } catch (err) {
    console.error(`Error while comparing `, err.message);
  }
});

// Start server on port 3000
app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
