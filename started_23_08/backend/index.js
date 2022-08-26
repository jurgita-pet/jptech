const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "js_08_01"
})

connection.connect((error) => {
    if (error)
        throw error;
    console.log("Connected to the database");
})


app.get("/get-allCustomer", (req, res) => {
    const sqlQuery = "SELECT * FROM customers";
    connection.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": { customers: results } }))
    })
})

app.post("/add-customer", (req, res) => {
    const newCustomer = {
        firstname: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        vip: req.body.vip == "Yes" ? 1 : 0
    };

    const sqlQuery = "INSERT INTO customers (firstname,lastname,email,phone,vip) VALUES (?,?,?,?,?)";
    connection.query(sqlQuery, [newCustomer.firstname, newCustomer.lastname,
    newCustomer.email, newCustomer.phone, newCustomer.vip
    ], (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": "Customer ID : " + results.insertId + " created!"
        }))
    })
})

app.post("/delete-customer", (req, res) => {
    const id = req.body.deleteId;
    const sqlQuery = `DELETE FROM customers WHERE id = ${id}`;
    connection.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": { customers: results } }))
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})