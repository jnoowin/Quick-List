import React from "react";
import Todo from "../Todo/Todo";
<<<<<<< HEAD

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
=======
import DateDivider from '../DateDivider/DateDivider'
const moment = require('moment');

export default function TodoList({ todos, removeTodo, editTodo, calendarDate }) {
    return(
        <div>
            {
            todos.map((todo, index) => (
                    index <= 0 || todo.date !== todos[index - 1].date
                ? 
                <div key = {todo.id}>
                    <DateDivider 
                        date = {todo.date.split("-")}
                    />
                    <Todo
                        index = {index}
                        todo = {todo}
                        removeTodo = {removeTodo}
                        editTodo = {editTodo}
                        calendarDate = {calendarDate}
                    >
                    </Todo>
                </div>
                :
                    <Todo
                        key = {todo.id}
                        index = {index}
                        todo = {todo}
                        removeTodo = {removeTodo}
                        editTodo = {editTodo}
                        calendarDate = {calendarDate}
                    >
                    </Todo>
            ))}
        </div>
    );
};
>>>>>>> cool changes
