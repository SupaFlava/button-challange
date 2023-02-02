import React, { useState } from "react";
import Button from "./button";

function ButtonProfile() {
  const PRIMARY = "primary";
  const [pickStyle, setPickStyle] = useState("");
  function handleClick(e) {
    setPickStyle(e.target.innerText.toLowerCase());
  }

  return (
    <div>
      <ul>
        <li value={"primary"} onClick={(e) => handleClick(e)}>
          Primary
        </li>
        <li value={"secondary"} onClick={(e) => handleClick(e)}>
          Secondary
        </li>
        <li value={"info"} onClick={(e) => handleClick(e)}>
          Info
        </li>
        <li value={"warning"} onClick={(e) => handleClick(e)}>
          Warning
        </li>
        <li value={"info"} onClick={(e) => handleClick(e)}>
          Danger
        </li>
      </ul>
      <Button style={pickStyle} />
    </div>
  );
}
export default ButtonProfile;
