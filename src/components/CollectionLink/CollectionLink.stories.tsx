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
  <div style={{ width: "530px" }}>
    <CollectionLink {...args} />
  </div>
);

const placeholderBg = {
  src: "https://picsum.photos/id/26/350/350",
  alt: "collection 1",
};

export const Default = Template.bind({});
Default.args = {
  background: placeholderBg,
  label: "Collection",
  href: "/collection",
};

export const LongerCollectionName = Template.bind({});
LongerCollectionName.args = {
  background: placeholderBg,
  label: "Longer Collection Name",
  href: "/other",
};

export const NoBackground = Template.bind({});
NoBackground.args = {
  label: "No Background",
  href: "/other",
};

export const NoHref = Template.bind({});
NoHref.args = {
  background: placeholderBg,
  label: "Upcoming (no link provided)",
};
