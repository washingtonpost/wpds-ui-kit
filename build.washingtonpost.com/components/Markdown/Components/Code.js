import { theme, Box } from "@washingtonpost/wpds-ui-kit";
import dynamic from "next/dynamic";
const Sandbox = dynamic(() => import("./Sandbox"));

const Code = (props) => {
  if (
    props.className === "language-jsx" ||
    props.className === "language-mdx"
  ) {
    return (
      <Box
        as="code"
        css={{
          marginBottom: "$100",
          minHeight: "$500",
          maxWidth: "100%",
          width: "100%",
          display: "grid",
          backgroundColor: theme.colors.gray500,
        }}
      >
        <Sandbox
          isGuide={props.isGuide}
          withPreview={props.withPreview}
          hideNavBar={props.hideNavBar}
        >
          {props.children.trim()}
        </Sandbox>
      </Box>
    );
  }

  return (
    <Box
      as="code"
      css={{
        overflowX: "auto",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Code;
