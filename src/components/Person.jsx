import React from "react";
import getDates from "../util/getDates";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Randy Čupić",
    role: "frontend",
    assignments: [
      {
        project: "Iskon",
        date: {
          from: new Date("2022-07-11T00:00:00"),
          to: new Date("2022-07-19T23:59:00"),
        },
        value: 4,
      },
      {
        project: "Iskon 2",
        date: {
          from: new Date("2022-07-17T00:00:00"),
          to: new Date("2022-07-29T23:59:00"),
        },
        value: 2.5,
      },
    ],
  },
];

const Person = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const dates = getDates(currentYear, currentMonth);

  let markup = [];
  DUMMY_DATA[0].assignments.forEach((task) => {
    if (task.date.from.getMonth() === currentMonth) {
      markup.push(
        <div
          style={{
            gridColumn: `${task.date.from.getDate()} / span ${
              task.date.to.getDate() - task.date.from.getDate() + 1
            }`,
            gridRow: "auto",
            height: `${task.value * 25}px`,
          }}
        >
          <span>{task.project}</span>

          <span className="time">{task.value}h</span>
        </div>
      );
    }
  });

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${dates.length}, 1fr)`,
      }}
      className="person-grid"
    >
      {markup}
    </div>
  );
};

export default Person;
