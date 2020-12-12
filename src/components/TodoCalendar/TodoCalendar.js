import React, { useContext } from "react";
import CalendarListItem from "../CalendarListItem/CalendarListItem";
import { Calendar, Badge } from "antd";
import { TodoContext } from "../../App";
import { useMediaQuery } from "react-responsive";
import "antd/dist/antd.css";

export default function TodoCalendar({ todoInputRef }) {
  const { state, dispatch } = useContext(TodoContext);

  const matches = useMediaQuery({ query: "(max-width: 1000px)" });

  const onSelect = (value) => {
    todoInputRef.current.focus();
    dispatch({ type: "EDIT_CALENDAR_DATE", calendarDate: value.format("M-D-YYYY") });
  };

  const calendarStyle = {
    width: "100%",
    maxWidth: "100%",
    marginRight: "1vw",
  };

  const dateCellRender = (value) => {
    return (
      <ul>
        {matches ? (
          <Badge
            count={state.todos.filter((todo) => value.format("M-D-YYYY") === todo.date).length}
            style={{ backgroundColor: "rgb(100, 140, 250)" }}
          ></Badge>
        ) : (
          state.todos.map((todo) =>
            value.format("M-D-YYYY") === todo.date ? (
              <CalendarListItem key={todo.id} todo={todo} />
            ) : null
          )
        )}
      </ul>
    );
  };

  return <Calendar style={calendarStyle} dateCellRender={dateCellRender} onSelect={onSelect} />;
}
