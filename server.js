require("dotenv").config();
const express = require("express");
const db = require("./config/database");

const app = express();

app.use(express.json());

app.use("/api/todos", require("./routes/api/todos"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
