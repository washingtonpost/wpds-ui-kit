/* eslint-disable @typescript-eslint/no-var-requires */
const rule = require("./theme-colors");
const RuleTester = require("eslint").RuleTester;
/* eslint-enable @typescript-eslint/no-var-requires */

const ruleTester = new RuleTester();

ruleTester.run("theme-colors", rule, {
  valid: [
    {
      code: "var style = {color: Theme.theme.colors.primary}",
    },
  ],

  invalid: [
    {
      code: "var style = {color: '#000000'}",
      errors: [
        {
          message:
            "Use color tokens instead of hex values for maintainability. #000000 can be replaced with gray0",
        },
      ],
    },
    {
      code: "var style = {color: '#ff00ff'}",
      errors: [
        {
          message:
            "Use color tokens instead of hex values for maintainability. #ff00ff can be replaced with red200",
        },
      ],
    },
    {
      code: "var style = {border: '1px solid #666666'}",
      errors: [
        {
          message:
            "Use color tokens instead of hex values for maintainability. #666666 can be replaced with accessible",
        },
      ],
    },
  ],
});
