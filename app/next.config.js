const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  rewrites: [
    {
      source: "/storybook",
      destination: "/storybook/index.html",
    },
  ],
});
