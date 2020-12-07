import React from "react";
import "./DateDivider.css";
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export default function DateDivider({ date }) {
  return (
    <div className="dateDivider">
      <h1 className="dateText">{dayjs(date, "M-D-YYYY").format("dddd, MMMM D")}</h1>
    </div>
  );
}
