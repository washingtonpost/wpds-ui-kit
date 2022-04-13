import * as React from "react";
import {
  Icon,
  styled,
  AlertBanner,
  Checkbox,
  Container,
  Button,
  InputText,
  InputPassword,
} from "@washingtonpost/wpds-ui-kit";
import Chart from "@washingtonpost/wpds-assets/asset/chart";
import Settings from "@washingtonpost/wpds-assets/asset/settings";

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
        All code in this app is meant for testing InputTexts that use objects
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
          <Icon label="Chart" size="150">
            <Chart />
          </Icon>
          <Icon label="Chart" size="200">
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

        <h2>Button</h2>
        <HStack>
          <Button>Hello World</Button>
        </HStack>

        <h2>Checkbox</h2>
        <HStack>
          <>
            <HStack>
              <Checkbox checked variant="primary" size="125" />
              <Checkbox checked variant="secondary" />
              <Checkbox checked variant="cta" />
            </HStack>
            <HStack>
              <Checkbox checked size="087" />
              <Checkbox checked size="125" />
            </HStack>
            <HStack>
              <Checkbox checked />
              <Checkbox checked isOutline />
            </HStack>
            <HStack>
              <Checkbox checked />
              <Checkbox checked={false} />
              <Checkbox checked="indeterminate" />
            </HStack>
            <HStack>
              <Checkbox disabled />
            </HStack>
          </>
        </HStack>

        <h2>InputText</h2>
        <HStack>
          <InputText label="Label" id="it-1" />
          <InputText
            label="Label"
            helperText="Helper text"
            defaultValue="Input text"
            id="it-2"
          />
          <InputText label="Icon" defaultValue="Left" icon="left" id="it-3">
            <Icon label="">
              <Settings />
            </Icon>
          </InputText>
          <InputText
            label="Icon"
            defaultValue="Right"
            icon="right"
            buttonIconText="Settings"
            id="it-4"
          >
            <Icon label="">
              <Settings />
            </Icon>
          </InputText>
        </HStack>
        <HStack>
          <InputText
            label="Type"
            defaultValue="Search"
            type="search"
            id="it-5"
          />
          <InputText label="Type" defaultValue="Url" type="url" id="it-6" />
          <InputText label="Type" defaultValue="Tel" type="tel" id="it-7" />
          <InputText label="Type" defaultValue="Email" type="email" id="it-8" />
        </HStack>
        <HStack>
          <InputText
            label="Behavior"
            defaultValue="Disabled"
            disabled
            id="it-9"
          />
          <InputText
            label="Behavior"
            defaultValue="Error"
            error
            errorMessage="Error Message"
            id="it-10"
          />
          <InputText
            label="Behavior"
            defaultValue="Success"
            success
            id="it-11"
          />
          <InputText
            label="Behavior"
            defaultValue="Required"
            required
            id="it-12"
          />
        </HStack>
        <h2>InputPassword</h2>
        <HStack>
          <InputPassword id="ip-1" />
          <InputPassword id="ip-2" defaultValue="12345" />
        </HStack>
      </Stack>
    </>
  );
}

export default HomePage;
