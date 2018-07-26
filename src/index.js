import React from "react";
import ReactDOM from "react-dom";
import SelectDropdown from "./SelectDropDown";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SelectDropdown />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
