import React from "react";
import "./CalendarListItem.css"

export default function CalendarListItem({ title }) {
    return(
        <li className = "listItem">
            {title}
        </li>
    );
}