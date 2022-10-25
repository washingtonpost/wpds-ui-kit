import * as React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import stringifyObject from "stringify-object";
import { camelCase } from "camel-case";
import {
  Button,
  Box,
  Icon,
  InputTextarea,
  theme,
} from "@washingtonpost/wpds-ui-kit";
import { ArrowRight } from "@washingtonpost/wpds-assets";
import { tokenTypeFromProperty, pxToRems, hexToRgba } from "./utils";
import InlineSVG from "./inlineSVG";

import "@washingtonpost/tachyons-css/dist/index.css";

const StyleConverter = () => {
  const [cssRules, setCssRules] = React.useState();
  const [customProperties, setCustomProperties] = React.useState([]);

  const [classesValue, setClassesValue] = React.useState("");
  const [objValue, setObjValue] = React.useState(" ");

  // Find the tachyons css and cache the rules
  React.useEffect(() => {
    const sheetList = document.styleSheets;
    const sll = sheetList.length;
    for (let i = 0; i < sll; i++) {
      const sheet = document.styleSheets[i];
      if (
        (sheet.cssRules[0] && sheet.cssRules[0].cssText) ===
        ":root { font-size: 16px; }"
      ) {
        setCssRules(sheet.cssRules);
      }
    }
  }, [setCssRules]);

  // get all the css vars / custom properties from the tachyons root
  // and store them in state for lookups
  React.useEffect(() => {
    if (!cssRules) return;
    const rll = cssRules.length;

    for (let i = 0; i < rll; i++) {
      const rule = cssRules[i];

      if (rule.cssText.includes(":root") && rule.cssText.includes("--")) {
        const customProps = rule.cssText
          .substring(rule.cssText.indexOf("{") + 2, rule.cssText.indexOf("}"))
          .split("; ")
          .map((prop) => {
            const p = prop.split(":");
            return { name: p[0], value: p[1] };
          })
          .filter((el) => el.value !== undefined);
        setCustomProperties((prev) => [...prev, ...customProps]);
      }
    }
  }, [cssRules, setCustomProperties]);

  // convert entered classes into style object
  const handleConvertClick = () => {
    const obj = {};

    // loop over entered classes, convert
    // and add as properties of the object
    classesValue
      .replace(/\n/g, " ")
      .trim()
      .split(" ")
      .forEach((className) => {
        let cn = className;
        if (cn.includes("hover")) {
          cn += ":hover";
        }
        if (cn.includes("focus")) {
          cn += ":focus";
        }
        const converted = convertClassToEntry(cn);
        if (!converted) return;
        if (cn.includes("hover")) {
          obj["$:hover"] = { [converted.propertyName]: converted.value };
        } else if (cn.includes("focus")) {
          obj["$:focus"] = { [converted.propertyName]: converted.value };
        } else {
          obj[converted.propertyName] = converted.value;
        }
      });

    // convert object to formatted string
    const str = stringifyObject(obj, {
      indent: "  ",
      singleQuotes: false,
      transform: (object, property, originalResult) => {
        if (originalResult.includes("theme.")) {
          return originalResult.replace(/"/g, "").replace(/\\"/g, '"');
        }
        return originalResult;
      },
    });
    setObjValue(str);
  };

  function convertClassToEntry(className) {
    if (!cssRules) return;

    const rll = cssRules.length;
    for (let i = 0; i < rll; i++) {
      const rule = cssRules[i];

      if (
        rule.cssText.includes(`.${className} {`) ||
        rule.cssText.includes(`.${className},`)
      ) {
        const parts = rule.cssText.split(":");

        const prop = camelCase(
          parts[parts.length - 2].substring(
            parts[parts.length - 2].indexOf("{") + 1
          )
        );

        const val = parts[parts.length - 1].substring(
          1,
          parts[parts.length - 1].indexOf(";")
        );

        return {
          propertyName: prop,
          value: getToken(prop, val),
        };
      }
    }
  }

  function getToken(prop, val) {
    const tokenType = tokenTypeFromProperty(prop);
    if (!tokenType) return val;

    let convertedVal = val;

    if (
      convertedVal.indexOf("px") !== -1 &&
      convertedVal.indexOf("px") === convertedVal.length - 2
    ) {
      convertedVal = pxToRems(val);
    }

    if (convertedVal.includes("var(")) {
      convertedVal = convertedVal
        .split(" ")
        .map((part) => {
          if (part.includes("var(")) {
            let val = getCustomPropertyValueFromVar(part);
            if (val && val.includes("var(")) {
              val = getCustomPropertyValueFromVar(val);
            }
            return val;
          } else {
            return part;
          }
        })
        .join(" ");
    }

    if (/#[0-9A-F]{6}/i.test(convertedVal)) {
      convertedVal = convertedVal.replace(/#[0-9A-F]{6}/gi, (color) => {
        if (prop === "boxShadow") {
          return color.toUpperCase();
        }
        return hexToRgba(color);
      });
    }

    if (convertedVal.includes("rgb(")) {
      convertedVal = `rgba(${convertedVal
        .substring(4, convertedVal.length - 1)
        .replace(/ /g, "")},1)`;
    }

    let tokenValue;
    let rgba;

    switch (prop) {
      case "border":
        rgba = convertedVal.substring(convertedVal.lastIndexOf(" ") + 1);
        tokenValue = getTokenValueOfType(rgba, tokenType);
        return (
          "`" +
          convertedVal.replace(rgba, "${theme.colors." + tokenValue + "}") +
          "`"
        );
      default:
        tokenValue = getTokenValueOfType(convertedVal, tokenType);
        if (tokenValue) {
          const isInt = !isNaN(parseInt(tokenValue, 10));
          if (isInt) {
            return `theme.${String(tokenType)}["${tokenValue}"]`;
          } else {
            return `theme.${String(tokenType)}.${tokenValue}`;
          }
        }
    }
    return val;
  }

  function getCustomPropertyValueFromVar(v) {
    const variableName = v.substring(4, v.length - 1);
    return customProperties.find((prop) => prop.name === variableName).value;
  }

  function getTokenValueOfType(val, tokenType) {
    if (!tokenType) return;
    const themeTokens = theme[tokenType];
    const keys = Object.keys(themeTokens);
    let tokenValue = keys.find((key) => {
      const currentToken = themeTokens[key];
      return currentToken.value === val;
    });

    if (tokenType === "colors" && !tokenValue) {
      const colors = keys.filter((key) => !key.includes("alpha"));
      const closest = colors.reduce(
        (prev, curr) => {
          const currVal = themeTokens[curr].value;
          const dist = distance(val, currVal);
          return dist < prev[0] ? [dist, curr] : prev;
        },
        [Number.POSITIVE_INFINITY, colors[0]]
      );
      tokenValue = closest[1];
    }
    return tokenValue;
  }

  function distance(col1, col2) {
    const a = col1
      .substring(5, col1.lastIndexOf(","))
      .split(",")
      .map((num) => parseInt(num, 10));
    const b = col2
      .substring(5, col1.lastIndexOf(","))
      .split(",")
      .map((num) => parseInt(num, 10));

    return Math.sqrt(
      Math.pow(a[0] - b[0], 2) +
        Math.pow(a[1] - b[1], 2) +
        Math.pow(a[2] - b[2], 2)
    );
  }

  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        gap: theme.space["050"],
        marginBlockStart: theme.space["200"],
      }}
    >
      <Box css={{ flex: 1 }}>
        <InputTextarea
          label="Class Names"
          name="classes"
          id="classes"
          value={classesValue}
          onChange={(e) => setClassesValue(e.target.value)}
          css={{ width: "100%", height: "400px" }}
        />
      </Box>
      <Button icon="right" onClick={handleConvertClick}>
        <Icon label="">
          <ArrowRight />
        </Icon>
        Convert
      </Button>
      <Box
        css={{
          flex: 1,
          position: "relative",
        }}
      >
        <SandpackProvider>
          <SandpackLayout style={{ "--sp-layout-height": "400px" }}>
            <SandpackCodeViewer code={objValue} showLineNumbers />
          </SandpackLayout>
        </SandpackProvider>
        <Button
          icon="left"
          isOutline
          variant="primary"
          css={{
            border: 0,
            fontWeight: "$light",
            position: "absolute",
            insetBlockEnd: `calc(${theme.sizes["225"]} * -1)`,
            insetInlineEnd: "0",
          }}
          density="compact"
          onClick={() => {
            // copy code to clipboard
            navigator.clipboard.writeText(objValue);
          }}
          aria-label="Copy code to clipboard"
        >
          <Icon size="100" label="Copy code to clipboard">
            <InlineSVG
              cushion="none"
              path="/img/doc-icons/clipboard.svg"
              height="16"
              width="16"
            />
          </Icon>
          Copy
        </Button>
      </Box>
    </Box>
  );
};

export default StyleConverter;
