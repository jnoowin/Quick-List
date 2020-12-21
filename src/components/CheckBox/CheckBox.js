import React, { useContext } from "react";
import "./CheckBox.css";
import { TodoContext } from "../../Main";
import firebase from "../../firebase/firebase";
import { updateDoc } from "../../firebase/firestore";

export default function CheckBox({ todo }) {
  const { state, dispatch } = useContext(TodoContext);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch({ type: "EDIT_TODO", editedTodo: { ...todo, isCompleted: !todo.isCompleted } });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        updateDoc(user.uid, { todos: state.todos });
      }
    });
  };

  return (
    <div
      className="completeCheckBox"
      onClick={(e) => handleClick(e)}
      style={{ backgroundColor: todo.isCompleted ? "rgb(100, 140, 250)" : "" }}
    >
      <div className="checkMark" style={{ display: todo.isCompleted ? "block" : "none" }}></div>
    </div>
  );
}
