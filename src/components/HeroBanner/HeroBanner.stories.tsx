import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";

export default {
  title: "Example/HeroBanner",
  component: HeroBanner,
  argTypes: {
    background: {
      control: "object",
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => (
  <HeroBanner {...args} />
);

const placeholderBg = {
  src: "hero-bg.png",
  alt: "concrete wall",
};

export const Default = Template.bind({});
Default.args = {
  background: placeholderBg,
};
