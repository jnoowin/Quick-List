import React, { useEffect, useContext } from "react";
import "./CalendarListItem.css";
import { TodoContext } from "../../Main";
import { updateDoc } from "../../firebase/firestore";
import { useAuthContext } from "../AuthProvider/AuthProvider";
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function CalendarListItem({ todo, update, incrementUpdate }) {
  const { state, dispatch } = useContext(TodoContext);
  const { authenticated, uid } = useAuthContext();

  useEffect(() => {
    if (update) {
      updateDoc(uid, { todos: state.todos });
    }
  }, [update, uid, state.todos]);

  const onClick = (e, left, todo) => {
    e.stopPropagation();
    if (authenticated) {
      incrementUpdate();
    }

    left
      ? dispatch({
          type: "EDIT_TODO",
          editedTodo: {
            ...todo,
            date: dayjs(todo.date, "M-D-YYYY")
              .subtract(1, "day")
              .format("M-D-YYYY"),
          },
        })
      : dispatch({
          type: "EDIT_TODO",
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
      <span className="titleDateText">{todo.title}</span>
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
