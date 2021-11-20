import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {FormatType, FormatInputField} from "./FormatInputField";

export default {
    title: "Components/InputField",
    component: FormatInputField,
    argTypes: {},
} as ComponentMeta<typeof FormatInputField>;

const Template: ComponentStory<typeof FormatInputField> = (args) => (
    <FormatInputField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholderAndValue = Template.bind({});
WithPlaceholderAndValue.args = { placeholder: 'Hello World', defaultValue: 'Default Value' }

export const IBAN = Template.bind({});
IBAN.args = { formatType: FormatType.IBAN, placeholder: 'DE12 3456 ...' }
