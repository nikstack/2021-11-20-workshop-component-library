import React, { useState } from "react";
import "./InputField.css";

export enum FormatType {
    TELEPHONE = 'TELEPHONE',
    IBAN = 'IBAN',
}

interface InputFieldProps extends HTMLInputElement {
    formatType?: FormatType,
}

export const InputField = ({ formatType, defaultValue, placeholder }: InputFieldProps) => {
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
            return;
        }

        setValue(() => (formatter.getFormattedValue(value)))
    }

    return <input placeholder={placeholder}
                  defaultValue={defaultValue}
                  onChange={e => {
                      format(e.target.value)
                  }}
    />;
};

abstract class Formatter {
    getFormattedValue(value: string): string {
        return ''
    }

    constructor(private regex: RegExp) {
    }

}

class IBANFormatter extends Formatter {
    constructor() {
        super(/\w\w\d\d/);
    }
}

class TelephoneFormatter extends Formatter {
    constructor() {
        super(/\w\w\d\d/);
    }
}
