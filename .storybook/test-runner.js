const { getStoryContext } = require("@storybook/test-runner");

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

module.exports = {
  async preRender(page, story) {
    const context = await getStoryContext(page, story);
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter =
      context.parameters?.viewport?.viewports?.[viewportName];

    if (viewportParameter) {
      const viewportSize = Object.entries(viewportParameter.styles).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // make sure your viewport config in Storybook only uses numbers, not percentages
          [screen]: parseInt(size),
        }),
        {}
      );

      page.setViewportSize(viewportSize);
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
};
