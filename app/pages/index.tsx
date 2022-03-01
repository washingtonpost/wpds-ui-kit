import * as React from "react";
import {
  Icon,
  styled,
  AlertBanner,
  Checkbox,
  Container,
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
        <h2>Container</h2>
        <Container
          maxWidth="lg"
          css={{
            width: "100%",
            border: "1px dashed #94538c",
            background: "rgb(148, 83, 140, 0.2)",
            height: "$500",
            color: "$primary",
          }}
        >
          Extra lg
        </Container>

        <h2>Icon with Asset</h2>
        <HStack>
          <Icon label="Chart">
            <Chart />
          </Icon>
          <Icon label="Chart" size="$150">
            <Chart />
          </Icon>
          <Icon label="Chart" size="$200">
            <Chart />
          </Icon>
        </HStack>

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
              <Checkbox checked={true} variant="primary" />
              <Checkbox checked={true} variant="secondary" />
              <Checkbox checked={true} variant="cta" />
            </HStack>
            <HStack>
              <Checkbox checked={true} size="087" />
              <Checkbox checked={true} size="125" />
            </HStack>
            <HStack>
              <Checkbox checked={true} style="fill" />
              <Checkbox checked={true} style="outline" />
            </HStack>
            <HStack>
              <Checkbox checked={true} />
              <Checkbox checked={false} />
              <Checkbox checked="indeterminate" />
            </HStack>
            <HStack>
              <Checkbox disabled />
            </HStack>
          </>
        </HStack>
      </Stack>
    </>
  );
}

export default HomePage;
