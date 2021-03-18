const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const pool = require("./db")
const app = express()
const PORT =process.env.PORT || 8000

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("combined"))

//routes
app.get("/api/chat/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM username")
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/api/chat/messages", async (req, res) => {
    try {
        const allMessages = await pool.query("SELECT * FROM messages")
        res.json(allMessages.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.post("/api/chat/users" , async (req, res) => {
    try {
        const {username} = req.body
        const newUser = await pool.query("INSERT INTO username (username) VALUES ($1)", [username])
        res.send("New User Created")
    } catch (err) {
        console.error(err.message)
    }
    
})
app.post("/api/chat/messages" , async (req, res) => {
    try {
        const {messages} = req.body
        const newMessage = await pool.query("INSERT INTO messages (messages) VALUES ($1)", [messages])
        res.send("New Message Created")
    } catch (err) {
        console.error(err.message)
    }
    
})

app.delete("/api/chat/messages/:id", async (req, res) => {
    try {
        const {id} = req.params
        const delUser = await pool.query("DELETE FROM messages WHERE id = ($1)", [id])
        res.send("Messages Deleted")
        
    } catch (err) {
        console.error(err.message)
        
    }
})

app.put("api/chat/users/:id", async (req, res) => {
    try {
        const {id} = req.params
        const {username} =req.body
        const updateUser = await pool.query("UPDATE username SET username = ($1) WHERE id = ($2)",[username, id])
        res.send("updated")
    } catch (err) {
        console.error(err.message)
        
    }
})

app.listen(PORT, () => {
    console.log(`On port ${PORT}`)
})