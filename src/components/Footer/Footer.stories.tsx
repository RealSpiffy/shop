import React from "react";
import { Footer, FooterProps } from "./Footer";

export default {
  title: "Global/Footer",
  component: Footer,
  argTypes: {
    linkGroups: {
      control: "text",
      defaultValue: "",
    },
  },
};

interface ArgsType {
  linkGroups: string;
}

const Template = (args: ArgsType) => {
  /**
   * Map args to props
   * Unless linkGroups is empty string,
   * split by "|" and map into array of csv strings
   * then split by "," into string array where first string is the group label
   * and subsequent strings are link labels to be mapped into link objects with
   * dummy href values
   *  */
  const { linkGroups } = args;
  const props: FooterProps = {
    linkGroups: linkGroups
      ? linkGroups.split("|").map((csvString) => {
          const [groupLabel, ...linkLabels] = csvString.split(",");
          const links = linkLabels.map((linkLabel) => ({
            href: "https://google.com",
            label: linkLabel,
          }));
          return {
            label: groupLabel,
            links,
          };
        })
      : [],
  };

  return <Footer {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  linkGroups:
    "Information,Store Info,Contact|Customer Care,FAQ,Returns|Social,Instagram,Twitter",
};
