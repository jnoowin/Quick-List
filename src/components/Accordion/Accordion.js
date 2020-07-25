import React, { useState, useRef} from 'react';
import "./Accordion.css";
import CheckBox from "../CheckBox/CheckBox";
import AccordionContent from "../AccordionContent/AccordionContent";
import { DownOutlined } from '@ant-design/icons';

export default function Accordion({ index, todo, removeTodo, editTodo, calendarDate, setCalendarDate }) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    const titleStyle = {
        textDecoration: todo.isCompleted ? "line-through" : "",
        color: todo.isCompleted ? "darkGrey": "black"
    };

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
                        todo = {todo}
                        editTodo = {editTodo}
                        index = {index}
                    >
                </CheckBox>
                <p 
                    className = "accordionTitle"
                    style = {titleStyle}
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