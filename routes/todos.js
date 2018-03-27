const express = require("express");
const router = express.Router();
const helpers = require("../helpers");

router.get("/", helpers.getTodos);

router.post("/", helpers.postTodos);


router.get("/:id", helpers.getSingleTodos);

router.put("/:id", helpers.putTodos);

router.delete("/:id", helpers.deleteTodos);

module.exports = router;