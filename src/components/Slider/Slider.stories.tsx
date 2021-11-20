import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slider, RangeSlider } from "./Slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  range: false,
};

export const Range = Template.bind({});
Range.args = {
  range: true,
};