import React from "react";
import { getCssText, globalStyles } from "@washingtonpost/wpds-ui-kit";
import { KitchenSink } from "@washingtonpost/wpds-kitchen-sink";

function App() {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = getCssText();
    document.head.appendChild(style);

    globalStyles();
  }, []);
  return <KitchenSink />;
}

export default App;
