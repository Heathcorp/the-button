import {
  Component,
  createEffect,
  createSignal,
  Match,
  Show,
  Switch,
  onCleanup,
} from "solid-js";

import "./components.css";

const Counter: Component<{
  count: number;
  loadingStatus: "LOADED" | "LOADING" | "REFETCHING" | "ERROR" | "UPLOADING";
  frozen: boolean;
}> = (props) => {
  return (
    <div class="counter" classList={{ "counter-frozen": props.frozen }}>
      <Switch>
        <Match when={props.frozen}>
          {"["}
          {props.count}
          {"]"}
        </Match>
        <Match when={props.loadingStatus === "LOADED"}>{props.count}</Match>
        <Match
          when={
            props.loadingStatus === "REFETCHING" ||
            props.loadingStatus === "UPLOADING"
          }
        >
          {/* <Spinner /> */}
          {"~"}
          {props.count}
        </Match>

        <Match when={props.loadingStatus === "LOADING"}>{"Loading..."}</Match>
        <Match when={props.loadingStatus === "ERROR"}>{"Error!"}</Match>
      </Switch>
    </div>
  );
};

export default Counter;

const SPINNER_LOOP_CHARACTERS = ["-", "\\", "|", "/"];
// const SPINNER_LOOP_CHARACTERS = ["-", "+", "|", "+"];
// const SPINNER_LOOP_CHARACTERS = [">", "v", "<", "^"];
const Spinner: Component<{}> = (props) => {
  const [i, setI] = createSignal(0);

  const interval = setInterval(() => {
    setI(
      (prev) =>
        (prev - 1 + SPINNER_LOOP_CHARACTERS.length) %
        SPINNER_LOOP_CHARACTERS.length
    );
  }, 75);

  onCleanup(() => clearInterval(interval));

  return <>{SPINNER_LOOP_CHARACTERS[i()]}</>;
};
