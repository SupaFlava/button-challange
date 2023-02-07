import React from "react";

function InputLabel({ inputId, variant, inputName, ...props }) {
  return <label htmlFor={inputId}>{inputName} </label>;
}

export default InputLabel;
