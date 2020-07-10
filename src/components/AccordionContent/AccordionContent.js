import React, { useState, useEffect } from 'react';
import "./AccordionContent.css";
import EditInput from "../EditInput/EditInput";
import { DeleteOutlined, CalendarOutlined, AlignLeftOutlined, PushpinOutlined, EditOutlined } from "@ant-design/icons"

export default function AccordionContent({ index, todo, removeTodo, editTodo, contentRef, active }) {
    const [editOn, setEditOn] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [location, setLocation] = useState(todo.location);
    const [date, setDate] = useState(todo.date);
    const [text, setText] = useState(todo.text);
    
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

    const handleClick = (e, index) => {
        e.preventDefault();
        editTodo(index, title, location, date, text);
        setEditOn(!editOn);
    };
    return(
        <div className = "accordionText">
            <div className = "locationSection">
                <PushpinOutlined 
                    style = {{
                        ...iconStyle, 
                        display: (editOn || (location !== "")) ? "block": "none"
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
                    setEditValue = {setLocation}
                    editValue = {location}
                />
            </div>
            
            <div className = "dateSection">
                <CalendarOutlined 
                    style = {{
                        ...iconStyle, 
                        display: (editOn || (date !== "")) ? "block": "none"
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
                    setEditValue = {setDate}
                    editValue = {date}
                />
            </div>
            
            <div className = "textSection">
                <AlignLeftOutlined 
                    style = {{
                        ...iconStyle, 
                        display: (editOn || (text !== "")) ? "block": "none"
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
                    setEditValue = {setText}
                    editValue = {text}
                />
            </div>
            
            <div className = "optionBar">
                <button
                    className = "saveButton"
                    style = {{ display: editOn ? "block": "none" }}
                    onClick = {(e) => handleClick(e, index)}
                >
                    Save
                </button>
                <EditOutlined 
                    style = {editIconStyle}
                    onClick = {() => setEditOn(!editOn)}
                />
                <DeleteOutlined 
                    style = {{ fontSize: "26px", color: "" }} 
                    onClick = {() => {removeTodo(index)}}
                />
            </div>
        </div>
    );
};