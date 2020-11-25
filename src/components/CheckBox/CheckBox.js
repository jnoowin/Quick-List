import React from "react";
import "./CheckBox.css";

export default function CheckBox({ todo, editTodo, index }) {
  const handleClick = (e, editTodo, todo, index) => {
    e.stopPropagation();
    editTodo(index, { ...todo, isCompleted: !todo.isCompleted });
  };

  return (
    <div
      className="completeCheckBox"
      onClick={(e) => handleClick(e, editTodo, todo, index)}
      style={{ backgroundColor: todo.isCompleted ? "rgb(100, 140, 250)" : "" }}
    >
      <div className="checkMark" style={{ display: todo.isCompleted ? "block" : "none" }}></div>
    </div>
  );
}
