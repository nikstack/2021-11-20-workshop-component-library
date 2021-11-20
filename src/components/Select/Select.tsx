import React from "react";
import "./Select.css";

interface SelectProps {
    selectedOption?: string;
    options: string[];
    label?: string;
    placeholder?: string;
}

export const Select = (props: SelectProps) => {
    const [selected, setSelected] = React.useState<string>();
    const [open, toggleOpen] = React.useState(false);

    React.useEffect(() => {
        if (!props.selectedOption) return;
        setSelected(props.selectedOption);
    }, [props.selectedOption]);

    const onSelect = (option: string) => {
        toggleOpen(false);
        setSelected(option);
        console.log("fired");
    };

    const toggleDropdown = () => {
        toggleOpen(!open);
    };

    return (
        <>
            {props.label && <text id="select-label">{props.label}</text>}
            <div id="select-selected">
                {selected ? (
                    <button
                        value=""
                        onClick={toggleDropdown}
                        className="select-button">
                        {selected}
                    </button>
                ) : (
                    <button
                        value=""
                        onClick={toggleDropdown}
                        id="select-placeholder"
                        className="select-button">
                        {props.placeholder ?? "placeholder"}
                    </button>
                )}
            </div>
            {open && (
                <div id="select-dropdown">
                    {props.options.map((option) => {
                        return (
                            <button
                                key={option}
                                onClick={() => onSelect(option)}
                                className="select-button select-dropdown-button">
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}
        </>
    );
};
