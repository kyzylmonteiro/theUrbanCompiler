import React from "react";
import "./App.css";
import CodingEditor from "./CodingEditor";
import DictionarySection from "./DictionarySection";
import FunctionSection from "./FunctionSection";
import Output from "./Output";
import CustomizedDialogs from "./CustomizedDialogs";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: "", outputCode: "", functions: "", fs: "" };
    this.getData = this.getData.bind(this);
    this.getOutputCode = this.getOutputCode.bind(this);
    this.getFunc = this.getFunc.bind(this);
  }
  getData(val) {
    // do not forget to bind getData in constructor
    this.setState({ functions: val });
    // alert(val);
  }
  getOutputCode(val) {
    // do not forget to bind getData in constructor
    this.setState({ outputCode: val });
  }
  getFunc(val) {
    // do not forget to bind getData in constructor
    // this.setState({ f: val });

    // alert(val + "heheheheh");
    this.setState(prevState => ({ fs: [...prevState.fs, val] }));
    // alert(this.state.f);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {" "}
          <CustomizedDialogs />{" "}
        </header>
        <div className="leftSection">
          <div className="outputArea">
            <Output code={this.state.outputCode} fs={this.state.fs} />
          </div>
          <div className="codingArea">
            <div
              style={{ fontSize: "12px", color: "gray", textAlign: "center" }}
            >
              Click on the Info Button! <br />
              Choose a slang and then a code snippet OR type P5js code below
            </div>

            <CodingEditor
              fs={this.state.fs}
              code={this.state.outputCode}
              sendCode={this.getOutputCode}
            />
          </div>
        </div>
        <div className="rightSection">
          <div className="meaningsSection">
            <DictionarySection sendData={this.getData} />
          </div>
          <div className="functionsSection">
            <FunctionSection
              sendFunc={this.getFunc}
              functions={this.state.functions}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
