import React from "react";

const Header = () => {
  return (
    <header>
      <select name="selection">
        <option value="schedule">Schedule</option>
        <option value="projects">Projects</option>
      </select>
    </header>
  );
};

export default Header;
