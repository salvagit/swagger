"use strict";
const loki = require("lokijs");

var db = new loki("todos.json", {
  autoload: true,
  autosave: true,
  autosaveInterval: 3000
});

module.exports = db;
