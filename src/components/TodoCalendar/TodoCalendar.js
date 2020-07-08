import React from 'react';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

export default function TodoCalendar({ todos, inputRef }) {
    const onSelect = () => {
        inputRef.current.focus();
    };

    const dateCellRender = (value) =>{
        return(
            <ul>
                {todos.map((todo) => (
                    value.format("MM-DD-YYYY") === todo.date ?
                    <li>
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
            style = {{ maxWidth: "75%", marginRight: "1vw" }}
            dateCellRender  = { dateCellRender }
            onSelect = { onSelect }
        >
        </Calendar>
    );
};