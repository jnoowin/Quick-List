import React from 'react';
import { Calendar } from 'antd';
import 'antd/dist/antd.css';

export default function TodoCalendar({todos}) {
    return(
        <Calendar 
            style = {{maxWidth: "75%"}}
        >
        </Calendar>
    );
};