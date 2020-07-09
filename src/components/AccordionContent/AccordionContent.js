import React, { useState } from 'react';
import "./AccordionText.css";
import { DeleteOutlined, CalendarOutlined, AlignLeftOutlined, PushpinOutlined, EditOutlined } from "@ant-design/icons"

export default function AccordionContent({ index, todo, removeTodo }) {
    const [editOn, setEditOn] = useState("false");

    return(
        <div className = "accordionText">
            <div>
                <PushpinOutlined style = {{ fontSize: "22px", marginRight: "10px" }} />
                {todo.location}
            </div>
            
            <div>
                <CalendarOutlined style = {{ fontSize: "22px", marginRight: "10px" }} />
                {todo.date}
            </div>
            
            <div className = "descriptionSection">
                <AlignLeftOutlined style = {{ fontSize: "22px", marginRight: "10px" }} />
                <div className = "descriptionText">{todo.text}</div>
            </div>
            
            <div className = "optionBar">
                <EditOutlined 
                    style = {{ 
                        fontSize: "26px", 
                        marginRight: "15px",
                        cursor: "pointer",
                        color: editOn ? "inherit": "rgb(100, 140, 250)",
                        transition: "color 0.3s ease"
                    }}
                    onClick = {() => setEditOn(!editOn)}
                />
                <DeleteOutlined 
                    style = {{ fontSize: "26px" }} 
                    onClick = {() => removeTodo(index)}
                />
            </div>
        </div>
    );
};