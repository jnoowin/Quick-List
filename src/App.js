import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
const shortid = require('shortid');

export default function App() {
  const[todos, setTodos] = useState([
    { title: "Learn about React",
      text: "Spend 10 minutes",
      location: "",
      date: "07-08-2020", 
      isCompleted: false,
      id: shortid.generate()
    },    
    { title: "Meet friend for lunch",
      location: "Cafe",
      date: "07-09-2020",
      text: "Talk about stuff" ,
      isCompleted: false,
      id: shortid.generate()
    },
    { title: "Build really cool todo app",
      location: "School",
      date: "07-10-2020",
      text: "Learn about hooks",
      isCompleted: false,
      id: shortid.generate()
    }
  ]);
  
  const [calendarDate, setCalendarDate] = useState("");

  const todoInputRef = useRef(null);

  useEffect(() => {
    document.title = todos.length > 0 ? `(${todos.length})To-do List App` : "To-do List App";
  }, [todos.length]);
  
  const addTodo = newTitle => {
    const newTodos = [...todos];
    newTodos.unshift({ 
      title: newTitle,
      text: "",
      location: "",
      date: calendarDate, 
      isCompleted: false,
      id: shortid.generate()
    });
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

  const editTodo = (index, newTitle, newLocation, newDate, newText) => {
    const newTodos = [...todos];
    Object.assign(newTodos[index], {
      title: newTitle, 
      location: newLocation,
      date: newDate, 
      text: newText, 
    });
    setTodos(newTodos)
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
      
      <div className = "todoListDiv">
        <div className = "todoListSection">
            <TodoForm 
              addTodo = {addTodo}
              todoInputRef = {todoInputRef}
            />
            <TodoList
              todos = {todos}
              completeTodo = {completeTodo}
              removeTodo = {removeTodo}
              editTodo = {editTodo}
              calendarDate = {calendarDate}
              setCalendarDate = {setCalendarDate}
            >
            </TodoList>
        </div>
        <TodoCalendar
          todos = {todos}
          todoInputRef = {todoInputRef}
          calendarDate = {calendarDate}
          setCalendarDate = {setCalendarDate}
        />
      </div>
    </div>
  );
};
