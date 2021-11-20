import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";

export default {
    title: "Components/Select",
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    selectedOption: "Filled",
    options: ["Filled", "Option 1", "Option 2", "Option 3"],
};

export const Label = Template.bind({});
Label.args = {
    label: "Label",
    options: ["Filled", "Option 1", "Option 2", "Option 3"],
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: "Placeholder",
    options: ["Option 1", "Option 2", "Option 3"],
};
