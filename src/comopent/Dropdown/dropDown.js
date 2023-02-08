import React from "react";
import styles from "./DropDown.module.css";

function DropDown({ children, value, ...props }) {
  return (
    <select className={styles}>
      {children.map((child, index) => (
        <option key={index} value={value}>
          {child.label}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
