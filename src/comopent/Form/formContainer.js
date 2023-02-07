import React from "react";
import Button from "../Buttons/button";
import DropDown from "../Dropdown/dropDown";
import Input from "../Input/input";
import InputLabel from "../Label/inputLabel";
import HeaderText from "../Header/headerText";

function FormContainer({ data, ...props }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <HeaderText variant={"header--text"} text={"reusable form"} />
      <InputLabel inputName={"choose your name"} />
      <Input />
      <DropDown data={data} />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default FormContainer;
