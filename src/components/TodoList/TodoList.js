import React from "react";
import Todo from "../Todo/Todo";
import DateDivider from "../DateDivider/DateDivider";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo, index) =>
        index <= 0 || todo.date !== todos[index - 1].date ? (
          <div key={todo.id}>
            <DateDivider date={todo.date} />
            <Todo key={todo.id} todo={todo}></Todo>
          </div>
        ) : (
          <Todo key={todo.id} todo={todo}></Todo>
        )
      )}
    </div>
  );
}
