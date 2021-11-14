const mongoose = require('mongoose')


const todoschema =  new mongoose.Schema({
    todo_list : {type : Array , default: []},
    done_list :  {type : Array , default: []}
})


const Todo = mongoose.model("Todo",todoschema)

module.exports = Todo