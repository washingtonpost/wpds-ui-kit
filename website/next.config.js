module.exports = {
  async rewrites() {
    return [
      {
        source: "/storybook/:path*",
        destination:
          process.env.VERCEL === "1"
            ? `/storybook/:path*`
            : `http://localhost:6006/:path*`,
      },
    ];
  },
};
