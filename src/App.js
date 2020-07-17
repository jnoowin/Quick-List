import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
import './Firebase.js'
const firebase = require("firebase");
const shortid = require('shortid');

export default function App() {
  const[todos, setTodos] = useState([
    { title: "Learn React",
      text: "Spend 10 minutes",
      location: "",
      date: "07-16-2020", 
      isCompleted: false,
      id: shortid.generate()
    },    
    { title: "Meet friends for lunch",
      location: "Cafe",
      date: "07-16-2020",
      text: "Talk about stuff" ,
      isCompleted: false,
      id: shortid.generate()
    },
    { title: "Study for CS",
      location: "School",
      date: "07-16-2020",
      text: "Learn about hooks",
      isCompleted: false,
      id: shortid.generate()
    },
    
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
    firebase.database().ref(`user/blarghnog/todos/${newTodos[0].title + newTodos[0].id}`).push(newTodos[0]);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    const refTodo = newTodos[index];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    firebase.database().ref(`user/blarghnog/todos/${refTodo.title + refTodo.id}`).remove()
  };

  const editTodo = (index, editedTodo) => {
    const newTodos = [...todos];
    Object.assign(newTodos[index], editedTodo);
    setTodos(newTodos);
    firebase.database().ref(`user/blarghnog/todos/${newTodos[index].title + newTodos[index].id}`).set(newTodos[index]);
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
          setCalendarDate = {setCalendarDate}
        />
      </div>
    </div>
  );
};
