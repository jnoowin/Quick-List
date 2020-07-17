import React, { useState, useRef} from 'react';
import "./Accordion.css";
import CheckBox from "../CheckBox/CheckBox";
import AccordionContent from "../AccordionContent/AccordionContent";
import { DownOutlined } from '@ant-design/icons';

export default function Accordion({ index, todo, completeTodo, removeTodo, editTodo, calendarDate, setCalendarDate }) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    const changeAccordion = () => {
        setActive(!active);
    };

    return(
        <div className = "accordionDiv">
            <div 
                className = {`accordion ${active}`} 
                onClick = {changeAccordion}
            >
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
                <div className = "chevron" >
                    <DownOutlined 
                        style = {{
                            fontSize: "20px", 
                            transform: active ? "rotate(180deg)": "rotate(0deg)",
                            transition: "transform 0.2s ease"
                        }} 
                    />
                </div>
            </div> 
            <div 
                className = "accordionContent"
                ref = {contentRef}
                >
                    <AccordionContent
                        index = {index}
                        todo = {todo}
                        removeTodo = {removeTodo}
                        editTodo = {editTodo}
                        contentRef = {contentRef}
                        active = {active}
                        calendarDate = {calendarDate}
                        setCalendarDate = {setCalendarDate}
                    >
                    </AccordionContent>
            </div>
        </div>
    )
};