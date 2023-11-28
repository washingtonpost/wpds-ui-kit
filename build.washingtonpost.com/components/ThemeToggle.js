import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { css, theme, Button, Icon } from "@washingtonpost/wpds-ui-kit";
import { Sun, Moon } from "@washingtonpost/wpds-assets";

const hasWindow = () => {
  return typeof window !== "undefined";
};

export const ThemeToggle = (props) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [env, setEnv] = useState("");

  useEffect(() => {
    setEnv(hasWindow() ? "browser" : "server");
  }, []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  const showOnDarkTheme = css({
    display: "none",
    "@dark": {
      display: "block",
    },
  });

  const showOnLightTheme = css({
    display: "none",
    "@light": {
      display: "block",
    },
  });

  return (
    <Button
      css={{
        border: "none",
        paddingBlock: theme.space["025"],
        paddingInline: 0,
        "&:hover": { backgroundColor: "transparent" },
        ...props.css,
      }}
      onClick={toggleTheme}
      aria-label="Switch theme"
      variant="primary"
      icon="center"
      density="compact"
      isOutline
    >
      <span className={showOnDarkTheme()}>
        {env === "browser" && (
          <Icon label="" size="150">
            {resolvedTheme === "light" ? <Moon /> : <Sun />}
          </Icon>
        )}
        {env === "server" && (
          <Icon label="" size="150">
            <Sun />
          </Icon>
        )}
      </span>
      <span className={showOnLightTheme()}>
        {env === "browser" && (
          <Icon label="" size="150">
            {resolvedTheme === "light" ? <Moon /> : <Sun />}
          </Icon>
        )}
        {env === "server" && (
          <Icon label="" size="150">
            <Moon />
          </Icon>
        )}
      </span>
    </Button>
  );
};
