"use strict";
const db = require("./../helpers/db");

const FindTodoById = (req, res) => {
  const todos = db.getCollection("todos");
  const todo = todos.where(obj => obj.todo_id == req.swagger.params.id.value);
  res.header("Content-Type", "application/json");
  res.status(200).send(todo[0]);
};

module.exports = {
  FindTodoById
};
