import React from "react";
import getDates from "../util/getDates";

const Grid = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const dates = getDates(currentYear, currentMonth);

  const markup = dates.map((date) => {
    return (
      <span
        className={`${date.getDay() === 6 ? "red" : ""}`}
      >{`${date.getDate()}.${date.getMonth()}.`}</span>
    );
  });

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
      }}
      className="grid-header"
    >
      {markup}
    </div>
  );
};

export default Grid;
