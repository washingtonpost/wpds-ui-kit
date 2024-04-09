import {
  getCssText,
  globalStyles,
  darkModeGlobalStyles,
  darkTheme,
} from "@washingtonpost/wpds-ui-kit";

const style = document.createElement("style");
style.innerHTML = getCssText();
document.head.appendChild(style);

globalStyles();
darkModeGlobalStyles();

const darkThemeClassName = darkTheme.className;
const toggleBtn = document.getElementById("toggle");
toggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains(darkThemeClassName)) {
    document.body.classList.remove(darkThemeClassName);
  } else {
    document.body.classList.add(darkThemeClassName);
  }
});
