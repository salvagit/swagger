"use strict";
const db = require("./../helpers/db");

const DeleteTodoById = (req, res) => {
  const todos = db.getCollection("todos");
  const todoId = req.swagger.params.id.value;
  const todo = todos.where(obj => obj.todo_id == todoId);
  todos.remove(todo);
  res.header("Content-Type", "application/json");
  res.status(200).send({ mesagge: "se borro correctamente" });
};

module.exports = {
  DeleteTodoById
};
