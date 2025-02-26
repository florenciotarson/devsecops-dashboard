const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // ✅ Load environment variables

const app = express();
app.use(cors());

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const API_AUDIENCE = process.env.API_AUDIENCE;

app.get("/secure-data", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    try {
        const decoded = jwt.decode(token); // Basic decode
        res.json({ message: "Authenticated", user: decoded });
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
