import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CollectionLink } from "./CollectionLink";

export default {
  title: "Example/CollectionLink",
  component: CollectionLink,
  argTypes: {
    href: {
      control: "text",
      defaultValue: "",
    },
    label: {
      control: "text",
      defaultValue: "",
    },
    background: {
      control: "object",
    },
  },
} as ComponentMeta<typeof CollectionLink>;

const Template: ComponentStory<typeof CollectionLink> = (args) => (
  <CollectionLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  background: { src: "/collectionImg" },
  label: "collection",
  href: "/collection",
};

export const NoBackground = Template.bind({});
NoBackground.args = {
  background: "",
  label: "No Background",
  href: "/other",
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  background: { src: "/upcomingImg" },
  label: "Upcoming (no link provided)",
  href: "",
};
