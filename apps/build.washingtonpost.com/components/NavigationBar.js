import React from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Box,
  Icon,
  styled,
  Button,
  VisuallyHidden,
  theme,
} from "@washingtonpost/wpds-ui-kit";
import Menu from "@washingtonpost/wpds-assets/asset/menu";
import Close from "@washingtonpost/wpds-assets/asset/close";

import Logo from "./logo";
import { ThemeToggle } from "./ThemeToggle";

const SearchForm = dynamic(() => import("./SearchForm"), { ssr: false });

const List = styled("ul", {
  gridArea: "nav",
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  justifyContent: "flex-end",
  alignItems: "center",

  "@sm": {
    display: "none",
  },
});

const Container = styled("div", {
  alignItems: "center",
  display: "flex",
  gridArea: "logo",
  height: 60,
  "@notSm": {
    backgroundColor: "$gray500",
    overflow: "hidden",
    position: "fixed",
    zIndex: "$shell",
    top: 0,
    right: 0,
    left: 0,
    width: "300px",
  },

  "@sm": {
    width: "100%",
  },
});

const ListItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  margin: "0 $200 0 0",

  "@sm": {
    margin: "0",
    display: "none",
  },
});

const Anchor = styled("a", {
  color: "$onSecondary",
  textDecoration: "none",
  "&:hover": {
    opacity: "0.75",
  },

  variants: {
    isCurrent: {
      true: {
        fontWeight: "$bold",
      },
    },
  },
});

const HamburgerMenu = styled(Menu, {
  fill: "$primary",
  transition: "all .2s",
  "@reducedMotion": {
    transition: "none",
  },
  variants: {
    state: {
      open: {
        transform: "rotate(180deg)",
      },
      closed: {
        transform: "rotate(270deg)",
        opacity: "0",
      },
    },
  },
});

const CloseMenu = styled(Close, {
  fill: "$primary",
  position: "absolute",
  transition: "all .2s",
  transitionDelay: 0.5,
  "@reducedMotion": {
    transition: "none",
  },
  variants: {
    state: {
      open: {
        opacity: 0,
      },
      closed: {
        opacity: 1,
      },
    },
  },
});

const SkipToMainContent = styled(VisuallyHidden, {
  color: theme.colors.cta,
  left: "$050",
  "&:active": {
    position: "relative",
  },
  "&:focus": {
    position: "relative",
  },
});

export const NavigationBar = ({ setMobileMenu, mobileMenuState, isClosed }) => {
  const router = useRouter();

  const [hideFromSmallScreen, setHideFromSmallScreen] = React.useState(false);

  // load on screen sizes greater than sm
  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    if (media.matches) {
      setHideFromSmallScreen(false);
    } else {
      setHideFromSmallScreen(true);
    }
  }, []);

  return (
    <>
      <Container as="header">
        <SkipToMainContent as="a" href="#main">
          Skip to main content
        </SkipToMainContent>
        <Logo css={{ width: "100%" }} />
        <Box
          css={{
            "@notSm": {
              display: "none",
            },
            "@sm": {
              display: "flex",
              gap: "$075",
              paddingRight: "$100",
              justifyItems: "flex-end",
            },
          }}
        >
          <ThemeToggle
            css={{
              position: "fixed",
              zIndex: "$page",
              "@notSm": {
                marginTop: "-$100",
              },
              "@sm": {
                top: "$100",
                right: "$400",
              },
            }}
          />
          <Button
            css={{ border: "none" }}
            onClick={() => setMobileMenu(!isClosed)}
          >
            <Icon size="$150" label="Menu Icon">
              <HamburgerMenu state={isClosed ? "closed" : "open"} />
            </Icon>
            <Icon size={"$150"} label="Menu">
              <CloseMenu state={isClosed ? "closed" : "open"} />
            </Icon>
          </Button>
        </Box>
      </Container>
      <List role="navigation" aria-label="Support and search">
        <ListItem>
          <Link href="/release-notes" passHref>
            <Anchor
              isCurrent={router.asPath.includes("/release-notes")}
              onClick={() => setMobileMenu(!mobileMenuState)}
            >
              Release Notes
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/resources" passHref>
            <Anchor isCurrent={router.asPath.includes("/resources")}>
              Resources
            </Anchor>
          </Link>
        </ListItem>
        <ListItem css={{ margin: "0 $100 0 0" }}>
          <Link href="/support" passHref>
            <Anchor isCurrent={router.asPath.includes("/support")}>
              Support
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>{hideFromSmallScreen && <SearchForm />}</ListItem>
        <ListItem>
          <ThemeToggle
            css={{ position: "fixed", marginTop: "-$100", zIndex: "$page" }}
          />
        </ListItem>
      </List>
    </>
  );
};
