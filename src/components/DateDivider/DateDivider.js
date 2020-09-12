import React from 'react';
import "./DateDivider.css";
const moment = require('moment');

export default function DateDivider({ date }) {
    const formattedDate = date[2] + "-" + date[0] + "-" + date[1];
    return(
        <div className = "dateDivider">
            <h1 className = "dateText">
                {moment(formattedDate).format("dddd") + ", " + moment(formattedDate).format("MMMM") + " "+ moment(formattedDate).format("D")}
            </h1>
        </div>
    );
}