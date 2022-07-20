import React from "react";
import { Box, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import Success from "@washingtonpost/wpds-assets/asset/success";

export const PropsTable = ({ props }) => (
  <Box
    role="region"
    tabIndex={0}
    css={{
      overflow: "auto",
      outline: "$size$025 solid $colors$alpha25",

      "@sm": {
        width: "90vw",
      },
    }}
  >
    <Box
      as="table"
      css={{
        borderCollapse: "collapse",
        borderSpacing: "0",
        width: "-webkit-fill-available",

        "@sm": {
          width: "max-content",
        },

        "& th": {
          textAlign: "left",
          fontWeight: "$light",
          borderBottom: "1px solid $subtle",
          fontSize: "$100",
          color: "$accessible",
          py: "$100",
          px: "$100",
        },
        "& td": {
          borderBottom: "1px solid $subtle",
          fontSize: "$100",
          color: "$accessible",
          py: "$100",
          px: "$100",
        },
        "& td:first-child": {
          fontWeight: "$bold",
          color: "$primary",
        },
      }}
    >
      <thead>
        <tr>
          <th>Prop</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {props.map(
          ({
            name,
            description,
            type,
            rawType = "",
            required,
            defaultValue,
          }) => (
            <Box
              as="tr"
              key={name}
              css={{
                verticalAlign: type === "enum" ? "top" : "middle",
              }}
            >
              <td>{name}</td>
              <td width="25%">{description}</td>
              <Box as="td">
                <Box
                  css={
                    type === "enum" && {
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "$050",
                    }
                  }
                >
                  <span>{type}</span>
                  <Box
                    css={{
                      fontFamily: "$meta",
                      fontSize: "$087",
                      fontWeight: "$light",
                      lineHeight: "$110",
                      fontStyle: "italic",
                    }}
                  >
                    {type === "enum" ? rawType : ""}
                  </Box>
                </Box>
              </Box>
              <td>{defaultValue}</td>
              <td>
                {required === "true" ? (
                  <Box
                    css={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      columnGap: "calc($050 / 2)",
                    }}
                  >
                    <Icon fill={theme.colors.success}>
                      <Success />
                    </Icon>
                    True
                  </Box>
                ) : (
                  "False"
                )}
              </td>
            </Box>
          )
        )}
      </tbody>
    </Box>
  </Box>
);
