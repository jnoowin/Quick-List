import React, { useState, useEffect, useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../Main";
import { EnterOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { updateDoc } from "../../firebase/firestore";
import { useAuthContext } from "../AuthProvider/AuthProvider";

export default function TodoForm({ todoInputRef }) {
  const { state, dispatch } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const [update, setUpdate] = useState(0);
  const { authenticated, uid } = useAuthContext();

  useEffect(() => {
    if (update) {
      updateDoc(uid, { todos: state.todos });
    }
  }, [update, uid, state.todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: "ADD_TODO", newTitle: value });
    setValue("");
    if (authenticated) {
      setUpdate((update) => update + 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <PlusCircleOutlined
          style={{ fontSize: "25px", marginLeft: "0.5rem" }}
        />
        <input
          className="todoInput"
          type="text"
          value={value}
          onChange={(e) =>
            e.target.value.length <= 40 ? setValue(e.target.value) : null
          }
          placeholder="Add to-do"
          ref={todoInputRef}
          id="todoFormID"
          autoComplete="off"
        />

        <button className="enterButton" onClick={handleSubmit}>
          <EnterOutlined style={{ fontSize: "20px" }} />
        </button>
      </form>
    </>
  );
}
