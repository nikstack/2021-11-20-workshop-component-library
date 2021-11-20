import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from "./Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    label: { control: "text"},
    placeholder: { control: "text"},
    prefill_text: { control: "text"},
    validation_text: { control: "text"},
    width: { control: "number" },
    height: { control: "number" },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
