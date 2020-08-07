import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
import './Firebase.js'
const firebase = require("firebase");
const shortid = require('shortid');
const moment = require('moment');

export default function App() {
  const[todos, setTodos] = useState([]);

  const todoInputRef = useRef(null);

  const [calendarDate, setCalendarDate] = useState(moment().format("M-D-YYYY"));

  useEffect(() => {
    document.title = todos.length > 0 ? `(${todos.length}) Quick-List` : "Quick-List";
  }, [todos.length]);

  useEffect(() => {
    firebase.database().ref("user/blarghnog/todos")
    .once('value', snapshot => {
        let firebaseTodos = []
        for(let todo in snapshot.val()){
          firebaseTodos.push(snapshot.val()[todo]);
        }
        setTodos(firebaseTodos)
      });   
  }, []);

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
    firebase.database().ref('user/blarghnog/todos/').child(newTodos[0].id).set(newTodos[0]);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    const refTodo = newTodos[index];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    firebase.database().ref('user/blarghnog/todos/').child(refTodo.id).remove()
  };

  const editTodo = (index, editedTodo) => {
    const newTodos = [...todos];
    Object.assign(newTodos[index], editedTodo);
    setTodos(newTodos);
    firebase.database().ref('user/blarghnog/todos/').child(newTodos[index].id).set(newTodos[index]);
  };

  return(
    <div className = "app">
      <div className = "nav-div">
        <Navbar />
      </div>
      <div className = "todoListDiv">
        <div className = "todoListSection">
            <TodoForm 
              addTodo = {addTodo}
              todoInputRef = {todoInputRef}
            />
            <TodoList
              todos = {todos}
              removeTodo = {removeTodo}
              editTodo = {editTodo}
              calendarDate = {calendarDate}
            />
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
