import React, { useState } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { NavigationBar } from "~/components/NavigationBar";
import Sidebar from "~/components/Layout/Components/Sidebar";
import { Footer } from "~/components/Footer";
import { ToastContainer } from "react-toastify";
import {
  customNotSmBreakpoint,
  customSmBreakpoint,
} from "~/components/styleHelpers";

const Grid = styled("div", {
  display: "grid",
  margin: "0 auto",
  [customNotSmBreakpoint]: {
    gridTemplateColumns: "300px 1fr",
    gridTemplateRows: "60px 1fr",
    gridTemplateAreas: `
		    "logo nav"
        "sidebar content"
        "sidebar footer"
    	`,
    gridGap: "$125",
    rowGap: "0",
    paddingRight: "$100",
  },
  [customSmBreakpoint]: {
    minHeight: "100vh",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto 1fr",
    gridTemplateAreas: `
		    "logo"
        "sidebar"
        "nav"
        "content"
        "footer"
		`,
    gridGap: "0",
  },
});

const DesktopMenu = styled("div", {
  gridArea: "sidebar",
  backgroundColor: "$gray500",
  variants: {
    state: {
      open: { display: "block" },
      closed: { [customSmBreakpoint]: { display: "none" } },
    },
  },
});

const Container = styled("main", {
  gridArea: "content",
  width: "100%",
  margin: "0 auto",
  marginTop: "$125",
  [customNotSmBreakpoint]: {
    maxWidth: "900px",
  },
  [customSmBreakpoint]: {
    padding: "0 $100",
  },
});

export const PageLayout = ({ children, ...pageProps }) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  return (
    <Grid>
      <NavigationBar
        isClosed={mobileMenuState}
        setMobileMenu={setMobileMenuState}
      />
      <DesktopMenu state={mobileMenuState ? "open" : "closed"}>
        <Sidebar
          setMobileMenu={setMobileMenuState}
          navigation={pageProps.navigation}
        />
      </DesktopMenu>
      <Container id="main">
        {children}
        <ToastContainer
          role="alert"
          autoClose={1000}
          closeButton={false}
          limit={3}
        />
      </Container>
      <Footer />
    </Grid>
  );
};
