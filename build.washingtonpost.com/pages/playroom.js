import * as React from "react";

export default function Playroom({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Let's play!</p>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Playroom",
    },
  };
}
