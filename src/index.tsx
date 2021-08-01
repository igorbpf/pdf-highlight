import React from "react";
import ReactDOM from "react-dom";

import WebFont from "webfontloader";

import App from "./App";

// Fonts set up
WebFont.load({
  google: {
    families: ["Montserrat:300,400,500,700", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
