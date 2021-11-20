import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import {FormatType, InputField} from "./InputField";

export default {
    title: "Components/InputField",
    component: InputField,
    argTypes: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
    <InputField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholderAndValue = Template.bind({});
WithPlaceholderAndValue.args = { placeholder: 'Hello World', defaultValue: 'Default Value' }

export const IBAN = Template.bind({});
IBAN.args = { formatType: FormatType.IBAN, placeholder: 'DE12 3456 ...' }
