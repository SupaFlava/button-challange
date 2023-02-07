import React from "react";

function HeaderText({ variant, text, ...props }) {
  return <h2 className={variant}>{text}</h2>;
}

export default HeaderText;
