import React from "react";
import styles from "./Input.module.css";

function Input({ variant, children, ...props }) {
  return (
    <input className={styles[variant]} {...props} placeholder={children} />
  );
}

export default Input;
