import React from "react";

function Input({ variant, inputName, inputId, inputType, ...props }) {
  return (
    <input
      name={inputName}
      id={inputId}
      type={inputType}
      className={variant}
      placeholder="default text"
      {...props}
    />
  );
}

export default Input;
