import React from "react";
import { styled, theme, Box } from "@washingtonpost/wpds-ui-kit";

const Layout = styled("div", {
  display: "grid",
  gap: theme.space["050"],
  gridTemplateColumns: "repeat(auto-fit, 250px)",
});
const Container = styled("div", {
  width: "100%",
  minHeight: 100,
  padding: theme.space["050"],
  display: "flex",
  flexDirection: "column",
  gap: theme.space["025"],
});
const Label = styled("div", {
  fontSize: theme.fontSizes["100"],
  margin: 0,
});

export default function ThemeAndSemantic() {
  return (
    <Layout>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          Primary (-hover)
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.primary,
            transition: "background .15s",
            "&:hover": {
              background: theme.colors["primary-hover"],
            },
          }}
        >
          <Label css={{ color: theme.colors.onPrimary }}>onPrimary</Label>
          <Label css={{ color: theme.colors["onPrimary-hover"] }}>
            onPrimary-hover
          </Label>
          <Label css={{ color: theme.colors["onPrimary-subtle"] }}>
            onPrimary-subtle
          </Label>
          <Label css={{ color: theme.colors["onPrimary-subtle_hover"] }}>
            onPrimary-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          Secondary (-hover)
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.secondary,
            transition: "background .15s",
            "&:hover": {
              background: theme.colors["secondary-hover"],
            },
          }}
        >
          <Label css={{ color: theme.colors.onSecondary }}>onSecondary</Label>
          <Label css={{ color: theme.colors["onSecondary-hover"] }}>
            onSecondary-hover
          </Label>
          <Label css={{ color: theme.colors["onSecondary-subtle"] }}>
            onSecondary-subtle
          </Label>
          <Label css={{ color: theme.colors["onSecondary-subtle-hover"] }}>
            onSecondary-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>Cta (-hover)</Label>
        <Container
          css={{
            height: "100%",
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.cta,
            transition: "background .15s",
            "&:hover": {
              background: theme.colors["cta-hover"],
            },
          }}
        >
          <Label css={{ color: theme.colors.onCta }}>onCta</Label>
          <Label css={{ color: theme.colors["onCta-hover"] }}>
            onCta-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>ctaContainer</Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.cta}`,
            background: theme.colors.ctaContainer,
          }}
        >
          <Label css={{ color: theme.colors.onCtaContainer }}>
            onCtaContainer
          </Label>
          <Label css={{ color: theme.colors["onCtaContainer-hover"] }}>
            onCtaContainer-hover
          </Label>
          <Label css={{ color: theme.colors["onCtaContainer-subtle"] }}>
            onCtaContainer-subtle
          </Label>
          <Label css={{ color: theme.colors["onCtaContainer-subtle-hover"] }}>
            onPortal-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          Opinions (-hover)
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.opinions,
            transition: "background .15s",
            "&:hover": {
              background: theme.colors["opinions-hover"],
            },
          }}
        >
          <Label css={{ color: theme.colors.onOpinions }}>onOpinons</Label>
          <Label css={{ color: theme.colors["onOpinions-hover"] }}>
            onOpinons-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          opinionsContainer
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.opinions}`,
            background: theme.colors.opinionsContainer,
          }}
        >
          <Label css={{ color: theme.colors.onOpinionsContainer }}>
            onOpinionsContainer
          </Label>
          <Label css={{ color: theme.colors["onOpinionsContainer-hover"] }}>
            onOpinons-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>Background</Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.background,
          }}
        >
          <Label css={{ color: theme.colors.onBackground }}>onBackground</Label>
          <Label css={{ color: theme.colors["onBackground-hover"] }}>
            onBackground-hover
          </Label>
          <Label css={{ color: theme.colors["onBackground-subtle"] }}>
            onBackground-subtle
          </Label>
          <Label css={{ color: theme.colors["onBackground-subtle-hover"] }}>
            onBackground-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          Background-forSurfaces
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors["background-forSurfaces"],
          }}
        >
          <Label css={{ color: theme.colors.onBackground }}>onBackground</Label>
          <Label css={{ color: theme.colors["onBackground-hover"] }}>
            onBackground-hover
          </Label>
          <Label css={{ color: theme.colors["onBackground-subtle"] }}>
            onBackground-subtle
          </Label>
          <Label css={{ color: theme.colors["onBackground-subtle-hover"] }}>
            onBackground-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>Surface</Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.surface,
          }}
        >
          <Label css={{ color: "$onSurface" }}>onSurface</Label>
          <Label css={{ color: "$onSurface-hover" }}>onSurface-hover</Label>
          <Label css={{ color: "$onSurface-subtle" }}>onSurface-subtle</Label>
          <Label css={{ color: "$onSurface-subtle-hover" }}>
            onSurface-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          Surface-highest
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors["surface-highest"],
          }}
        >
          <Label css={{ color: "$onSurface" }}>onSurface</Label>
          <Label css={{ color: "$onSurface-hover" }}>onSurface-hover</Label>
          <Label css={{ color: "$onSurface-subtle" }}>onSurface-subtle</Label>
          <Label css={{ color: "$onSurface-subtle-hover" }}>
            onSurface-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>Portal</Label>
        <Container
          css={{
            height: "100%",
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.portal,
          }}
        >
          <Label css={{ color: theme.colors.onPortal }}>onPortal</Label>
          <Label css={{ color: theme.colors["onPortal-hover"] }}>
            onPortal-hover
          </Label>
          <Label css={{ color: theme.colors["onPortal-subtle"] }}>
            onPortal-subtle
          </Label>
          <Label css={{ color: theme.colors["onPortal-subtle-hover"] }}>
            onPortal-subtle-hover
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>errorContainer</Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.error}`,
            background: theme.colors.errorContainer,
          }}
        >
          <Label css={{ color: theme.colors.onMessage }}>onMessage</Label>
          <Label css={{ color: theme.colors["onMessage-hover"] }}>
            onMessage-hover
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle"] }}>
            onMessage-subtle
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle-hover"] }}>
            onMessage-subtle-hover
          </Label>
          <Label>
            <i>
              Use <b>error</b> token only for non text elements when used on
              semantic container
            </i>
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          successContainer
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.success}`,
            background: theme.colors.successContainer,
          }}
        >
          <Label css={{ color: theme.colors.onMessage }}>onMessage</Label>
          <Label css={{ color: theme.colors["onMessage-hover"] }}>
            onMessage-hover
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle"] }}>
            onMessage-subtle
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle-hover"] }}>
            onMessage-subtle-hover
          </Label>
          <Label>
            <i>
              Use <b>success</b> token only for non text elements when used on
              semantic container
            </i>
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          warningContainer
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.warning}`,
            background: theme.colors.warningContainer,
          }}
        >
          <Label css={{ color: theme.colors.onMessage }}>onMessage</Label>
          <Label css={{ color: theme.colors["onMessage-hover"] }}>
            onMessage-hover
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle"] }}>
            onMessage-subtle
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle-hover"] }}>
            onMessage-subtle-hover
          </Label>
          <Label>
            <i>
              Use <b>warning</b> token only for non text elements when used on
              semantic container.
            </i>
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>
          signalContainer
        </Label>
        <Container
          css={{
            border: `1px solid ${theme.colors.signal}`,
            background: theme.colors.signalContainer,
          }}
        >
          <Label css={{ color: theme.colors.onMessage }}>onMessage</Label>
          <Label css={{ color: theme.colors["onMessage-hover"] }}>
            onMessage-hover
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle"] }}>
            onMessage-subtle
          </Label>
          <Label css={{ color: theme.colors["onMessage-subtle-hover"] }}>
            onMessage-subtle-hover
          </Label>
          <Label>
            <i>
              Use <b>signal</b> token only for non text elements when used on
              semantic container.
            </i>
          </Label>
        </Container>
      </Box>

      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>outline</Label>
        <Container
          css={{
            height: "100%",
            border: `1px solid ${theme.colors.outline}`,
            background: theme.colors.background,
          }}
        >
          <Label>
            <i>
              Use <b>outine</b> token for borders on cards
            </i>
          </Label>
        </Container>
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Label css={{ color: theme.colors.onBackground }}>outline-subtle</Label>
        <Container
          css={{
            height: "100%",
            border: `1px solid ${theme.colors["outline-subtle"]}`,
            background: theme.colors.background,
          }}
        >
          <Label>
            <i>
              Use <b>outine-subtle</b> token for borders on cards{" "}
            </i>
          </Label>
        </Container>
      </Box>
    </Layout>
  );
}
