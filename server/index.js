const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CRUDDatabase"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

// req is used to get information from the front-end
// res is used to send information to the front
app.post('/api/insert', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const sqlInsert = 
        "INSERT INTO users (username, password) VALUES (?,?)";
    db.query(sqlInsert, [username, password], (err, result) => {
        console.log(result);
    });
});

app.delete('/api/delete/:username', (req, res) => {
    const username = req.params.username
    const sqlDelete = 
        "DELETE FROM users WHERE username = ?";
    db.query(sqlDelete, username, (err, result) => {
        if (err) console.log(err)
    });
});

app.put('/api/update', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const sqlUpdate= 
        "UPDATE users SET password = ? WHERE username = ?";
    db.query(sqlUpdate, [password, username], (err, result) => {
        if (err) console.log(err)
    });
});

app.listen(3001, () => {
    console.log("ru on port 3001");
});