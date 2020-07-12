import React from 'react';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

export default function TodoCalendar({ todos, todoInputRef, setCalendarDate }) {
    const onSelect = (value) => {
        todoInputRef.current.focus();
        setCalendarDate(value.format("MM-DD-YYYY"));
    };

    const calendarStyle = {
        width: "70%", 
        maxWidth: "70%", 
        marginRight: "1vw" 
    };

    const dateCellRender = (value) =>{
        return(
            <ul>
                {todos.map((todo, index) => (
                    value.format("MM-DD-YYYY") === todo.date ?
                    <li key = {`${value.format("MM-DD-YYYY") + index}`}>
                        {todo.title}
                    </li>
                    :
                    null
                ))}
            </ul>
        );
    };
    
    return(
        <Calendar
            style = {calendarStyle}
            dateCellRender  = {dateCellRender}
            onSelect = {onSelect}
        >
        </Calendar>
    );
};