// Import express.js
const express = require("express");
const session = require("express-session");
const { User } = require("./models/user");
const { Memory } = require("./models/memory");
const { SingleMemory } = require("./models/singleMemory");

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

app.use(
  session({
    secret: "beast breaker",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

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
app.get("/addMemory", function (req, res) {
  res.render("addMemory");
});
app.get("/mainPage", function (req, res) {
  res.render("mainPage", { title: "My Title", userId: id });
});

app.post("/register", async function (req, res) {
  params = req.body;
  let user = new User(params.email);
  try {
    uId = await user.getIdFromEmail();
    if (uId) {
      // If a valid, existing user is found, set the password and redirect to the users login page
      await user.setUserPassword(params.password);
      res.redirect("/login");
    } else {
      // If no existing user is found, add a new one
      newId = await user.addUser(params.email);
      res.redirect("/login");
    }
  } catch (err) {
    console.error(`Error while adding password `, err.message);
  }
});

app.post("/addMemories", async function (req, res) {
  params = req.body;
  let id = req.session.id;
  let createdDate = new Date();
  let sql = `INSERT INTO Memorys(noteId,title,description,date,id)
            VALUES(?,?,?,?,?)`;
  let memory = [4, params.title, params.description, createdDate, id];
  db.query(sql, memory, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log("Id" + results.insertId);
  });
});

app.get("/single-memory/:id", async function (req, res) {
  let nId = req.params.id;
  let memory = new SingleMemory(nId);
  await memory.getMemory();
  console.log(memory.memory[0]);
  res.render("memories", { memory: memory.memory[0] });
});

app.post("/authenticate", async function (req, res) {
  params = req.body;
  var user = new User(params.email);
  try {
    uId = await user.getIdFromEmail();
    if (uId) {
      match = await user.authenticate(params.password);
      if (match) {
        req.session.uid = uId;
        req.session.loggedIn = true;
        let memory = new Memory(uId);
        await memory.getMemories();
        console.log(memory.data);
        res.render("mainPage", { memory: memory.data });
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
