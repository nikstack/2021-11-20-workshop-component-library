import React, { useState } from "react";
import "./Checkbox.css";
import { ReactComponent as CheckIcon } from "./check.svg";

interface CheckboxProps {
    name: string;
    value: string;
    label: string;
    isInitialChecked: boolean;
    handleChanged: (isChecked: boolean) => void;
}

export const Checkbox = ({ ...props }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(props.isInitialChecked);

    function toggle(e: any) {
        e.preventDefault();
        e.stopPropagation();

        const toggledIsChecked = !isChecked;

        setIsChecked(toggledIsChecked);
        props.handleChanged && props.handleChanged(toggledIsChecked);
    }

    return (
        <>
            <div className={`Checkbox ${isChecked ? "checked" : ""}`}>
                <label onClick={toggle}>
                    <input
                        type="checkbox"
                        name={props.name}
                        value={props.name}
                        onChange={toggle}
                    />
                    <div className="box">
                        {isChecked ? <CheckIcon /> : "\u00A0"}
                    </div>{" "}
                    {props.label}
                </label>
            </div>
        </>
    );
};
