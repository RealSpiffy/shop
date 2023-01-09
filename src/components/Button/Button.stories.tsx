import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    // Redefines inferred text input into select input
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    // Adds cta and disabled boolean input for all variants
    cta: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    disabledLabel: {
      control: "text",
      defaultValue: "",
    },
    // Hides automatically generated input
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked button", e.target);
};

export const Default = Template.bind({});
Default.args = {
  type: "button",
  label: "Subscribe",
  onClick: handleClick,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "button",
  label: "Subscribe",
  onClick: handleClick,
  disabled: true,
};

export const CTA = Template.bind({});
CTA.args = {
  type: "button",
  label: "Add to Cart",
  onClick: handleClick,
  cta: true,
  disabledLabel: "Sold Out",
};
