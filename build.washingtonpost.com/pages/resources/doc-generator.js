import * as React from "react";
import {
  Icon,
  Box,
  styled,
  theme,
  Button,
  InputText,
  InputTextarea,
} from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "components/Markdown/Styling";
import remarkGfm from "remark-gfm";
import Sandbox from "~/components/Markdown/Components/Sandbox";
import { ArrowDown, ArrowUp, Info, Trash } from "@washingtonpost/wpds-assets";
import { getNavigation } from "~/services";

//New packages
import ReactMarkdown from "react-markdown";
import * as Tabs from "@radix-ui/react-tabs";
import parser from "html-react-parser";
import EditorInput from "react-simple-code-editor";
import { refractor } from "refractor/lib/core.js";
import markdown from "refractor/lang/markdown.js";
import jsx from "refractor/lang/jsx.js";
import js from "refractor/lang/javascript";
import { toHtml } from "hast-util-to-html";
import "prism-themes/themes/prism-ghcolors.css";
import JSZip from "jszip";
import JsxParser from "react-jsx-parser";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

refractor.register(markdown);
refractor.register(jsx);
refractor.register(js);

// Styling tabs
const RootTab = styled(Tabs.Root, {
  overflowX: "hidden",
});
const EditorTabContent = styled(Tabs.Content, {
  padding: 16,
  boxShadow: theme.shadows[300],
  borderRadius: theme.radii["025"],
  border: `1px solid ${theme.colors.subtle}`,
  marginTop: 16,
});
const Tab = styled(Tabs.Trigger, {
  borderStyle: "none",
  color: theme.colors.primary,
  borderTopLeftRadius: theme.radii["012"],
  borderTopRightRadius: theme.radii["012"],
  padding: theme.space["050"],
  '[data-state="active"]&': {
    background: theme.colors.faint,
  },
  '[data-state="inactive"]&': {
    background: "transparent",
  },
});
const TabList = styled(Tabs.List, {
  borderWidth: 0,
  borderBottom: "1px",
  borderColor: theme.colors.faint,
  borderStyle: "solid",
  width: "100%",
});

//Toolbar
const DropDownTrigger = styled(DropdownMenu.Trigger, {
  all: "unset",
  height: 32,
  fontSize: theme.fontSizes["087"],
  px: 10,
  '[data-state="open"]&': {
    color: theme.colors.primary,
    background: theme.colors.faint,
  },
});
const DropDownContent = styled(DropdownMenu.Content, {
  minWidth: 100,
  boxShadow: "$200",
  border: `1px solid ${theme.colors.subtle}`,
  backgroundColor: theme.colors.secondary,
  color: theme.colors.onSecondary,
  fontSize: theme.fontSizes["087"],
  textAlign: "center",
});
const DropDownItem = styled(DropdownMenu.Item, {
  cursor: "pointer",
  padding: `${theme.space["025"]} 0`,
  transition: "$fast",
  "&:hover": {
    backgroundColor: theme.colors.faint,
  },
});

export default function Editor() {
  const [Render, setRender] = React.useState(false);
  const [eBlocks, setEBlocks] = React.useState([]);
  const [Title, setTitle] = React.useState("");
  const [ImageFile, setImageFile] = React.useState(null);
  const [SVGFile, setSVGFile] = React.useState(null);
  const [JSONFile, setJSONFile] = React.useState(null);
  const [Description, setDescription] = React.useState("");
  const JSONLoader = React.useRef();
  const ImageInput = React.useRef();
  const SVGInput = React.useRef();
  //Load last Session
  React.useEffect(() => {
    LoadPreviousSession();
  }, []);

  React.useEffect(() => {
    SaveLocal();
  }, [eBlocks]);
  //Save locally but excludes images to avoid exceeding limit of 5MB
  function SaveLocal() {
    const newBlocks = eBlocks.map((block) => {
      if (block.lang == "image" || block.lang == "svg") {
        return { ...block, data: { ...block.data, src: "" } };
      } else {
        return block;
      }
    });
    const currentBlocks = JSON.stringify(newBlocks);
    window.localStorage.setItem("wpds-editor-session", currentBlocks);
    window.localStorage.setItem("wpds-editor-session-title", Title);
    window.localStorage.setItem("wpds-editor-session-description", Description);
  }
  //Loads previous session from local storage
  function LoadPreviousSession() {
    const prevSession = JSON.parse(
      window.localStorage.getItem("wpds-editor-session")
    );
    const _title = window.localStorage.getItem("wpds-editor-session-title");
    const _description = window.localStorage.getItem(
      "wpds-editor-session-description"
    );
    _description && setDescription(_description);
    _title && setTitle(_title);
    if (prevSession) {
      setEBlocks(prevSession);
    } else {
      setEBlocks([]);
    }
  }

  //Load File from JSON previously downloaded
  const LoadFile = (e) => {
    if (!e.target.files) {
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const data = JSON.parse(fr.result.toString());
      if (data.length > 0) {
        setEBlocks(data);
        setJSONFile(null);
      }
    };
    fr.readAsText(e.target.files[0]);
  };

  //Dowload As Zip file containing data file, images used, and MDX file.
  function Save() {
    const zip = new JSZip();
    let MDX_String = `--- \ntitle: ${Title}\ndescription: ${Description} \n--- \n `;
    eBlocks.forEach((block) => {
      if (block.lang == "svg") {
        const imageString = `<Container><InlineSVG width={${block.data.width}} height={${block.data.height}} path="/images/${block.data.name}"/></Container>`;
        MDX_String = MDX_String + "\n" + imageString + "\n";
        const images = zip.folder("img");
        images.file(block.data.name, block.data.src.split(",")[1], {
          base64: true,
        });
      } else if (block.lang == "image") {
        const imageString = `<Container><InlineImage width={${block.data.width}} height={${block.data.height}} maxWidth={"100%"} src="/images/${block.data.name}"/></Container>`;
        MDX_String = MDX_String + "\n" + imageString + "\n";
        const images = zip.folder("img");
        images.file(block.data.name, block.data.src.split(",")[1], {
          base64: true,
        });
      } else if (block.lang == "js") {
        MDX_String =
          MDX_String +
          "\n" +
          "```jsx withPreview" +
          "\n" +
          block.data +
          "\n" +
          "```" +
          "\n";
      } else {
        MDX_String = MDX_String + "\n" + block.data + "\n";
      }
    });
    zip.file("doc-data.json", JSON.stringify(eBlocks));
    zip.file(
      `${Title != "" ? Title : "WPDS-" + crypto.randomUUID().substring(0, 4)}` +
        ".mdx",
      MDX_String
    );
    zip.generateAsync({ type: "blob" }).then((blob) => {
      const url = URL.createObjectURL(blob);
      console.log("generating");
      const element = document.createElement("a");
      element.href = url;
      element.download =
        "WPDS-" + Title + "-" + crypto.randomUUID().substring(0, 4) + ".zip";
      element.click();
      element.remove();
    });
  }

  //**Updates TITLE & DESCRIPTION */
  function HandleFrontMatter(e) {
    console.log(e);
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
    SaveLocal();
  }
  //*****UPDATING EDITOR BLOCKS****

  // Handles changes to block
  function HandleChange(code, id) {
    const newBlocks = eBlocks.map((block) => {
      if (block["id"] == id) {
        console.log("found block");
        return { ...block, data: code };
      } else {
        return block;
      }
    });
    setEBlocks(newBlocks);
  }
  //Removes block
  function HandleDelete(id) {
    const newBlocks = eBlocks.filter((block) => {
      if (block["id"] != id) {
        return block;
      }
    });
    setEBlocks(newBlocks);
  }

  //Adds block
  function AddBlock(block) {
    block["index"] = eBlocks.length;
    setEBlocks((eBlocks) => [...eBlocks, block]);
  }

  //Adds an image Block as based64
  function AddInline(e, type) {
    const imageBlock = {
      id: crypto.randomUUID(),
      lang: type,
      data: {},
    };
    const fr = new FileReader();
    fr.onload = () => {
      imageBlock.data["src"] = fr.result;
      imageBlock.data["height"] = 100;
      imageBlock.data["width"] = 100;
      imageBlock.data["name"] = e.target.files[0].name;
      imageBlock.data["alt"] = null;
      AddBlock(imageBlock);
      if (type == "svg") {
        setSVGFile(null);
      } else {
        setImageFile(null);
      }
    };
    fr.readAsDataURL(e.target.files[0]);
  }

  //Sorts block
  function SortBlocks(movingblock, direction) {
    const { id, index } = movingblock;
    const newBlocks = [].concat(eBlocks).map((block) => {
      const dir = direction == "up" ? -1 : 1;
      if (block["id"] == id) {
        const newIndex = movingblock.index + dir;
        return { ...block, index: newIndex > 0 ? newIndex : 0 };
      } else {
        if (block["index"] == movingblock.index + dir) {
          return { ...block, index: index };
        } else {
          return block;
        }
      }
    });
    setEBlocks(
      newBlocks.sort((a, b) => {
        if (a.index < b.index || b.index == undefined) {
          return -1;
        }
        if (a.index > b.index || a.index == undefined) {
          return 1;
        }
        return 0;
      })
    );
  }

  //Sets any data prop for a block to numeric value
  function SetDataProperty(prop, value, id) {
    const newBlocks = eBlocks.map((block) => {
      if (block["id"] == id) {
        return {
          ...block,
          data: { ...block.data, [prop]: value },
        };
      } else {
        return block;
      }
    });
    setEBlocks(newBlocks);
  }

  //Handles Toolbar commands for Editor tab
  function ToolBar(command) {
    const block = {
      id: crypto.randomUUID(),
      title: "Markdown",
      link: "https://www.markdownguide.org/cheat-sheet/",
      lang: "markdown",
      data: "",
    };
    switch (command) {
      case "new":
        setEBlocks([]);
        setTitle("");
        setDescription("");
        break;
      case "markdown":
        AddBlock(block);
        break;
      case "jsx":
        block["title"] = "JSX Components";
        block.link =
          "https://github.com/washingtonpost/wpds-ui-kit/blob/main/build.washingtonpost.com/components/Markdown/Styling.js";
        block.lang = "jsx";
        block.data = "";
        AddBlock(block);
        break;
      case "code":
        block.title = "Code example";
        block.lang = "js";
        block.data = "";
        AddBlock(block);
        break;
      case "image":
        if (ImageInput) {
          alert(
            "Using images requires you to save your work or data will be lost when reloading"
          );
          ImageInput.current.click();
        }
        break;
      case "svg":
        if (SVGInput) {
          alert(
            "Using SVG requires you to save your work or data will be lost when reloading"
          );
          SVGInput.current.click();
        }
        break;
      case "load":
        if (JSONLoader) {
          JSONLoader.current.click();
        }
        break;
      default:
        break;
    }
  }
  //Handles Syntax highlighting
  function CreateEditorBlocks(data, lang) {
    const items = refractor.highlight(`${data} `, lang);
    return parser(toHtml(items));
  }
  return (
    <>
      <Box
        onChange={(e) => AddInline(e, "image")}
        ref={ImageInput}
        value={ImageFile}
        as="input"
        onClick={() => setImageFile(null)}
        css={{ display: "none", visibility: "hidden" }}
        type="file"
        accept="image/png, image/gif, image/jpeg"
      />
      <Box
        onChange={LoadFile}
        ref={JSONLoader}
        value={JSONFile}
        as="input"
        onClick={() => setJSONFile(null)}
        css={{ display: "none", visibility: "hidden" }}
        type="file"
        accept=".json"
      />
      <Box
        onChange={(e) => AddInline(e, "svg")}
        ref={SVGInput}
        value={SVGFile}
        onClick={() => setSVGFile(null)}
        as="input"
        css={{ display: "none", visibility: "hidden" }}
        type="file"
        accept=".svg"
      />
      <RootTab defaultValue="Editor">
        <TabList>
          <Tab value="Editor">Editor</Tab>
          <Tab onClick={() => setRender(true)} value="Preview">
            Preview
          </Tab>
        </TabList>
        <EditorTabContent value="Editor">
          <Box
            css={{
              display: "flex",
              borderBottom: "1px solid $subtle",
              backgroundColor: theme.colors.secondary,
              marginBottom: 16,
            }}
          >
            <DropdownMenu.Root>
              <DropDownTrigger>File</DropDownTrigger>
              <DropdownMenu.Portal>
                <DropDownContent align="start" side="bottom">
                  <DropdownMenu.Group>
                    <DropDownItem onClick={() => ToolBar("new")}>
                      New
                    </DropDownItem>
                    <MDXStyling.hr css={{ margin: 0 }} />
                    <DropDownItem onClick={Save}>Save...</DropDownItem>
                    <DropDownItem onClick={() => ToolBar("load")}>
                      Load...
                    </DropDownItem>
                  </DropdownMenu.Group>
                </DropDownContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
              <DropDownTrigger>Insert</DropDownTrigger>
              <DropdownMenu.Portal>
                <DropDownContent align="start" side="bottom">
                  <DropdownMenu.Group>
                    <DropDownItem onClick={() => ToolBar("markdown")}>
                      Markdown
                    </DropDownItem>
                    <MDXStyling.hr css={{ margin: 0 }} />
                    <DropDownItem onClick={() => ToolBar("jsx")}>
                      JSX
                    </DropDownItem>
                    <MDXStyling.hr css={{ margin: 0 }} />
                    <DropDownItem onClick={() => ToolBar("code")}>
                      Code example
                    </DropDownItem>
                    <MDXStyling.hr css={{ margin: 0 }} />
                    <DropDownItem onClick={() => ToolBar("image")}>
                      Inline Image
                    </DropDownItem>
                    <MDXStyling.hr css={{ margin: 0 }} />
                    <DropDownItem onClick={() => ToolBar("svg")}>
                      Inline SVG
                    </DropDownItem>
                  </DropdownMenu.Group>
                  <DropdownMenu.Separator />
                </DropDownContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </Box>

          <Box css={{ maxHeight: "80vh", overflowY: "auto" }}>
            <InputText
              id="title"
              value={Title}
              name="title"
              onChange={HandleFrontMatter}
              css={{ marginBottom: theme.space[100] }}
              label="Document Title"
              required
            />
            <InputTextarea
              id="description"
              css={{ marginBottom: theme.space[100] }}
              name="description"
              value={Description}
              onChange={HandleFrontMatter}
              label="Description"
              required
            />
            <MDXStyling.hr />
            {eBlocks.map((block) => {
              if (block.lang == "image" || block.lang == "svg") {
                return (
                  <Box key={block.id}>
                    <Box>
                      <MDXStyling.p
                        css={{
                          paddingBottom: "0",
                          fontWeight: "bold",
                          fontSize: theme.fontSizes["087"],
                          textTransform: "capitalize",
                        }}
                      >
                        Inline Image
                      </MDXStyling.p>
                      <Box
                        as="p"
                        css={{ margin: 0, fontSize: theme.fontSizes["087"] }}
                      >
                        All SVG require height and width to be defined
                      </Box>
                    </Box>
                    <Box
                      css={{
                        display: "grid",
                        gridTemplateColumns: "1fr 150px 48px",
                        gap: "16px",
                      }}
                    >
                      <div>
                        {block.data.src == "" && (
                          <MDXStyling.Alert
                            css={{ marginBottom: 4 }}
                            shadow={false}
                            dismissable={false}
                            variant={"error"}
                          >
                            Image failed to load from Local. Please use load
                            data from JSON file. File/Load...
                          </MDXStyling.Alert>
                        )}
                        {block.lang == "svg" ? (
                          <MDXStyling.InlineSVG
                            cushion={false}
                            path={
                              block.data.src != "" ? block.data.src : "/img/"
                            }
                            height={
                              block.data.height == "" ? 0 : block.data.height
                            }
                            width={
                              block.data.width == "" ? 0 : block.data.width
                            }
                            title={block.data.title}
                            description={block.data.alt}
                          />
                        ) : (
                          <MDXStyling.InlineImage
                            src={
                              block.data.src != ""
                                ? block.data.src
                                : "/img/card.png"
                            }
                            height={
                              block.data.height == "" ? 0 : block.data.height
                            }
                            width={
                              block.data.width == "" ? 0 : block.data.width
                            }
                            maxWidth={"100%"}
                            alt={block.data.alt}
                          />
                        )}
                      </div>
                      <Box
                        css={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {block.lang == "image" && (
                          <InputText
                            alt="Width in pixel"
                            label="Width"
                            value={block.data.width}
                            placeholder={"Enter width"}
                            onChange={(e) =>
                              SetDataProperty("width", e.target.value, block.id)
                            }
                          />
                        )}
                        <InputText
                          label={block.lang == "svg" ? "Size" : "Height"}
                          value={block.data.height}
                          placeholder="Enter a height"
                          onChange={(e) =>
                            SetDataProperty("height", e.target.value, block.id)
                          }
                        />
                        <InputText
                          value={block.data.alt}
                          placeholder="Enter alt text..."
                          onChange={(e) =>
                            SetDataProperty("alt", e.target.value, block.id)
                          }
                          name="alt-text"
                          id={block.id + "-alt"}
                          label="Alt Text"
                          required
                        />
                        {block.lang == "svg" && (
                          <InputText
                            value={block.data.title}
                            placeholder="Enter alt text..."
                            onChange={(e) =>
                              SetDataProperty("title", e.target.value, block.id)
                            }
                            name="title-text"
                            id={block.id + "-title"}
                            label="Title"
                            required
                          />
                        )}
                      </Box>
                      <Box
                        css={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {eBlocks.length > 1 && (
                          <>
                            <Button
                              disabled={block.index == 0}
                              onClick={() => SortBlocks(block, "up")}
                              icon="center"
                            >
                              <Icon label="Move up">
                                <ArrowUp />
                              </Icon>
                            </Button>
                            <Button
                              onClick={() => SortBlocks(block, "down")}
                              icon="center"
                            >
                              <Icon label="Move down">
                                <ArrowDown />
                              </Icon>
                            </Button>
                          </>
                        )}
                        <Button
                          onClick={() => HandleDelete(block.id)}
                          icon="center"
                        >
                          <Icon label="delete">
                            <Trash />
                          </Icon>
                        </Button>
                      </Box>
                    </Box>
                    <MDXStyling.hr
                      css={{ backgroundColor: theme.colors.faint }}
                    />
                  </Box>
                );
              } else {
                return (
                  <Box key={block.id} css={{ paddingBottom: 8 }}>
                    <Box
                      css={{
                        display: "flex",
                        alignContent: "center",
                        gap: 8,
                      }}
                    >
                      <MDXStyling.p
                        css={{
                          paddingBottom: "0",
                          fontWeight: "bold",
                          fontSize: theme.fontSizes["087"],
                          textTransform: "capitalize",
                        }}
                      >
                        {block.lang}
                      </MDXStyling.p>
                      {block.link != null && (
                        <Box
                          as="a"
                          href={block.link}
                          target="_blank"
                          css={{
                            unset: "all",
                            transition: "$fast",
                            cursor: "pointer",
                            "&:hover": { opacity: 0.5 },
                          }}
                        >
                          <Icon label="Information">
                            <Info />
                          </Icon>
                        </Box>
                      )}
                    </Box>
                    <Box
                      css={{
                        display: "grid",
                        gridTemplateColumns: "1fr 48px",
                        gap: "16px",
                      }}
                    >
                      <EditorInput
                        value={block.data}
                        onValueChange={(code) => HandleChange(code, block.id)}
                        highlight={(data) =>
                          CreateEditorBlocks(data, block.lang)
                        }
                        padding={10}
                        style={{
                          resize: "vertical",
                          minHeight: "10vh",
                          fontFamily: '"Fira code", "Fira Mono", monospace',
                          fontSize: 12,
                          border: `1px solid ${theme.colors.subtle} `,
                        }}
                      />
                      <Box
                        css={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                        }}
                      >
                        {eBlocks.length > 1 && (
                          <>
                            <Button
                              disabled={block.index == 0}
                              onClick={() => SortBlocks(block, "up")}
                              icon="center"
                            >
                              <Icon label="Move up">
                                <ArrowUp />
                              </Icon>
                            </Button>
                            <Button
                              onClick={() => SortBlocks(block, "down")}
                              icon="center"
                            >
                              <Icon label="Move down">
                                <ArrowDown />
                              </Icon>
                            </Button>
                          </>
                        )}
                        <Button
                          onClick={() => HandleDelete(block.id)}
                          icon="center"
                        >
                          <Icon label="delete">
                            <Trash />
                          </Icon>
                        </Button>
                      </Box>
                    </Box>
                    <MDXStyling.hr
                      css={{ backgroundColor: theme.colors.faint }}
                    />
                  </Box>
                );
              }
            })}
          </Box>
        </EditorTabContent>
        <Tabs.Content value="Preview">
          <Box css={{ minHeight: "50vh", px: 8, marginTop: 16 }}>
            {Render != false &&
              eBlocks.map((block) => {
                switch (block.lang) {
                  case "jsx":
                    return (
                      <Box key={block.id} css={{ padding: `16px 0px` }}>
                        <JsxParser
                          key={block.id}
                          components={{ ...MDXStyling }}
                          jsx={`${block.data} `}
                        />
                      </Box>
                    );
                  case "image":
                    return (
                      <Box key={block.id} css={{ padding: "16px 0px" }}>
                        {block.data.src == "" && (
                          <MDXStyling.Alert variant={"error"}>
                            Image failed to load from Local. Please use load
                            data from JSON file. File/Load...
                          </MDXStyling.Alert>
                        )}
                        <MDXStyling.Container caption={block.data.alt}>
                          <MDXStyling.InlineImage
                            src={
                              block.data.src != ""
                                ? block.data.src
                                : "/img/card.png"
                            }
                            height={block.data.height}
                            width={block.data.width}
                            maxWidth={"100%"}
                          />
                        </MDXStyling.Container>
                      </Box>
                    );
                  case "svg": {
                    return (
                      <Box key={block.id} css={{ padding: "16px 0px" }}>
                        {block.data.src == "" && (
                          <MDXStyling.Alert variant={"error"}>
                            SVG failed to load from Local. Please use load data
                            from JSON file. File/Load...
                          </MDXStyling.Alert>
                        )}
                        <MDXStyling.InlineSVG
                          path={
                            block.data.src != ""
                              ? block.data.src
                              : "/img/card.png"
                          }
                          height={block.data.height}
                          width={block.data.width}
                          title={Title + " SVG"}
                          description={Description + " Description"}
                        />
                      </Box>
                    );
                  }
                  case "js":
                    return (
                      <Sandbox
                        key={block.id}
                        isGuide={"none"}
                        hideNavBar={false}
                        withPreview={true}
                      >
                        {block.data}
                      </Sandbox>
                    );
                  default:
                    return (
                      <ReactMarkdown
                        key={block.id}
                        components={MDXStyling}
                        remarkPlugins={[remarkGfm]}
                      >
                        {block.data}
                      </ReactMarkdown>
                    );
                }
              })}
          </Box>
        </Tabs.Content>
      </RootTab>
    </>
  );
}
export const getStaticProps = async (response) => {
  const navigation = await getNavigation();

  return {
    props: {
      navigation,
    },
  };
};
