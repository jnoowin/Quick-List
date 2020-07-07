import React, { useState, useEffect, useRef} from 'react';
import "./Accordion.css";
import CheckBox from "../CheckBox/CheckBox";

export default function Accordion({ index, todo, completeTodo, removeTodo }) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
    }, [contentRef, active]);

    const changeAccordion = () => {
        setActive(!active);
    };

    return(
        <div className = "accordionDiv">
            <div className = {`accordion ${active}`} onClick = {changeAccordion}>
                <CheckBox 
                        completeTodo = {completeTodo}
                        index = {index}
                        isCompleted = {todo.isCompleted}
                    >
                </CheckBox>
                <p 
                    className = "accordionTitle"
                    style = {{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                    >
                    {todo.title}
                </p> 
          
            </div> 
            <div 
                className = "accordionContent"
                ref = {contentRef}
                >
                <div 
                    className = "accordionText"
                    >
                    {todo.text}
                    <br></br>
                    {todo.location}
                    <br></br>
                    {todo.date}
                </div>
            </div>
        </div>
    )
};