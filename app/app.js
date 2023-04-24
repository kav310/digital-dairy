// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Add bootstrap
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

// Get the functions in the db.js file to use
const db = require('./services/db');

// Create a route for root - /
app.get("/", function(req, res) {
     res.render("index");
});

// Create a route for login - /
app.get("/login", function(req, res) {
    res.render("loginPage")
});

// Create a route for sign up - /
app.get("/signUp", function(req, res) {
    res.render("signupPage")
})
app.get("/memories", function(req, res) {
    res.render("memories")
})
app.get("/editMemory", function(req, res) {
    res.render("editMemory")
})
app.get("/memoryList", function(req, res) {
    res.render("listMemory")
})
app.get("/mainPage", function(req, res) {
    res.render("mainPage")
})



// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});