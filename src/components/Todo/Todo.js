import React from "react";
import Accordion from "../Accordion/Accordion";
import "./Todo.css";

export default function Todo({ todo }) {
  return (
    <div className="todo">
      <Accordion todo={todo}></Accordion>
    </div>
  );
}
