import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PreviewAlert } from "./PreviewAlert";

export default {
  title: "Example/PreviewAlert",
  component: PreviewAlert,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PreviewAlert>;

const Template: ComponentStory<typeof PreviewAlert> = (args) => (
  <PreviewAlert {...args} />
);

export const Default = Template.bind({});
