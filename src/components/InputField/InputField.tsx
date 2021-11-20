import { useState } from "@storybook/addons";
import React from "react";
import "./InputField.css";

export enum InputType {
  text="text",
  number="number",
}

interface InputFieldProps {
  label?: string,
  value?: string,
  validation: boolean,
  validationText: string,
  placeholderText: string,
  type: InputType,
}

export const InputField = ({ label="", validationText, placeholderText, validation, value, type, ...props }: InputFieldProps) => {

  return (
  <div className={"InputField"}>
    <label className={"InputLabel"}>{label}</label>
    <div className={["InputBox ValidationBox", validation].join("--")}>
      <input className={"Input"} type={type} placeholder={placeholderText} value={value}></input>
    </div>
    <label className={["Validation", validation].join("--")}>{validationText}</label>
  </div>
  );
};
