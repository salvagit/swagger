"use strict";

const db = require("./../helpers/db");

module.exports = {
  GetAllTodos: GetAllTodos
};

function GetAllTodos(req, res) {
  const todos = db.getCollection("todos");
  res.status(200).send(todos.data);
}
