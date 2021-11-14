const express = require('express')
const router = new express.Router()
const Todo = require('../models/todo')

app = express()

const default_json_data ={
    "todo_list" : ["Code" , "Study", "Read"],
    "done_list" : ["Play", "Walk", "Workout"]
}

router.get('/',(req,res)=>{
    res.send("Welcome to the home page")
})

router.get('/todo',async(req,res)=>{
    try{
        let response = await Todo.find({},{"_id" : 0})
        res.send(response)
    }
    catch(e){
        console.log(e)
        // res.send({"error" : e})
    }
})

router.post("/todo",async(req,res)=>{
    try{
        let data = new Todo(default_json_data)
        let response = await data.save()
        console.log(response)
        res.send({"status" : "Added Successfully"})
    }
    catch(e){
        console.log(e)
        res.send({"status" : "Some Error came"})
    }
})


router.put('/todo' , async(req,res)=>{
    try{
        console.log("came here")
        let data = req
        let response = await Todo.updateOne({},{$set : {'todo_list' : req.body.todo_list , 'done_list' : req.body.done_list}})
        console.log(data)
        res.send({"message" : "Data Modiefied Successfully !!" , "status" : "success"})
    }
    catch{
        res.send({"status" : "Some error occured !!" , "status" : "failed"})
    }
})

module.exports = router
