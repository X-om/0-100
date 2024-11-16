const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



// Import routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

require('./cron/reminderJob');

const app = express();
const port = 3000;

// Database connection
mongoose.connect("mongodb+srv://om:Om%401032230472@cluster0.dwoqx.mongodb.net/week4").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});

app.use(express.json());
app.use(cors());

app.use("/", authRoutes); // Mount auth routes on /auth
app.use("/", todoRoutes); // Mount todo routes on /todos

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


