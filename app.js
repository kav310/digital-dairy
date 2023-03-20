const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove 
app.use(express.urlencoded({extended: true})); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// MySQL Code goes here
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'digital_dairy_schema'
})

app.set('view engine', 'pug');
app.set('views', '/views');

app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from tbl_memory_history', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
                res.render("mainPage", {items: rows});
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from memory history table are: \n', rows)
        })
    })
})

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))