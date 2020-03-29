import React from "react";
import "./App.css";
import CodingEditor from "./CodingEditor";
import DictionarySection from "./DictionarySection";
import FunctionSection from "./FunctionSection";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="leftSection">
        <div className="outputArea"></div>
        <div className="codingArea">
          <div>Coding Editor</div>
          <CodingEditor />
        </div>
      </div>
      <div className="rightSection">
        <div className="meaningsSection">
          <DictionarySection />
        </div>
        <div className="functionsSection">
          <FunctionSection />
        </div>
      </div>
    </div>
  );
}

export default App;
