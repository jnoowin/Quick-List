import React, { useState, useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../App";
import { EnterOutlined, PlusCircleOutlined } from "@ant-design/icons";

export default function TodoForm({ todoInputRef }) {
  const { dispatch } = useContext(TodoContext);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: "ADD_TODO", newTitle: value });
    setValue("");
  };

  return (
    <div className="enter">
      <form onSubmit={handleSubmit} className="form">
        <PlusCircleOutlined style={{ fontSize: "25px", marginLeft: "0.5rem" }} />
        <input
          className="todoInput"
          type="text"
          value={value}
          onChange={(e) => (e.target.value.length <= 40 ? setValue(e.target.value) : null)}
          placeholder="Add to-do"
          ref={todoInputRef}
          id="todoFormID"
          autoComplete="off"
        />

        <button className="enterButton" onClick={handleSubmit}>
          <EnterOutlined style={{ fontSize: "20px" }} />
        </button>
      </form>
    </div>
  );
}
