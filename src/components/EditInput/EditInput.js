import React from 'react';
import "./EditInput.css";

export default function EditInput({ inputType, editOn, setEditValue, editValue, calendarDate }) {
    if(inputType === "location"){
        return(
               <input
                        className = "inputValue"
                        style = {{ display: editOn ? "block": "none"}}
                        value = {editValue}
                        onChange = {e => setEditValue(e.target.value)}
                        placeholder = {`Add ${inputType}`}
                        onSubmit = {e => e.preventDefault}
                    >
                </input>
        );
    }
    if(inputType === "date"){
        if(editOn && document.activeElement.id === "todoFormID" ){
            setEditValue(calendarDate)
        }
        return(
                <input
                        className = "inputValue"
                        style = {{ display: editOn ? "block": "none"}}
                        value = {editValue}
                        onChange = {e => setEditValue(e.target.value)}
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
                value = {editValue}
                onChange = {e => setEditValue(e.target.value)}
                placeholder = {`Add ${inputType}`}
                onSubmit = {(e) => {e.preventDefault()}}
            >
            </textarea>
        );
    }    
};