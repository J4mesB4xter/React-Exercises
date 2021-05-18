import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams"

const App = () => {
  return React.createElement(
  React.createElement("h1", {}, "Adopt Me!"),
  <SearchParams />
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));