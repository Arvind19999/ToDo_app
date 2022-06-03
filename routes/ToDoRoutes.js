const { Router } = require("express");

const router = Router();

const {getToDo,saveToDo,deleteToDo,updateToDo} = require("../controller/ToDoController");

router.get("/get_todo",getToDo);

router.post("/save_todo",saveToDo);

router.post("/delete_todo",deleteToDo);

router.post("/update_todo",updateToDo);

module.exports = router;
