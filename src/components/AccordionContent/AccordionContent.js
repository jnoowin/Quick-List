import React, { useState, useEffect, useContext } from "react";
import "./AccordionContent.css";
import EditInput from "../EditInput/EditInput";
import { TodoContext } from "../../Main";
import {
  DeleteOutlined,
  CalendarOutlined,
  AlignLeftOutlined,
  PushpinOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../AuthProvider/AuthProvider";
import { updateDoc } from "../../firebase/firestore";
const moment = require("moment");

export default function AccordionContent({
  todo,
  contentRef,
  active,
  editOn,
  setEditOn,
  editedTodo,
  setEditedTodo,
}) {
  const { state, dispatch } = useContext(TodoContext);
  const [dateValue, setDateValue] = useState("");
  const [prevCalendarDate, setPrevCalendarDate] = useState("");
  const [update, setUpdate] = useState(0);
  const [updateDelete, setUpdateDelete] = useState(0);
  const { authenticated, uid } = useAuthContext();

  if (prevCalendarDate !== state.calendarDate) {
    setPrevCalendarDate(state.calendarDate);
    setDateValue(state.calendarDate);
  }

  useEffect(() => {
    if (update) {
      updateDoc(uid, { todos: state.todos });
    }
  }, [update, uid, state.todos]);

  useEffect(() => {
    if (updateDelete) {
      dispatch({ type: "DELETE_TODO", deleteId: todo.id });
      updateDoc(uid, { todos: state.todos.filter((t) => t.id !== todo.id) });
    }
  }, [updateDelete, uid, state.todos, dispatch, todo.id]);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active, editOn]);

  const iconStyle = {
    fontSize: "22px",
    marginRight: "10px",
    padding: "2px",
  };
  const editIconStyle = {
    fontSize: "26px",
    padding: "5px 5px",
    marginRight: "15px",
    cursor: "pointer",
    color: editOn ? "white" : "inherit",
    transition: "color 0.2s ease",
    backgroundColor: editOn ? "rgb(100, 140, 250)" : "inherit",
    borderRadius: "30px",
  };
  const displayStyle = { display: editOn ? "none" : "block" };

  const saveClick = (e, editedTodo, dateValue, todo) => {
    e.preventDefault();
    if (moment(dateValue, "M-D-YYY", true).isValid() || dateValue === "") {
      dispatch({
        type: "EDIT_TODO",
        editedTodo: { ...editedTodo, date: dateValue },
      });
    } else {
      setDateValue(todo.date);
    }
    setEditOn(!editOn);

    if (authenticated) {
      setUpdate((update) => update + 1);
    }
  };

  const editClick = (initDate) => {
    setDateValue(initDate);
    setEditOn(!editOn);
  };

  return (
    <div className="accordionText">
      <div className="locationSection">
        <PushpinOutlined
          style={{
            ...iconStyle,
            display: editOn || todo.location !== "" ? "block" : "none",
          }}
        />

        <div className="locationDisplay" style={displayStyle}>
          {todo.location}
        </div>

        <EditInput
          inputType="location"
          editOn={editOn}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
        />
      </div>

      <div className="dateSection">
        <CalendarOutlined
          style={{
            ...iconStyle,
            display: editOn || todo.date !== "" ? "block" : "none",
          }}
        />

        <div className="dateDisplay" style={displayStyle}>
          {todo.date}
        </div>

        <EditInput
          inputType="date"
          editOn={editOn}
          dateValue={dateValue}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          setDateValue={setDateValue}
        />
      </div>

      <div className="textSection">
        <AlignLeftOutlined
          style={{
            ...iconStyle,
            display: editOn || todo.text !== "" ? "block" : "none",
          }}
        />
        <div className="textDisplay" style={displayStyle}>
          {todo.text}
        </div>
        <EditInput
          inputType="text"
          editOn={editOn}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
        />
      </div>

      <div className="optionBar">
        <button
          className="saveButton"
          style={{ display: editOn ? "block" : "none" }}
          onClick={(e) => saveClick(e, editedTodo, dateValue, todo)}
        >
          Save
        </button>
        <EditOutlined
          style={editIconStyle}
          onClick={() => editClick(todo.date)}
        />
        <DeleteOutlined
          style={{ fontSize: "26px" }}
          onClick={() => {
            setUpdateDelete((updateDelete) => updateDelete + 1);
          }}
        />
      </div>
    </div>
  );
}
