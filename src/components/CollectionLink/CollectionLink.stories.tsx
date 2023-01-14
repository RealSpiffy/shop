import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CollectionLink } from "./CollectionLink";

export default {
  title: "Example/CollectionLink",
  component: CollectionLink,
  argTypes: {
    background: {
      control: "object",
      defaultValue: undefined,
    },
    href: {
      control: "text",
      defaultValue: "",
    },
    label: {
      control: "text",
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof CollectionLink>;

const Template: ComponentStory<typeof CollectionLink> = (args) => (
  <CollectionLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  background: {
    src: "https://picsum.photos/id/14/200/200",
    alt: "collection 1",
  },
  label: "Collection",
  href: "/collection",
};

export const NoBackground = Template.bind({});
NoBackground.args = {
  label: "No Background",
  href: "/other",
};

export const NoHref = Template.bind({});
NoHref.args = {
  background: { src: "https://picsum.photos/id/14/200/200", alt: "upcoming" },
  label: "Upcoming (no link provided)",
};
