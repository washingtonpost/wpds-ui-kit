const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/components",
          destination: "/components/alert-banner",
        },
        {
          source: "/foundations",
          destination: "/foundations/principles",
        },
        {
          source: "/support",
          destination: "/resources/process/support",
        },
      ],
      fallback: [
        {
          source: "/tachyons",
          destination:
            "https://tachyons.preview.now.washingtonpost.com/tachyons",
        },
        {
          source: "/tachyons/:slug*",
          destination:
            "https://tachyons.preview.now.washingtonpost.com/tachyons/:slug*",
        },
        {
          source: "/v0",
          destination: "https://v0.wpds.docs.preview.now.washingtonpost.com",
        },
        {
          source: "/v0/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/:slug*",
        },
        {
          source: "/assets/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/assets/:slug*",
        },
        {
          source: "/img/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/img/:slug*",
        },
      ],
    };
  },
  swcMinify: false,
  images: {
    domains: ["img.youtube.com", "media.giphy.com"],
  },
  async redirects() {
    return [
      {
        source: "/resources/architecture/stitches",
        destination: "/resources/guides/stitches",
        permanent: false,
      },
      {
        source: "/resources/process/releases",
        destination: "/support/release-cycles",
        permanent: false,
      },
      {
        source: "/resources/process/support",
        destination: "/support/get-help",
        permanent: false,
      },
      {
        source: "/resources/process/supported-platforms",
        destination: "/support/supported-platforms",
        permanent: false,
      },
      {
        source: "/resources/process",
        destination: "/support",
        permanent: false,
      },
    ];
  },
});
