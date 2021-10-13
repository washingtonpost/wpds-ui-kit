const path = require("path");
const withTM = require("next-transpile-modules")([]);

withTM({
	async rewrites() {
		return [
			{
				source: "/storybook/:path*",
				destination:
					process.env.NODE_ENV === "production"
						? `/storybook/:path*`
						: `http://localhost:6006/:path*`,
			},
			{
				source: "/playroom/:path*",
				destination:
					process.env.NODE_ENV === "production"
						? `/playroom/:path*`
						: `http://localhost:9000/playroom/:path*`,
			},
		];
	},
	webpack(config) {
		// https://github.com/josephluck/next-typescript-monorepo/blob/master/blog/next.config.js
		const babelRule = config.module.rules.find((rule) =>
			rule.use && Array.isArray(rule.use)
				? rule.use.find((u) => u.loader === "next-babel-loader")
				: rule.use.loader === "next-babel-loader"
		);

		if (babelRule) {
			babelRule.include.push(path.resolve("../"));
		}

		return config;
	},
});
