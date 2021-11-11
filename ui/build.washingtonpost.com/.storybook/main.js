module.exports = {
	stories: ["../ui/**/*.stories.@(ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"storybook-addon-playroom",
		"@storybook/addon-a11y",
		"storybook-dark-mode",
	],
	webpackFinal: async (config, { configType }) => {
		if (process.env.NODE_ENV === "production") {
			config.output.publicPath = "/storybook/";
		}
		return config;
	},
	managerWebpack: async (config) => {
		if (process.env.NODE_ENV === "production") {
			config.output.publicPath = "/storybook/";
		}
		return config;
	},
	previewBody: (body) => `${body}`,
};
