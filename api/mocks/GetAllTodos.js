"use stricts";

module.exports = {
  GetAllTodos: GetAllTodos
};

function GetAllTodos(req, res, next) {
  res.json([
    {
      todo_id: 0,
      todo: "Get some milk",
      author: "Jim",
      createddate: "2019-04-24T19:13:54.439Z",
      duedate: "2019-04-24T19:13:54.439Z",
      completed: false
    },
    {
      todo_id: 1,
      todo: "Get some cereal",
      author: "Austin",
      createddate: "2019-04-20T19:13:54.439Z",
      duedate: "2019-04-20T19:13:54.439Z",
      completed: false
    }
  ]);
}
