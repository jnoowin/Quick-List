import React, { useContext } from "react";
import "./CalendarListItem.css";
import { TodoContext } from "../../App";
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function CalendarListItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const onClick = (e, left, todo) => {
    e.stopPropagation();
    left
      ? dispatch({
          type: "EDIT_TODO_DATE",
          editedTodo: {
            ...todo,
            date: dayjs(todo.date, "M-D-YYYY").subtract(1, "day").format("M-D-YYYY"),
          },
        })
      : dispatch({
          type: "EDIT_TODO_DATE",
          editedTodo: {
            ...todo,
            date: dayjs(todo.date, "M-D-YYYY").add(1, "day").format("M-D-YYYY"),
          },
        });
  };

  return (
    <li className="listItem">
      <svg
        width="15px"
        height="20px"
        viewBox="0 0 15 20"
        fill="#999999"
        onClick={(e) => onClick(e, true, todo)}
      >
        <polygon points="8,3 1,10 8,17"></polygon>
      </svg>
      <h4 className="titleDateText">{todo.title}</h4>
      <svg
        width="15px"
        height="20px"
        viewBox="0 0 15 20"
        fill="#999999"
        onClick={(e) => onClick(e, false, todo)}
      >
        <polygon points="8,3 15,10 8,17"></polygon>
      </svg>
    </li>
  );
}
