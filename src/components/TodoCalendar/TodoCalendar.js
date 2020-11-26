import React, { useContext } from "react";
import CalendarListItem from "../CalendarListItem/CalendarListItem";
import { Calendar } from "antd";
import { TodoContext } from "../../App";
import "antd/dist/antd.css";

export default function TodoCalendar({ todoInputRef }) {
  const { state, dispatch } = useContext(TodoContext);

  const onSelect = (value) => {
    todoInputRef.current.focus();
    dispatch({ type: "EDIT_CALENDAR_DATE", calendarDate: value.format("M-D-YYYY") });
  };

  const calendarStyle = {
    width: "70%",
    maxWidth: "70%",
    marginRight: "1vw",
  };

  const dateCellRender = (value) => {
    return (
      <ul>
        {state.todos.map((todo) =>
          value.format("M-D-YYYY") === todo.date ? (
            <CalendarListItem key={todo.id} todo={todo} />
          ) : null
        )}
      </ul>
    );
  };

  return <Calendar style={calendarStyle} dateCellRender={dateCellRender} onSelect={onSelect} />;
}
