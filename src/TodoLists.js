import React from "react";

const Todo = [
  { id: 1, task: "Learn React" },
  { id: 2, task: "Build a project" },
  { id: 3, task: "Practice interview questions" },
];

const TodoLists = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {Todo.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
