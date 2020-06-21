import React from 'react';

export default function Accordion({todo}) {
    return(
        <div className = "accordionSection">
            <button className = "accordion">
                <p className = "accordionTitle">{todo.text}</p>               
            </button>
            <div className = "accordionContent">
                <div 
                    className = "accordionText"
                    dangerouslySetInnerHTML = {{__html: todo.content}}
                    >

                </div>
            </div>
        </div>
    )
}