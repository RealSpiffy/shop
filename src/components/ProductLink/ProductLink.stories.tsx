import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductLink } from "./ProductLink";

export default {
  title: "Example/ProductLink",
  component: ProductLink,
  argTypes: {
    href: { control: "text", default: "" },
    label: { control: "text", default: "" },
    image: { control: "object", default: undefined },
    revealImage: { control: "object", default: undefined },
    price: { control: "number", default: undefined },
    compareAtPrice: { control: "number", default: undefined },
    unavailable: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof ProductLink>;

const Template: ComponentStory<typeof ProductLink> = (args) => (
  <ProductLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "/productLink",
  label: "Product Label",
  image: {
    src: "https://picsum.photos/200/300",
  },
  revealImage: {
    src: "https://picsum.photos/id/237/200/300",
  },
  price: 52,
};

export const SalePrice = Template.bind({});
SalePrice.args = {
  href: "/productLink",
  label: "Product Label",
  image: {
    src: "https://picsum.photos/200/300",
  },
  revealImage: {
    src: "https://picsum.photos/id/237/200/300",
  },
  price: 52,
  compareAtPrice: 87,
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  href: "/productLink",
  label: "Product Label",
  image: {
    src: "https://picsum.photos/200/300",
  },
  revealImage: {
    src: "https://picsum.photos/id/237/200/300",
  },
  price: 52,
  compareAtPrice: 78,
  unavailable: true,
};
export const NoImage = Template.bind({});
NoImage.args = {
  href: "/productLink",
  label: "Product Label",
  price: 52,
  compareAtPrice: 52,
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  label: "Product Label",
  image: {
    src: "https://picsum.photos/200/300",
  },
  revealImage: {
    src: "https://picsum.photos/id/237/200/300",
  },
};
