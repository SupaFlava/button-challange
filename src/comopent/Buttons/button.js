import React from "react";
function Button({ variant, className, children, ...props }) {
  return (
    <button className={`btn ${variant} `} {...props}>
      {children}
    </button>
  );
}

export default Button;
