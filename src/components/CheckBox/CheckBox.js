import React from 'react';
import "./CheckBox.css";

export default function CheckBox({ completeTodo, index, isCompleted }) {
    
    const handleClick = (index, e) => {
        completeTodo(index);
        e.stopPropagation();
    };

    return(
        <div 
            className = "completeCheckBox"
            onClick = {e => handleClick(index, e)}
            style = {{ backgroundColor : isCompleted  ? "rgb(100, 140, 250)" : ""}}
        >
            <div
                className = "checkMark"
                style = {{display : isCompleted ? "block" : "none"}}
            >
            </div>
        </div>
    );
};