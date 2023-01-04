const path = require("path");

module.exports = {
  images: {
    domains: ["cdn.shopify.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};
