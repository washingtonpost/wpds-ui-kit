module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [1, "always", ["dependencies", "build", "release"]],
  },
};
