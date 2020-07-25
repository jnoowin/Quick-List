import React from 'react';
import CalendarListItem from '../CalendarListItem/CalendarListItem';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

export default function TodoCalendar({ todos, todoInputRef, setCalendarDate }) {
    
    const onSelect = (value) => {
        todoInputRef.current.focus();
        setCalendarDate(value.format("M-D-YYYY"));
    };

    const calendarStyle = {
        width: "70%", 
        maxWidth: "70%", 
        marginRight: "1vw" 
    };

    const dateCellRender = (value) =>{
        return(
            <ul>
                {todos.map(todo => (
                    value.format("M-D-YYYY") === todo.date ?
                    <CalendarListItem 
                        key = {todo.id}
                        title = {todo.title}
                    />
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