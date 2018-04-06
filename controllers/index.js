"use strict";

const db = require("../models");


module.exports = {
    getTodos (req, res) {
        db.Todo.find()
        .then(function(data){
            res.json(data);
        })
        .catch(function(err) {
            console.log(err);
        })
    },

    postTodos (req, res) {
        db.Todo.create(req.body)
        .then(function (newData) {
            res.status(200).json(newData);
        })
        .catch(function (err) {
            console.log(err)
        })
    },

    getSingleTodos (req, res) {
        db.Todo.find({_id:req.params.id})
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err){
            console.log(err);
        })
    },

    putTodos (req, res) {
        db.Todo.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function(err){
            console.log(err);
        })
    },

    deleteTodos (req, res) {
        db.Todo.deleteOne({_id:req.params.id})
        .then(function (data) {
            res.send("successfully deleted");
        })
        .catch(function (err) {
            console.log(err);
        })
    }
}
