import React, { useState } from 'react';
import "./TodoForm.css";

export default function TodoForm({ addTodo }) {
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
  };