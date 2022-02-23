import * as React from "react";
import {
  Icon,
  styled,
  AlertBanner,
  Checkbox,
} from "@washingtonpost/wpds-ui-kit";
import Chart from "@washingtonpost/wpds-assets/asset/chart";

const Headline = styled("h1", {
  paddingTop: "$200",
  color: "$primary",
  fontFamily: "$headline",
  fontSize: "$300",
  lineHeight: "$headline",
});

const SubHeadline = styled("h2", {
  color: "$primary",
  fontWeight: "$light",
  fontSize: "$100",
});

const Stack = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  marginBlockStart: "$200",
  borderRadius: "$075",
});

const HStack = styled("section", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  borderRadius: "$075",
});

const variants = ["primary", "secondary", "cta"];
const size = ["087", "125"];
const style = ["outline", "fill"];
const checked = [true, false, "indeterminate"];

function HomePage() {
  return (
    <>
      <Headline>Server Side Testing</Headline>
      <SubHeadline>Testing ground / playground</SubHeadline>
      <p>
        All code in this app is meant for testing components that use objects
        that are only available in JavaScript in the brower.
      </p>

      <Stack>
        <h2>Icon with Asset</h2>
        <Icon label="Chart">
          <Chart />
        </Icon>

        <h2>AlertBanner</h2>
        <AlertBanner.Root position="relative" variant="error">
          <AlertBanner.Content as="p">
            <strong>Example:</strong> boop
          </AlertBanner.Content>
          <AlertBanner.Trigger />
        </AlertBanner.Root>

        <h2>Checkbox</h2>
        <HStack>
          <>
            <HStack>
              {variants.map((variant) => (
                <Checkbox
                  checked={true}
                  key={variant}
                  variant={variant}
                  data-testid={`test-checkbox-${variant}`}
                />
              ))}
            </HStack>
            <HStack>
              {size.map((size) => (
                <Checkbox checked={true} key={size} size={size} />
              ))}
            </HStack>
            <HStack>
              {style.map((style) => (
                <Checkbox key={style} checked={true} style={style} />
              ))}
            </HStack>
            <HStack>
              {checked.map((checkedValue, index) => (
                <Checkbox key={index} checked={true} checked={checkedValue} />
              ))}
            </HStack>
            <HStack>
              {[1, 2, 3].map((value, index) => (
                <Checkbox key={index} disabled value={value} />
              ))}
            </HStack>
          </>
        </HStack>
      </Stack>
    </>
  );
}

export default HomePage;
