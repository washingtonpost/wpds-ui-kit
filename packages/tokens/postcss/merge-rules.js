const postcss = require("postcss");

const enhancedPlugin = () => {
  return {
    postcssPlugin: "postcss-enhanced-plugin",
    Once(root) {
      const propertyMap = {};

      // Traverse through all rules
      root.walkRules((rule) => {
        rule.walkDecls((decl) => {
          const key = `${decl.prop}:${decl.value}`;
          if (!propertyMap[key]) {
            propertyMap[key] = new Set();
          }
          propertyMap[key].add(rule);

          // Remove --sxs definitions
          if (decl.prop.startsWith("--sxs")) {
            decl.remove();
          }
        });

        // Remove specific selectors if not within :root
        if (rule.selector !== ":root" && rule.selector.includes(".wpds-t-")) {
          if (rule.selector.includes(",")) {
            rule.selector = rule.selector
              .split(",")
              .map((sel) => sel.trim())
              .filter((sel) => !sel.includes(".wpds-t-"))
              .join(", ");
          } else {
            rule.remove();
          }
        }
      });

      // Merge common properties into a single rule
      Object.keys(propertyMap).forEach((key) => {
        const [prop, value] = key.split(":");
        const rules = propertyMap[key];
        if (rules.size > 1) {
          rules.forEach((rule) => {
            rule.walkDecls(prop, (decl) => {
              if (decl.value === value) {
                decl.remove();
              }
            });
          });

          // Add the merged declaration to the first rule
          rules.values().next().value.append({ prop, value });
        }
      });

      // Remove empty at-rules, and remove keyframes
      root.walkAtRules((atRule) => {
        if (
          atRule.name === "keyframes" ||
          !atRule.nodes ||
          atRule.nodes.length === 0
        ) {
          atRule.remove();
        }
      });

      // Remove empty rules created by partial selector removal
      root.walkRules((rule) => {
        if (rule.nodes.length === 0 || rule.selector.trim() === "") {
          rule.remove();
        }
      });

      // add :host to all rules
      root.walkRules((rule) => {
        // exclude ".wpds-dark.wpds-dark"
        if (rule.selector.includes(".wpds-dark.wpds-dark")) {
          return;
        }
        rule.selector = `:host, ${rule.selector}`;
      });
    },
  };
};

enhancedPlugin.postcss = true;
module.exports = enhancedPlugin;
