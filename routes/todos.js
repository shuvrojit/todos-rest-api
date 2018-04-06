"use strict";

const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/", controllers.getTodos);

router.post("/", controllers.postTodos);


router.get("/:id", controllers.getSingleTodos);

router.put("/:id", controllers.putTodos);

router.delete("/:id", controllers.deleteTodos);

module.exports = router;