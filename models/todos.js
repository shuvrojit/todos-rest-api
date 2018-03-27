const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name : {
        type: String,
        required: "Name cannot be blank"
    },
    completed : {
        type: Boolean,
        default: false
    },
    date : {
        type: Date,
        default : Date.now
    }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;