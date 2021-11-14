const mongoose  = require("mongoose")


mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
    console.log("connection established successfully")
}).catch((e)=>{
    console.log(`connection failed ${e}`)
})