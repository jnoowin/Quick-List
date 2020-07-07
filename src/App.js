import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";

export default function App() {
  const[todos, setTodos] = useState([
    // { title: "Learn about React",
    //   text: "Spend 10 minutes",
    //   location: "Cafe",
    //   date: "7/6/2020", 
    //   isCompleted: false
    // },
    // { title: "Meet friend for lunch", 
    //   text: "Talk about stuff" ,
    //   isCompleted: false
    // },
    // { title: "Build really cool todo app",
    //   text: "Learn about hooks",
    //   isCompleted: false
    // }
  ]);

  useEffect(() => {
    document.title = todos.length > 0 ? `To-do List App(${todos.length})` : "To-do List App";
  }, [todos.length]);

  const addTodo = text => {
    const newTodos = [...todos, { title: text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return(
    <div className = "app">
      <div className = "nav-div">
        <div className = "navbar">
          <ul className = "ul">
            <li>To-do List</li>
          </ul>
        </div>
      </div>
      <div style = {{ display: "flex", flexDirection: "row"}}>
        <div className = "todo-list">
            <TodoList
              todos = {todos}
              completeTodo = {completeTodo}
              removeTodo = {removeTodo}
            >
            </TodoList>
            <TodoForm 
              addTodo = {addTodo}
            />
        </div>
        <TodoCalendar
          todos = {todos}
        />
      </div>
    </div>
  );
};
