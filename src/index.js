const express = require('express')
require("../src/db/connection")
const app = express()
const cors = require('cors')
const todorouter =  require('./routers/todorouter')
const port = process.env.port | 4000 
const corsorigin = {origin : "http://localhost:4200"} 

app.use(cors(corsorigin))
app.use(express.json())
app.use(todorouter)


app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})
