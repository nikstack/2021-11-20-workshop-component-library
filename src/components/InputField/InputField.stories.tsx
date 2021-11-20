import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputType, InputField } from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Default = Template.bind({});
Default.args = {placeholderText:"Text...", validation:true, validationText: "Validation Text", type:InputType.text};

export const LabelText = Template.bind({});
LabelText.args = {label: "Label", placeholderText:"Text...", validation:true, validationText: "Validation Text", value:"I'm a text", type:InputType.text};

export const LabelNumber = Template.bind({});
LabelNumber.args = {label: "Label", placeholderText:"Text...", validation:true, validationText: "Validation Text", value:"020202", type:InputType.number};

export const FalseInput = Template.bind({});
FalseInput.args = {label: "Label", placeholderText:"Text...", validation:false, validationText: "Validation Text", type:InputType.text};