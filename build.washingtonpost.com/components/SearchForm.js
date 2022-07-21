import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import { globalCss, theme } from "@washingtonpost/wpds-ui-kit";

const searchGlobalCss = globalCss({
  ".DocSearch-Container": {
    zIndex: "9999 !important",
  },
  "#wpds .DocSearch-Logo": {
    visibility: "hidden",
  },
  "#wpds": {
    "--docsearch-primary-color": theme.colors.secondary,
    "--docsearch-text-color": theme.colors.onSecondary,
    "--docsearch-spacing": "12px",
    "--docsearch-icon-stroke-width": "1.4",
    "--docsearch-highlight-color": theme.colors.signal,
    "--docsearch-muted-color": theme.colors.accessible,
    "--docsearch-container-background": theme.colors.alpha50,
    "--docsearch-logo-color": theme.colors.accessible,
    "--docsearch-modal-width": "560px",
    "--docsearch-modal-height": "600px",
    "--docsearch-modal-background": theme.colors.subtle,
    "--docsearch-modal-shadow": theme.shadows[200],
    "--docsearch-searchbox-height": "56px",
    "--docsearch-searchbox-background": theme.colors.secondary,
    "--docsearch-searchbox-focus-background": theme.colors.secondary,
    "--docsearch-searchbox-shadow": theme.shadows[400],
    "--docsearch-hit-height": "56px",
    "--docsearch-hit-color": theme.colors.primary,
    "--docsearch-hit-active-color": theme.colors.onCta,
    "--docsearch-hit-background": theme.colors.secondary,
    "--docsearch-hit-shadow": theme.shadows[100],
    "--docsearch-key-gradient": theme.colors.secondary,
    "--docsearch-key-shadow": theme.shadows[200],
    "--docsearch-footer-height": "44px",
    "--docsearch-footer-background": theme.colors.subtle,
    "--docsearch-footer-shadow": "none",
  },
});

const SearchForm = () => {
  searchGlobalCss();

  return (
    <DocSearch
      appId="O19N5YY9R3"
      indexName="crawler_v1 WPDS Docs Site"
      apiKey={process.env.NEXT_PUBLIC_SEARCH_API_KEY}
    />
  );
};

export default SearchForm;
