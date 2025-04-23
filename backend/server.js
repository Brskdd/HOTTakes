const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs')
const bcrypt = require('bcrypt')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');

const datapath = "../database/users.json"

const loggedin = {} // user: key,

app.use(cors())

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post("/api/register", async (req, res) => {

    const { name, password } = req.body

    if (!name || !password) {
        return res.status(400).json({ error: "fill out the whole form" });
    }

    try {
        let users = [];

        if (fs.existsSync(datapath)) {
            const data = fs.readFileSync(datapath, 'utf8');
            users = JSON.parse(data);
        }

        if (users.some(user => user.name === name)) {
            return res.status(400).json({ error: "user already exists" });
        }

        const hashpass = await bcrypt.hash(password, 10);

        const newuser = { name, money: 20, password: hashpass };
        users.push(newuser);

        fs.writeFileSync(datapath, JSON.stringify(users, null, 2), 'utf8');

        res.status(201).json({ message: "registration successful" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.post("/api/login", async (req, res) => {
    console.log("login req")

    const { name, password } = req.body

    console.log("name: ", name)
    console.log("password: ", password)

    if (!name || !password) {
        return res.status(400).json({ error: "fill out the whole form" })
    }

    try {
        if (!fs.existsSync(datapath)) {
            return res.status(400).json({ error: "user does not exist" });
        }

        const data = fs.readFileSync(datapath, 'utf8');
        console.log("data " + data)
        const users = JSON.parse(data);
        console.log("data read from file successfully")
        const user = users.find(user => user.name === name);

        if (!user) {
            return res.status(400).json({ error: "invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: "invalid credentials" });
        }

        if (loggedin[name]) {
            return res.status(400).json({ error: "already logged in" });
        }

        loggedin[name] = user.password;

        res.status(200).json({ message: "login successful", token: user.password });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.post("/api/createuser", async (req, res) => {

    const { name, password } = req.body

    if (!name || !password) {
        return res.status(400).json({ error: "fill out the whole form" })
    }

    try {
        let users = []

        if (fs.existsSync(datapath)) {
            const data = fs.readFileSync(datapath, 'utf8')
            users = JSON.parse(data)
        }

        if (users.some(user => user.name === name)) {
            return res.status(400).json({ error: "user already exists" })
        }

        const hashpass = await bcrypt.hash(password, 10)

        const newuser = { name, money: 20, password: hashpass }
        users.push(newuser)

        fs.writeFileSync(datapath, JSON.stringify(users, null, 2), 'utf8')

        res.status(201).json({ message: "user created" })
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});