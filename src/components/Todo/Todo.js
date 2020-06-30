import React from 'react';
import Accordion from "../Accordion/Accordion";
import "./Todo.css";

export default function Todo({ index, todo, completeTodo, removeTodo }) {  
    return(
      <div className = "todo">
        <Accordion
          index = {index}
          todo = {todo}
          completeTodo = {completeTodo}
          removeTodo = {removeTodo}
          >
        </Accordion>
      </div>
    );
  };