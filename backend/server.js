const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs')

const datapath = "../database/users.json"

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post("/createuser", async (req, res) => {

    const { name, password } = req.body

    if (!name || !password ) {
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