import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  const accordionChange = () => {
    console.log("popp")
  }
  
  return(
    <div 
      className = "todo"
      style = {{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      onClick = {() => accordionChange()}
      >
      {todo.text}
      <div className = "buttonDiv">
        <button
          className = "button"
          onClick = {() => completeTodo(index)}
          >
          Complete
        </button>
        <button
          className = "button"
          onClick = {() => removeTodo(index)}
          >
          x
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const[value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };
  
  return(
    <div>  
      <form 
        onSubmit = {handleSubmit}
        className = "form"
        >
        <input
          style = {{ display:"inline"}}
          className = "input"
          type = "text"
          value = {value}
          onChange = {e => setValue(e.target.value)}/>
          <button 
            className = "enterButton"
            onClick = {handleSubmit}
            >Enter
          </button>
      </form>
    </div>
  );
}

export default function App() {
  const[todos, setTodos] = useState([
    { text: "Learn about React", 
      isCompleted: false
    },
    { text: "Meet friend for lunch", 
      isCompleted: false
    },
    { text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
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
      <div>
        <div className = "todo-list">
          {todos.map((todo, index) => (
            <Todo
              key = {index}
              index = {index}
              todo = {todo}
              completeTodo = {completeTodo}
              removeTodo = {removeTodo}
            />
          ))}
          <TodoForm 
            addTodo = {addTodo}
          />
        </div>
      </div>
    </div>
  );
}
