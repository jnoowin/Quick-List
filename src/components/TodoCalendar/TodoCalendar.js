import React from 'react';
import CalendarListItem from '../CalendarListItem/CalendarListItem';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

export default function TodoCalendar({ todos, todoInputRef, updateCalendarDate, editTodo }) {

    const onSelect = (value) => {
        todoInputRef.current.focus();
        updateCalendarDate(value.format("M-D-YYYY"));
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
                    value.format("M-D-YYYY") === todo.date ?
                    <CalendarListItem 
                        key = {todo.id}
                        title = {todo.title}
                        todo = {todo}
                        editTodo = {editTodo}
                        index = {index}
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
        />
    );
};