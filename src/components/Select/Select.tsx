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
            {selected ? (
                <button
                    value=""
                    onClick={toggleDropdown}
                    className="select-button select-selected">
                    {selected}
                    <DownArrowIcon />
                </button>
            ) : (
                <button
                    value=""
                    onClick={toggleDropdown}
                    id="select-placeholder"
                    className="select-button select-selected">
                    {props.placeholder ?? "placeholder"}
                </button>
            )}
            {open && (
                <div id="select-dropdown">
                    {props.options.map((option) => {
                        let classNames = "select-button select-dropdown-button";

                        if (option === selected) {
                            classNames += " select-dropdown-selected";
                        }
                        return (
                            <button
                                key={option}
                                onClick={() => onSelect(option)}
                                className={classNames}>
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}
        </>
    );
};

const DownArrowIcon = () => {
    return (
        <div
            style={{
                padding: "0 16px 0 16px",
            }}>
            <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.89098 5.83579C5.69249 6.05474 5.35658 6.05474 5.1581 5.83579L0.661558 0.875789C0.360527 0.543731 0.588032 0 1.028 0H10.0211C10.461 0 10.6885 0.543731 10.3875 0.875789L5.89098 5.83579Z"
                    fill="#333333"
                />
            </svg>
        </div>
    );
};
