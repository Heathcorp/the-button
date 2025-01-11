import { Component, JSX } from "solid-js";

import "./components.css";
import "./common.css";

const EmbedLogoButton: Component<{
  onClick?: () => void;
  enabled?: boolean;
}> = (props) => {
  return (
    <div
      class="theButton theButton_embed noselect"
      classList={{ "theButton-disabled": !(props.enabled ?? true) }}
      onClick={() => props.onClick?.()}
    >
      <div class="mainLogo_embed">THE BUTTON</div>
    </div>
  );
};

export default EmbedLogoButton;
