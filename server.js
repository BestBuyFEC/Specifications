require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3040;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Listening on Port ${process.env.PORT}`);
})