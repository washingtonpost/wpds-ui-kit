import React, { useState, useEffect, useCallback } from "react";
import {
  InputSearch,
  Box,
  Icon,
  Text,
  styled,
  Button,
  Dialog,
} from "@washingtonpost/wpds-ui-kit";
import { Search as SearchIcon, Close } from "@washingtonpost/wpds-assets";
import { searchDocs } from "../../lib/search-index";
import Link from "next/link";

const HighlightedMatch = styled("span", {
  fontWeight: "bold",
  backgroundColor: "$accessible",
  color: "$primary",
  borderRadius: "$025",
  padding: "0 $025",
});

const ResultItemContainer = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$050",
  padding: "$050 $100",
});

const ResultTitle = styled(Text, {
  fontWeight: "bold",
  fontSize: "$100",
});

const ResultDescription = styled(Text, {
  fontSize: "$087",
  color: "$gray80",
});

const UrlText = styled(Text, {
  fontSize: "$075",
  color: "$accessible",
});

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Component to highlight matches in text
const HighlightText = ({ text, matches }) => {
  if (!matches || matches.length === 0) return <>{text}</>;

  let lastIndex = 0;
  const parts = [];

  matches.forEach((match, i) => {
    const [start, end] = match;
    if (start > lastIndex) {
      parts.push(
        <span key={`normal-${i}`}>{text.substring(lastIndex, start)}</span>
      );
    }
    parts.push(
      <HighlightedMatch key={`highlight-${i}`}>
        {text.substring(start, end + 1)}
      </HighlightedMatch>
    );
    lastIndex = end + 1;
  });

  if (lastIndex < text.length) {
    parts.push(<span key="normal-last">{text.substring(lastIndex)}</span>);
  }

  return <>{parts}</>;
};

// Custom result item component
const SearchResultItem = ({ result, setValue, closeDialog }) => {
  const handleClick = useCallback(() => {
    setValue("");
    if (closeDialog) closeDialog();
  }, [setValue, closeDialog]);

  // Extract matching information
  const matches = {};
  result.matches.forEach((match) => {
    matches[match.key] = match.indices;
  });

  return (
    <Link href={result.item.url} passHref onClick={handleClick}>
      <ResultItemContainer>
        <ResultTitle>
          <HighlightText text={result.item.title} matches={matches.title} />
        </ResultTitle>
        {result.item.description && (
          <ResultDescription>
            <HighlightText
              text={result.item.description}
              matches={matches.description}
            />
          </ResultDescription>
        )}
        <UrlText>{result.item.url}</UrlText>
      </ResultItemContainer>
    </Link>
  );
};

export const DocSearch = ({
  placeholder = "Search documentation...",
  maxResults = 10,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const search = async () => {
      if (debouncedSearchTerm) {
        const searchResults = await searchDocs(debouncedSearchTerm);
        setResults(searchResults.slice(0, maxResults));
      } else {
        setResults(null);
      }
    };

    search();
  }, [debouncedSearchTerm, maxResults]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        openDialog();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      setIsOpen(true);
    }
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSearchTerm("");
    setResults(null);
  };

  return (
    <Box css={{ width: "100%", maxWidth: "500px" }}>
      {/* Search Trigger Button */}
      <Button
        variant="secondary"
        icon="left"
        onClick={openDialog}
        css={{ width: "100%", justifyContent: "flex-start" }}
      >
        <Icon label="Search" size="100">
          <SearchIcon />
        </Icon>
        {placeholder}
      </Button>

      {/* Search Dialog */}
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen} modal={true}>
        <Dialog.Overlay backgroundColor="$alpha500" />
        <Dialog.Portal>
          <Dialog.Content height="100px" width="500px">
            <Box>
              <InputSearch.Root
                aria-label="Search documentation"
                openOnFocus
                onSelect={(value) => {
                  setSearchTerm(value);
                  setIsOpen(value !== "");
                }}
              >
                <InputSearch.Input
                  name="doc-search"
                  id="doc-search"
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={handleInputChange}
                  icon="left"
                  autoFocus
                />
                {results && (
                  <InputSearch.Popover portal={false} open={isOpen}>
                    {results.length > 0 ? (
                      <InputSearch.List
                        css={{ maxHeight: "400px", overflowY: "auto" }}
                      >
                        {results.map((result, index) => (
                          <InputSearch.ListItem
                            key={`${result.item.url}-${index}`}
                            value={result.item.title}
                            css={{
                              // Add custom styles for the list item
                              // style <a />
                              a: {
                                textDecoration: "none",
                                color: "inherit",
                              },
                              "&:hover": {
                                backgroundColor: "$secondary-hover",
                              },
                            }}
                          >
                            <SearchResultItem
                              result={result}
                              setValue={setSearchTerm}
                              closeDialog={closeDialog}
                            />
                          </InputSearch.ListItem>
                        ))}
                      </InputSearch.List>
                    ) : (
                      <InputSearch.EmptyState text="No documentation found" />
                    )}
                  </InputSearch.Popover>
                )}
              </InputSearch.Root>
            </Box>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Box>
  );
};
