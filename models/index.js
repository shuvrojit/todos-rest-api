"use strict";

const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todos-api");
mongoose.Promise = global.Promise;


module.exports.Todo = require("./todos");