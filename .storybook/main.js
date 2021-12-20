module.exports = {
  stories: ["../ui/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  previewBody: body => `${body}`,
  features: {
    storyStoreV7: true
  },
  framework: "@storybook/react"
};