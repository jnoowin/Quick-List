import React, { useState } from "react";
import "./TodoForm.css";
import { EnterOutlined, PlusCircleOutlined } from "@ant-design/icons";

export default function TodoForm({ addTodo, todoInputRef }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="enter">
      <form onSubmit={handleSubmit} className="form">
        <PlusCircleOutlined style={{ fontSize: "25px", marginLeft: "9px" }} />
        <input
          className="todoInput"
          type="text"
          value={value}
          onChange={(e) => (e.target.value.length <= 40 ? setValue(e.target.value) : null)}
          placeholder="Add to-do"
          ref={todoInputRef}
          id="todoFormID"
        />

        <button className="enterButton" onClick={handleSubmit}>
          <EnterOutlined style={{ fontSize: "20px" }} />
        </button>
      </form>
    </div>
  );
}
