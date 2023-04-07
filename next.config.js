const path = require("path");

module.exports = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
