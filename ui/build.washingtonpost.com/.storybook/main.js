module.exports = {
	stories: ["../ui/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-essentials"],
	previewBody: (body) => `${body}`,
	features: {
		storyStoreV7: true,
	},
};
