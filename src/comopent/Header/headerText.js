import React from "react";
import styles from "./HeaderText.module.css";
function HeaderText({ variant, children, ...props }) {
  return <h2 className={styles[variant]}>{children}</h2>;
}

export default HeaderText;
