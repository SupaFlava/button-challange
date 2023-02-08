import React, { useState } from "react";
import Button from "./Buttons/Button";
import Input from "./Input/Input";
import InputLabel from "./Label/InputLabel";

function ButtonProfile() {
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
      <Button variant={pickStyle}>hello</Button>
      <InputLabel inputName={pickStyle} inputId={23} />
      <Input inputId={23} variant={pickStyle} name={pickStyle}></Input>
    </div>
  );
}
export default ButtonProfile;
