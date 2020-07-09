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
            style = {{ width: "70%", maxWidth: "70%", marginRight: "1vw" }}
            dateCellRender  = { dateCellRender }
            onSelect = { onSelect }
        >
        </Calendar>
    );
};