import React from "react";
import { NextSeo } from "~/components/next-seo";
import { getNavigation } from "~/services";
import { Icon, styled } from "@washingtonpost/wpds-ui-kit";
import Header from "~/components/Typography/Headers";
import Link from "~/components/Markdown/Components/link";
import External from "@washingtonpost/wpds-assets/asset/external";
import { P } from "~/components/Markdown/Styling";

const Card = styled("article", {
  border: "1px solid $subtle",
  borderRadius: "$050",
  px: "$150",
  paddingTop: "$100",
  paddingBottom: "$100",
  marginBottom: "$150",
});

export default function Page() {
  return (
    <>
      <NextSeo
        title={`WPDS - Release Notes`}
        description="Release notes for WPDS, the Washington Post Design System."
      />
      <header>
        <Header as="h1">Release notes</Header>
      </header>

      <section>
        <Link
          href="https://github.com/washingtonpost/wpds-ui-kit/releases"
          target="_blank"
          rel="noopener"
          noUnderline
        >
          <Card>
            <Header as="h2">
              Ui Kit Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
            <P>
              WPDS&apos;s UiKit coded in React using Stitches, Radix UI and
              more!. Also our static site to host our latest documentation
              around our design system
            </P>
          </Card>
        </Link>
        <Link
          href="https://github.com/washingtonpost/wpds-assets-manager/releases"
          target="_blank"
          rel="noopener"
          noUnderline
        >
          <Card>
            <Header as="h2">
              WAM Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
            <P>
              WPDS Asset-Manager (also known as WAM) manages all assets as raw
              SVG files. The asset manager is an independent package that allows
              for more streamlined management of our assets.
            </P>
          </Card>
        </Link>
        <Link
          href="https://github.com/washingtonpost/wpds-plugins/releases"
          target="_blank"
          rel="noopener"
          noUnderline
        >
          <Card>
            <Header as="h2">
              Plugins Release notes{" "}
              <Icon size="100">
                <External></External>
              </Icon>
            </Header>
            <P>WPDS Design Tools and Plugins for Figma, Zeplin, and more!</P>
          </Card>
        </Link>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const navigation = await getNavigation();

  return {
    props: {
      navigation,
    },
  };
};
