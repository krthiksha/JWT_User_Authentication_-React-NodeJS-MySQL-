const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "TypeYourDatabasePasswordHere",  
    password: "Vepl123",
    database: "auth_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});



//  ---------- API's ---------------

// Register API
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "User registered successfully!" });
    });
});



// Login API 
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(401).send({ message: "User not found" });

        const user = results[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send({ message: "Invalid credentials" });

        // Generate JWT Token
        const token = jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "1h" });
        res.send({ user: user ,message: "Login successful!", token });
        console.log({ user: user ,message: "Login successful!", token });
    });
});


