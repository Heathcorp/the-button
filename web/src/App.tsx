import { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";

import "./fonts.css";
import "./index.css";

import FirebaseAppProvider from "./contexts/FirebaseAppProvider";
import MainPage from "./pages/MainPage";

// TODO: REFACTOR THIS
const App: Component<{ embed: boolean }> = (props) => {
  return (
    <FirebaseAppProvider>
      <Router>
        <Routes>
          <Route
            path={["/", "/*"]}
            element={<MainPage embed={props.embed} />}
          />
        </Routes>
      </Router>
    </FirebaseAppProvider>
  );
};

export default App;
