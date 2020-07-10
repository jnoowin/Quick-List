import React from 'react';
import "./EditInput.css";

export default function EditInput({ inputType, editOn, setEditValue, editValue }) {
    if(inputType === "location" || inputType === "date")
        return(
               <input
                        className = "inputValue"
                        style = {{ display: editOn ? "block": "none"}}
                        value = {editValue}
                        onChange = {e => setEditValue(e.target.value)}
                        placeholder = {`Add ${inputType}`}
                        onSubmit = {(e) => {e.preventDefault()}}
                    >
                </input>
        );

    if(inputType === "text")
        return(
            <textarea
                className = "inputArea"
                style = {{ display: editOn ? "block": "none"}}
                rows = "4"
                value = {editValue}
                onChange = {e => setEditValue(e.target.value)}
                placeholder = {`Add ${inputType}`}
                onSubmit = {(e) => {e.preventDefault()}}
            >
            </textarea>
        );
};