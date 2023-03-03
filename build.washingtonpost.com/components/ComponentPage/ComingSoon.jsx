import React from "react";
import { Card } from "@washingtonpost/wpds-ui-kit";
import { P } from "../Markdown/Styling";
import Header from "../Typography/Headers";
import CustomLink from "../Markdown/Components/link";

export const ComingSoon = () => (
  <Card
    css={{
      marginBlockEnd: "$100",
      position: "relative",
      backgroundImage:
        "url(https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: 280,
      paddingTop: 140,
    }}
  >
    <Card>
      <Header>Coming Soon</Header>
      <P>
        This component status is{" "}
        <CustomLink href="/docs/support/component-status" useSignal>
          coming soon
        </CustomLink>{" "}
        and indicates a component is in a queue for future work.
      </P>
    </Card>
  </Card>
);
