import React, { useContext } from "react";
import "./CalendarListItem.css";
import { TodoContext } from "../../App";
const Moment = require("moment");

export default function CalendarListItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const onClick = (e, left, todo) => {
    e.stopPropagation();
    const splitDate = todo.date.split("-");
    let tomorrow = new Date(
      parseInt(splitDate[2]),
      parseInt(splitDate[0]) - 1,
      parseInt(splitDate[1])
    );
    if (left) {
      tomorrow.setDate(tomorrow.getDate() - 1);
    } else {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    dispatch({
      type: "EDIT_TODO",
      editedTodo: { ...todo, date: new Moment(tomorrow).format("M-D-YYYY") },
    });
  };

  return (
    <li className="listItem">
      <div className="titleDateText">
        <svg
          width="15px"
          height="20px"
          viewBox="0 0 15 20"
          fill="#999999"
          onClick={(e) => onClick(e, true, todo)}
        >
          <polygon points="8,3 1,10 8,17"></polygon>
        </svg>
        {todo.title.length <= 16 ? todo.title : todo.title.slice(0, 16) + "..."}
        <svg
          width="15px"
          height="20px"
          viewBox="0 0 15 20"
          fill="#999999"
          onClick={(e) => onClick(e, false, todo)}
        >
          <polygon points="8,3 15,10 8,17"></polygon>
        </svg>
      </div>
    </li>
  );
}
