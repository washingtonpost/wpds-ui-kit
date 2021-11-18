module.exports = {
	components: "./ui/autosuggest",
	outputPath: "./website/public/playroom",
	openBrowser: false,
	baseUrl:
		process.env.NODE_ENV === "production"
			? "/playroom/"
			: "http://localhost:9000/playroom/",
	frameComponent: "./ui/theme/playroom-frame.js",
};
