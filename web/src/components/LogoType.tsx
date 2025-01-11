import { Component } from "solid-js";

import "./components.css";

const LogoType: Component<{ embed: boolean }> = (props) => {
  return (
    <p classList={{ ["mainLogo"]: true, ["mainLogo_embed"]: props.embed }}>
      THE BUTTON
    </p>
  );
};

export default LogoType;
