import React from "react";

function DropDown({ data, value, ...props }) {
  return (
    <select>
      {data.map((d, index) => (
        <option key={index} value={value}>
          {d.label}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
