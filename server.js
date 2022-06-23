require("dotenv").config();
const express = require("express");
const db = require("./database/conn");
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3040;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//getall
app.get("/specs/general", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM general");
        res.json(result.rows);
        console.log(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getall
app.get("/specs/warranty", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM warranty");
        res.json(result.rows);
        console.log(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getall
app.get("/specs/other", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM other");
        res.json(result.rows);
        console.log(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getone 
app.get("/specs/general/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM general WHERE id = $1", [req.params.id]);
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getone 
app.get("/specs/warranty/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM warranty WHERE id = $1", [req.params.id]);
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getone 
app.get("/specs/other/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM other WHERE id = $1", [req.params.id]);
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on Port ${process.env.PORT}`);
})