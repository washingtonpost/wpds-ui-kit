module.exports = {
	components: "./ui/react",
	outputPath: "./website/public/playroom",
	openBrowser: false,
	baseUrl:
		process.env.NODE_ENV === "production"
			? "/playroom/"
			: "http://localhost:9000/playroom/",
};
