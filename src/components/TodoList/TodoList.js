import React from "react";
import Todo from "../Todo/Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
