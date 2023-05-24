import React from "react";
import Link from "next/link";
import { styled, theme, Accordion } from "@washingtonpost/wpds-ui-kit";
import Header from "../../Typography/Headers";
import { useRouter } from "next/router";
import { Change } from "~/components/Markdown/Styling";

const StyledAccordionRoot = styled(Accordion.Root, {
  backgroundColor: theme.colors.gray500,
  "@sm": {
    marginBottom: "0",
  },
});

const Panel = styled("div", {
  paddingBottom: "$100",
  "@notSm": {
    position: "fixed",
    height: "100%",
  },
  "@sm": {
    width: "100%",
  },
});

//Container
const Container = styled("div", {
  padding: "$100 0",
  overflowY: "auto",
  height: "90%",
  // style the scrollbar
  "&::-webkit-scrollbar": {
    width: "calc($087 / 2)",
    height: "calc($087 / 2)",
    backgroundColor: theme.colors.gray400,
  },
  // style the scrollbar handle
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.colors.gray200,
    borderRadius: "$round",
  },

  "@md": { marginTop: "0" },
  "@notSm": {
    width: "300px",
  },
  "@sm": {
    paddingBottom: 0,
  },
});

const AccordionHeader = styled(Accordion.Header, {
  width: "100%",
  justifySelf: "flex-start",
  marginBlock: 0,
  "@sm": {
    cursor: "pointer",
  },
});

const AccordionTrigger = styled(Accordion.Trigger, {
  border: "none",
  display: "flex",
  width: "100%",
  alignItems: "center",
  paddingBlock: 0,
  paddingInlineStart: 0,
  paddingInlineEnd: "$150",
  textAlign: "left",
});

const AccordionLabel = styled("span", {
  fontFamily: "$meta",
  paddingLeft: "$100",
  fontSize: "$100",
  fontWeight: "$bold",
  color: "$primary",
  flex: 1,
});

const AccordionContent = styled(Accordion.Content, {
  paddingBlockEnd: 0,
  paddingInlineEnd: 0,
});

const AccordionItem = styled(Accordion.Item, {
  border: "none",
});

//List in sidebars Accordion Content
const SideBarList = styled("ul", {
  listStyle: "none",
  backgroundColor: theme.colors.gray500,
  paddingLeft: "0px",
  marginBlock: "0",
});

const ListItem = styled("li", {
  color: "$primary",
  cursor: "pointer",
  borderLeft: "4px solid",
  borderColor: "transparent",
  "&:hover": {
    backgroundColor: theme.colors.gray400,
  },
  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineWidth: "2px",
  },
  variants: {
    isCurrent: {
      active: {
        boxSizing: "content-box",
        color: "$onSecondary",
        borderLeft: "4px solid",
        borderColor: "$primary",
        backgroundColor: "$gray400",
      },
    },
    disabled: {
      true: {
        cursor: "default",
        pointerEvents: "none",
        fontStyle: "italic",
        marginBottom: "$025",
        backgroundColor: "transparent",
      },
    },
  },
});

//Links in sidebar
const CustomLink = styled("a", {
  fontFamily: "$meta",
  display: "block",
  fontSize: "$100",
  color: "inherit",
  textDecoration: "none",
  width: "100%",
  borderLeft: "0 solid",
  marginLeft: "-4px",
  padding: "$050 $050 $050 $125",
  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineWidth: "2px",
  },
  variants: {
    disabled: {
      true: {
        color: "$onDisabled",
      },
    },
  },
});

function Compare(a, b) {
  if (a.order < b.order || b.order == undefined) {
    return -1;
  }
  if (a.order > b.order || a.order == undefined) {
    return 1;
  }
  return 0;
}

export default function Sidebar({ navigation, setMobileMenu }) {
  const router = useRouter();

  const SortedList = ({ docs, setMobileMenu }) => {
    let sortedDocs = [];
    docs.map((item) => {
      sortedDocs.push({ order: item.data.order, frontMatter: item });
    });
    sortedDocs.sort(Compare);
    return (
      <>
        {sortedDocs.map((item, index) => {
          return (
            <ListItem
              onClick={() => setMobileMenu(false)}
              key={index}
              isCurrent={
                router.asPath.includes(item.frontMatter.slug) ? "active" : ""
              }
              disabled={item.frontMatter.data.status === "Coming soon"}
            >
              {item.frontMatter.data.status === "Coming soon" ? (
                <CustomLink
                  as="div"
                  css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                  disabled
                >
                  <div>{item.frontMatter.data.title}</div>
                  <Change type="ComingSoon">Coming soon</Change>
                </CustomLink>
              ) : item.frontMatter.data.status == "Draft" ? (
                <Link href={item.frontMatter.slug} passHref>
                  <CustomLink
                    css={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>{item.frontMatter.data.title}</div>
                    <Change type="Draft">Draft</Change>
                  </CustomLink>
                </Link>
              ) : (
                <Link href={item.frontMatter.slug} passHref>
                  <CustomLink>{item.frontMatter.data.title}</CustomLink>
                </Link>
              )}
            </ListItem>
          );
        })}
      </>
    );
  };
  return (
    <Panel id="open-nav">
      <Container id="sidebar-container" as="nav" aria-label="Sections">
        {navigation &&
          navigation.map((nav, index) => {
            return (
              <StyledAccordionRoot
                key={index}
                defaultValue={"Components"}
                type="single"
                collapsible
              >
                <AccordionItem value={nav.category}>
                  <AccordionHeader>
                    <AccordionTrigger density={"compact"}>
                      <AccordionLabel>{nav.category}</AccordionLabel>
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <SideBarList>
                      {nav.sortItems ? (
                        <SortedList
                          setMobileMenu={setMobileMenu}
                          docs={nav.docs}
                        />
                      ) : (
                        <>
                          {nav.docs.map((item, index) => {
                            return (
                              <ListItem
                                onClick={() => setMobileMenu(false)}
                                key={index}
                                isCurrent={
                                  router.asPath.includes(item.slug)
                                    ? "active"
                                    : ""
                                }
                                disabled={item.data.status === "Coming soon"}
                              >
                                {item.data.status !== "" ? (
                                  <Link href={item.slug} passHref>
                                    <CustomLink
                                      css={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div>{item.data.title}</div>
                                      <Change
                                        type={
                                          item.data.status === "Coming soon"
                                            ? "ComingSoon"
                                            : item.data.status
                                        }
                                      >
                                        {item.data.status}
                                      </Change>
                                    </CustomLink>
                                  </Link>
                                ) : (
                                  <Link href={item.slug} passHref>
                                    <CustomLink>{item.data.title}</CustomLink>
                                  </Link>
                                )}
                              </ListItem>
                            );
                          })}
                        </>
                      )}
                    </SideBarList>
                  </AccordionContent>
                </AccordionItem>
              </StyledAccordionRoot>
            );
          })}
        <SideBarList css={{ "@notSm": { display: "none" } }}>
          <ListItem
            onClick={() => setMobileMenu(false)}
            isCurrent={router.asPath.includes("resources") ? "active" : ""}
          >
            <Link href="/resources" passHref>
              <Header>
                <CustomLink css={{ color: "$primary" }}>Resources</CustomLink>
              </Header>
            </Link>
          </ListItem>
          <ListItem
            onClick={() => setMobileMenu(false)}
            isCurrent={router.asPath.includes("release-notes") ? "active" : ""}
          >
            <Link href="/release-notes" passHref>
              <Header>
                <CustomLink css={{ color: "$primary" }}>
                  Release Notes
                </CustomLink>
              </Header>
            </Link>
          </ListItem>
        </SideBarList>
      </Container>
    </Panel>
  );
}
