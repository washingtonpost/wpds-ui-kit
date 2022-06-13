import * as React from "react";
import { Avatar as Component } from "./";
import Image from "next/image";

export default {
  title: "Avatar",
  component: Component,
};

const myLoader = ({ src }) => {
  return `${src}`;
};

const DefaultArgs = {
  size: "200",
};

export const Avatar = (args) => (
  <>
    <Component {...args}>
      <img
        src="https://i.pravatar.cc/300"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Component>
    <Component {...args}>
      <Image
        loader={myLoader}
        src="https://i.pravatar.cc/300"
        width="32"
        height="32"
        layout="fixed"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Component>
  </>
);

Avatar.args = { ...DefaultArgs };
