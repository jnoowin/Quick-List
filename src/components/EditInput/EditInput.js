import React from 'react';
import "./EditInput.css";

export default function EditInput({ inputType, editOn, editedTodo, setEditedTodo, dateValue, setDateValue }) {
    const editInputStyle = { display: editOn ? "block": "none"};
    
    if(inputType === "title"){
        return(
            <input
                className = "inputValue"
                style = {{...editInputStyle, fontWeight: "bold"}}
                value = {editedTodo.title}
                onChange = {e => setEditedTodo({...editedTodo, title: e.target.value})}
                onClick = {e => e.stopPropagation()}
                placeholder = {`Add ${inputType}`}
                onSubmit = {e => e.preventDefault}
            >
            </input>
        );
    }
    
    if(inputType === "location"){
        return(
               <input
                        className = "inputValue"
                        style = {editInputStyle}
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
                        style = {editInputStyle}
                        value = {dateValue}
                        onChange = {e => setDateValue(e.target.value)}
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
                style = {editInputStyle}
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