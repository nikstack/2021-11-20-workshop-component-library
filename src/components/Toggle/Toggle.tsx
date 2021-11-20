import React from "react";
import "./Toggle.css";

interface TextareaProps {
  label: string;
}

export const Toggle = ({ label, ...props }: TextareaProps) => {
  return (
    <label className="toggle">
      <input className="toggle-input" type="checkbox" />
      <div className="toggle-box">
        <div className="toggle-ball"></div>
      </div>
      <span className="toggle-label">{label}</span>
    </label>
  )
};
