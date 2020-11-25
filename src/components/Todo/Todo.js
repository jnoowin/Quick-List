import React from "react";
import Accordion from "../Accordion/Accordion";
import "./Todo.css";

export default function Todo({ index, todo, removeTodo, editTodo, calendarDate }) {
  return (
    <div className="todo">
      <Accordion
        index={index}
        todo={todo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        calendarDate={calendarDate}
      ></Accordion>
    </div>
  );
}
