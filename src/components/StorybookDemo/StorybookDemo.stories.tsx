import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StorybookDemo, Backgrounds } from "./StorybookDemo";

export default {
  title: "Example/StorybookDemo",
  component: StorybookDemo,
  argTypes: {
    background: {
      control: "select",
      options: [...Object.keys(Backgrounds), "#000", "#fff"],
      mapping: Backgrounds,
    },
    color: {
      control: { type: "color", presetColors: Object.values(Backgrounds) },
    },
    size: { control: { type: "range", min: 50, max: 500, step: 10 } },
  },
} as ComponentMeta<typeof StorybookDemo>;

const Template: ComponentStory<typeof StorybookDemo> = (args) => (
  <StorybookDemo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  background: "Blue",
  color: "#fff",
  text: "Default text",
  borderRadius: 0,
  size: 70,
};

export const Sun = Template.bind({});
Sun.args = {
  background: "Yellow",
  color: "#000",
  text: "I am a sun",
  borderRadius: 100,
  size: 200,
};
