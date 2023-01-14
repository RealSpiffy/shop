import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductLink } from "./ProductLink";

export default {
  title: "Example/ProductLink",
  component: ProductLink,
  argTypes: {
    href: { control: "text", default: "" },
    label: { control: "text", default: "" },
    image: { control: "text", default: "" },
    revealImage: { control: "text", default: "" },
    price: { control: "number", default: "" },
    compareAtPrice: { control: "number", default: "" },
    unavailable: { control: "boolean", default: "false" },
  },
} as ComponentMeta<typeof ProductLink>;

const Template: ComponentStory<typeof ProductLink> = (args) => (
  <ProductLink {...args} />
);

// const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
//   console.log("Hover", e.target);
// };

export const Default = Template.bind({});
Default.args = {
  href: "/productLink",
  label: "Grey Hoodie",
  image: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw3409b153/1_front_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  revealImage: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1854abfe/2_side_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  price: 52,
  compareAtPrice: 52,
  unavailable: false,
};

export const SalePrice = Template.bind({});
SalePrice.args = {
  href: "/productLink",
  label: "Grey Hoodie",
  image: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw3409b153/1_front_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  revealImage: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1854abfe/2_side_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  price: 52,
  compareAtPrice: 87,
  unavailable: false,
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  href: "/productLink",
  label: "Grey Hoodie",
  image: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw3409b153/1_front_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  revealImage: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1854abfe/2_side_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  price: 52,
  compareAtPrice: 52,
  unavailable: true,
};
export const NoImage = Template.bind({});
NoImage.args = {
  href: "/productLink",
  label: "Grey Hoodie",
  img: { src: "" },
  revealImage: { src: "" },
  price: 52,
  compareAtPrice: 52,
  unavailable: false,
};

export const Upcoming = Template.bind({});
Upcoming.args = {
  href: "",
  label: "Grey Hoodie",
  image: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw3409b153/1_front_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  revealImage: {
    src: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1854abfe/2_side_750/00425541-01.jpg?sw=1000&sh=1500",
  },
  price: "",
  compareAtPrice: "",
  Unavailable: "",
};
