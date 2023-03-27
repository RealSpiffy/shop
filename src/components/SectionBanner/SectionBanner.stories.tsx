import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SectionBanner } from "./SectionBanner";

export default {
  title: "Global/SectionBanner",
  component: SectionBanner,
  argTypes: {
    heading: {
      control: "text",
      defaultValue: "",
    },
    subtitle: {
      control: "text",
      defaultValue: "",
    },
    action: {
      control: "select",
      options: ["default", "a-z", "$-$$$"],
    },
  },
} as ComponentMeta<typeof SectionBanner>;

const Template: ComponentStory<typeof SectionBanner> = (args) => (
  <SectionBanner {...args} />
);

export const Subtitle = Template.bind({});
Subtitle.args = {
  heading: "All Collections",
  subtitle: "4 Collections",
};

export const HeadingOnly = Template.bind({});
HeadingOnly.args = {
  heading: "New Arrivals",
};

export const Action = Template.bind({});
Action.args = {
  heading: "Collection Name",
  subtitle: "6 Items",
  action: "default",
};
