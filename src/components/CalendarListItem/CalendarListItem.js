import React from "react";
import "./CalendarListItem.css";
const Moment = require("moment");

export default function CalendarListItem({ title, todo, editTodo, index }) {
  const onClick = (left, todo, editTodo, index) => {
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
    editTodo(index, { ...todo, date: new Moment(tomorrow).format("M-D-YYYY") });
  };

  return (
    <li className="listItem">
      <div className="titleDateText">
        <svg
          width="15px"
          height="20px"
          viewBox="0 0 15 20"
          fill="#999999"
          onClick={() => onClick(true, todo, editTodo, index)}
        >
          <polygon points="8,3 1,10 8,17"></polygon>
        </svg>
        {title.length <= 16 ? title : title.slice(0, 16) + "..."}
        <svg
          width="15px"
          height="20px"
          viewBox="0 0 15 20"
          fill="#999999"
          onClick={() => onClick(false, todo, editTodo, index)}
        >
          <polygon points="8,3 15,10 8,17"></polygon>
        </svg>
      </div>
    </li>
  );
}
