import * as React from "react";

export default function Playroom({ title = "Playroom" }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Let's play!</p>
    </div>
  );
}
