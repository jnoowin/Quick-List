import React, { useState } from 'react';
import "./TodoForm.css";
import { EnterOutlined, PlusCircleOutlined } from '@ant-design/icons';

export default function TodoForm({ addTodo }) {
    const[value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue("");
    };
    
    return(
      <div className = "enter">
        <form 
          onSubmit = {handleSubmit}
          className = "form"
          >
          <PlusCircleOutlined style = {{ fontSize: "25px" }}/>
          <input
            className = "input"
            type = "text"
            value = {value}
            onChange = {e => setValue(e.target.value)}
            placeholder = "Enter to-do title"
            />
            
            <button 
              className = "enterButton"
              onClick = {handleSubmit}
              >
                <EnterOutlined style = {{ fontSize: "20px" }}/>
            </button>
        </form>
      </div>
    );
  };