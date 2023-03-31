// const path = require("path");
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
  typescript: { reactDocgen: false },

  webpackFinal: (webpackConfig) => {
    // This modifies the existing image rule to exclude `.svg` files
    // since we handle those with `@svgr/webpack`.
    const imageRule = webpackConfig.module.rules.find((rule) => {
      if (typeof rule !== "string" && rule.test instanceof RegExp) {
        return rule.test.test(".svg");
      }
    });
    if (typeof imageRule !== "string") {
      imageRule.exclude = /\.svg$/;
    }

    webpackConfig.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return webpackConfig;
  },
};
