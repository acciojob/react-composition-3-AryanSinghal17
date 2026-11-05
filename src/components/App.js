
import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

const App = () => {

  return (
    <div className="container">

      <h1>React Tooltip Example</h1>

      <Tooltip text="This is a heading tooltip">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="This is a paragraph tooltip">
        <p>Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="This is a button tooltip">
        <button>Hover over this button</button>
      </Tooltip>

      <Tooltip text="This is a link tooltip">
        <a href="#example">Hover over this link</a>
      </Tooltip>

    </div>
  );
};

export default App;
