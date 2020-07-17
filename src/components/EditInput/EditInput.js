import React from 'react';
import "./EditInput.css";

export default function EditInput({ inputType, editOn, calendarDate, editedTodo, setEditedTodo, setCalendarDate }) {
    if(inputType === "location"){
        return(
               <input
                        className = "inputValue"
                        style = {{ display: editOn ? "block": "none"}}
                        value = {editedTodo.location}
                        onChange = {e => setEditedTodo({...editedTodo, location: e.target.value})}
                        placeholder = {`Add ${inputType}`}
                        onSubmit = {e => e.preventDefault}
                    >
                </input>
        );
    }

    
    if(inputType === "date"){
        return(
                <input
                        className = "inputValue"
                        type = "text"
                        style = {{ display: editOn ? "block": "none"}}
                        value = {calendarDate}
                        onChange = {e => setCalendarDate(e.target.value)}
                        placeholder = {`Add ${inputType} e.g 02-28-2001`}
                        onSubmit = {e => e.preventDefault}
                    >
                </input>
        );
    }

    if(inputType === "text"){
        return(
            <textarea
                className = "inputArea"
                style = {{ display: editOn ? "block": "none"}}
                rows = "4"
                value = {editedTodo.text}
                onChange = {e => setEditedTodo({...editedTodo, text: e.target.value})}
                placeholder = {`Add ${inputType}`}
                onSubmit = {e => {e.preventDefault()}}
            >
            </textarea>
        );
    }    
};