import React from "react";
import styles from "./Button.module.css";
function Button({ variant, children, ...props }) {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;
