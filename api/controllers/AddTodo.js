"use strict";

const db = require("./../helpers/db");

function AddTodo(req, res) {
  const todos = db.addCollection("todos");
  todos.insert(req.swagger.params.todo.value);
  db.saveDatabase();
  res.header("Content-Type", "application/json");
  res.status(200).send({ message: "se guardo correctamente." });
}

module.exports = {
  AddTodo: AddTodo
};
