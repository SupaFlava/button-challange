import React from "react";
import styles from "./FormContainer.module.css";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import InputLabel from "../Label/InputLabel";
import HeaderText from "../Header/HeaderText";
import DropDown from "../Dropdown/DropDown";

function FormContainer({ children, ...props }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className={styles} onSubmit={handleSubmit}>
      <HeaderText variant={"header__text"}>{"Reusable form"} </HeaderText>
      <InputLabel>{"choose your name"} </InputLabel>
      <Input variant={"input_primary"}>{"Place Holder..."}</Input>
      <DropDown variant={""}>{children}</DropDown>
      <Button type="submit" variant={"btn_primary"}>
        Submit
      </Button>
    </form>
  );
}

export default FormContainer;
