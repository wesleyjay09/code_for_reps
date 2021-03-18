const express = require("express");
const morgan = require('morgan');
const PORT = process.env.PORT || 7000;
const pool = require('./db');
const app = express();
const cors = require("cors");

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('combined'))
app.use(express.static('public'))

//routes

app.post("/api/chat/user", async(req, res)=>{
    try {
      const  {username} = req.body;
      const newUser = await pool.query("INSERT INTO chat (username) VALUES ($1) RETURNING *", [username]);
      res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

app.post("/api/chat/messages", async(req, res)=>{
    try {
      const  {messages} = req.body;
      const newMessage = await pool.query("INSERT INTO chat (messages) VALUES ($1) RETURNING *", [messages]);
      res.json(newMessage.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})


app.get ("/api/chat/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM username")
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.get ("/api/chat/messages", async (req, res) => {
    try {
        const allMessages = await pool.query("SELECT * FROM messages")
        res.json(allMessages.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.get ("/api/chat/users/:id", async (req, res) => {
    try {
        const {id} = req.params
        const users = await pool.query("SELECT * FROM username WHERE id = ($1)", [id])
        res.json(users.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/api/chat/messages/:id", async (req, res) => {
    try {
        const {id} = req.params
        const messages = await pool.query("SELECT * FROM messages WHERE id = ($1)", [id])
        res.json(messages.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.delete("/api/chat/messages/:id", async (req, res) => {
    try {
        const {id} = req.params
        const delMessage = await pool.query("DELETE FROM messages WHERE id = ($1)", [id])
        res.send("Deleted")
        
        
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT , () => {
    console.log(`on port ${PORT}`)
})