import React from "react";
import styles from "./InputLabel.module.css";

function InputLabel({ variant, children, ...props }) {
  return <label className={styles[variant]}>{children}</label>;
}

export default InputLabel;
