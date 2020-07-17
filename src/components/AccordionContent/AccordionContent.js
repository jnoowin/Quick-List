import React, { useState, useEffect } from 'react';
import "./AccordionContent.css";
import EditInput from "../EditInput/EditInput";
import { DeleteOutlined, CalendarOutlined, AlignLeftOutlined, PushpinOutlined, EditOutlined } from "@ant-design/icons"

export default function AccordionContent({ index, todo, removeTodo, editTodo, contentRef, active, calendarDate, setCalendarDate }) {
    const [editOn, setEditOn] = useState(false);
    const[editedTodo, setEditedTodo] = useState({
        title: todo.title, 
        location: todo.location,
        date: todo.date, 
        text: todo.text, 
    });

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
    }, [contentRef, active, editOn]);

    const iconStyle = { 
        fontSize: "22px", 
        marginRight: "10px",
        padding: "2px" 
    };
    const editIconStyle = { 
        fontSize: "26px", 
        padding: "5px 5px" ,
        marginRight: "15px",
        cursor: "pointer",
        color: editOn ? "white": "inherit",
        transition: "color 0.2s ease",
        backgroundColor: editOn ? "rgb(100, 140, 250)": "inherit",
        borderRadius: "30px",
    };
    const displayStyle = {display: editOn ? "none": "block"}

    const saveClick = (e, editedTodo, index, calendarDate) => {
        e.preventDefault();
        editTodo(index, {...editedTodo, date: calendarDate});
        setEditOn(!editOn);
    };

    const editClick = initDate => {
        setCalendarDate(initDate);
        setEditOn(!editOn);
    };

    return(
        <div className = "accordionText">
            <div className = "locationSection">
                <PushpinOutlined 
                    style = {{
                        ...iconStyle, 
                        display: (editOn || (todo.location !== "")) ? "block": "none"
                    }}
                />
                
                <div
                    className = "locationDisplay"
                    style = {displayStyle}
                >
                    {todo.location}
                </div>

                <EditInput
                    inputType = "location"
                    editOn = {editOn}
                    editedTodo = {editedTodo} 
                    setEditedTodo = {setEditedTodo}
                />
            </div>
            
            <div className = "dateSection">
                <CalendarOutlined 
                    style = {{
                        ...iconStyle, 
                        display: (editOn || (todo.date !== "")) ? "block": "none"
                    }}
                />
                
                <div 
                    className = "dateDisplay"
                    style = {displayStyle}
                >
                    {todo.date}
                </div>
                
                <EditInput
                    inputType = "date"
                    editOn = {editOn}
                    calendarDate = {calendarDate}
                    editedTodo = {editedTodo} 
                    setEditedTodo = {setEditedTodo}
                    setCalendarDate = {setCalendarDate}
                />
            </div>
            
            <div className = "textSection">
                <AlignLeftOutlined 
                    style = {{
                        ...iconStyle, 
                        display: (editOn || (todo.text !== "")) ? "block": "none"
                    }}
                />
                <div 
                    className = "textDisplay"
                    style = {displayStyle}
                >
                    {todo.text}
                </div>
                <EditInput
                    inputType = "text"
                    editOn = {editOn}
                    editedTodo = {editedTodo} 
                    setEditedTodo = {setEditedTodo}
                />
            </div>
            
            <div className = "optionBar" id="optionBarID">
                <button
                    className = "saveButton"
                    style = {{ display: editOn ? "block": "none" }}
                    onClick = {e => saveClick(e, editedTodo, index, calendarDate)}
                    >
                        Save
                </button>
                <EditOutlined 
                    style = {editIconStyle}
                    onClick = {() => editClick(todo.date)}
                />
                <DeleteOutlined 
                    style = {{ fontSize: "26px"}} 
                    onClick = {() => {removeTodo(index)}}
                />
            </div>
        </div>
    );
};