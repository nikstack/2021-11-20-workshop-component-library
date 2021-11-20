import React, { useState } from "react";
import "./FormatInputField.css";

export enum FormatType {
    TELEPHONE = 'TELEPHONE',
    IBAN = 'IBAN',
}

interface InputFieldProps extends HTMLInputElement {
    formatType?: FormatType,
}

export const FormatInputField = ({ formatType, defaultValue = '', placeholder }: InputFieldProps) => {
    // --- YOUR CODE HERE ---

    const [value, setValue] = useState<string>(defaultValue);

    const getFormatter = () => {
        if (!formatType) {
            return;
        }
        switch (formatType) {
            case FormatType.TELEPHONE:
                return new TelephoneFormatter();
            case FormatType.IBAN:
                return new IBANFormatter();
            default:
                return null;
        }
    }

    const formatter = getFormatter();

    const format = (value: string) => {
        if (!formatter) {
            setValue(value)
            return;
        }

        setValue(() => (formatter.getFormattedValue(value)))
    }

    return <input placeholder={placeholder}
                  value={value}
                  onChange={e => {
                      format(e.target.value)
                  }}
    />;
};

abstract class Formatter {
    getFormattedValue(value: string): string {

        const matches = value.replaceAll(' ', '').match(this.regex);

        console.log(matches);
        if (!matches) {
            return value;
        }
        return matches.slice(1).filter(value => !!value).join(' ');
    }

    constructor(private regex: RegExp) {
    }

}

class IBANFormatter extends Formatter {
    constructor() {
        super(/^(\w\w\d\d) ?(\d{1,4})? ?(\d{1,4})? ?(\d{1,4})? ?(\d{1,4})? ?(\d{1,2})?$/);
    }
}

class TelephoneFormatter extends Formatter {
    constructor() {
        super(/\w\w\d\d/);
    }
}
