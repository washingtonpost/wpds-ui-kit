// eslint-disable-next-line @typescript-eslint/no-var-requires
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
  swcMinify: false,
  images: {
    domains: ["i.pravatar.cc"],
  },
});
