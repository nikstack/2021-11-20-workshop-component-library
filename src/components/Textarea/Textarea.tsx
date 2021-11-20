import { useState } from "@storybook/addons";
import React from "react";
import "./Textarea.css";

interface TextareaProps {
  label?: string,
  placeholder?: string,
  prefill_text?: string
  validation_text?: string
  width?: number
  height?: number
}

export const Textarea = ({ ...props }: TextareaProps) => {
  const style =  {
    width: props.width,
    height: props.height,
  }

  return <div className='text-area-wrapper'>
    {props.label && <h3 className='text-area-label'>{props.label}</h3>}
    <textarea 
      className={["text-area-text", props.validation_text ? 'text-area-text--error' : ""].join(" ")}
      placeholder={props.placeholder ? props.placeholder : ""}
      style={style}
      value={props.prefill_text}
      
    >
    </textarea>
    {props.validation_text && <p className="text-area-validation-text">{props.validation_text}</p>}
  </div>;
};
