import React from "react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Global/Header",
  component: Header,
  argTypes: {
    primaryLabels: {
      control: "text",
      defaultValue: "",
    },
    primaryLabelCTA: {
      control: "boolean",
      defaultValue: false,
    },
    secondaryLabels: {
      control: "text",
      defaultValue: "",
    },
  },
};

interface ArgsType {
  primaryLabels: string;
  primaryLabelCTA: boolean;
  secondaryLabels: string;
}

const Template = (args: ArgsType) => {
  /**
   * Map args to props
   * Unless primaryLabels, secondaryLabels are empty strings,
   * split by "," and map into a link object with a dummy href value
   *  */
  const { primaryLabels, primaryLabelCTA, secondaryLabels } = args;
  const props: HeaderProps = {
    primaryLinks: primaryLabels
      ? primaryLabels.split(",").map((label, index, array) => ({
          href: "https://google.com",
          label,
          // Applies cta property on last link if primaryLabelCTA is true
          cta: index === array.length - 1 && primaryLabelCTA,
        }))
      : [],
    secondaryLinks: secondaryLabels
      ? secondaryLabels.split(",").map((label) => ({
          href: "https://google.com",
          label,
        }))
      : [],
  };

  return <Header {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  primaryLabels: "Sweats,Accessories",
  secondaryLabels: "Contact",
};

export const SaleSectionCTA = Template.bind({});
SaleSectionCTA.args = {
  primaryLabels: "Sweats,Accessories,Sale",
  primaryLabelCTA: true,
  secondaryLabels: "Contact",
};
