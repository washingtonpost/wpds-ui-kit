const prettier = require("prettier");
const lerna = require("./../lerna.json");

module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new WPDS UI kit component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the name of the component? i.e. VisuallyHidden",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }

          return "component name is required";
        },
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "addMany",
          destination: `../ui/{{ dashCase componentName }}`,
          base: "../templates/component",
          templateFiles: "../templates/component/**/*",
          data: {
            packageName: "{{ dashCase componentName }}",
            componentName: "{{ componentName }}",
            version: lerna.version,
          },
        },
        {
          type: "append",
          path: "../ui/kit/src/index.ts",
          pattern: "// insert new component exports here",
          template: `export * from "@washingtonpost/wpds-{{ dashCase componentName }}";`,
        },
      ];

      actions.push({
        type: "append",
        path: "../ui/kit/package.json",
        pattern: `"dependencies": {`,
        template: `"@washingtonpost/wpds-{{ dashCase componentName }}": "${lerna.version}",`,
      });
      actions.push({
        type: "append",
        path: "../ui/kit/package.json",
        pattern: `"peerDependencies": {`,
        template: `"@washingtonpost/wpds-{{ dashCase componentName }}": "*",`,
      });

      // format the package.json file using prettier.format
      actions.push({
        type: "modify",
        path: "../ui/kit/package.json",
        pattern: /\n/,
        template: "",
        transform: function (file) {
          return prettier.format(file, {
            parser: "json",
          });
        },
      });

      return actions;
    },
  });
};
