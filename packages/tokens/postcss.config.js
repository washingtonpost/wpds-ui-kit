const cssnano = require("cssnano");
const mergeRules = require("./postcss/merge-rules");

module.exports = {
  plugins: [
    cssnano({
      preset: "advanced",
    }),
    mergeRules(),
  ],
};
