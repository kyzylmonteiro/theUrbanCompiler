import React from "react";
import "./functionSection.css";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

class FunctionSection extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { functionList:  };
    this.demoMethod = this.demoMethod.bind(this);
  }
  demoMethod(val) {
    this.props.sendFunc(val);
  }
  render() {
    return (
      <div className="functionSection">
        <InputLabel
          style={{ textAlign: "center", margin: "auto" }}
          id="demo-simple-select-helper-label"
        >
          Code Snippets
        </InputLabel>
        {/* {alert(this.props.functions.length)} */}
        {this.props.functions.length >= 1 ? (
          <div className="meaningsDisplay">
            {this.props.functions.map(f => {
              return (
                <div className="meaningBlock">
                  {f}
                  <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    onClick={() => this.demoMethod(f)}
                    style={{ float: "right", margin: "10px" }}
                  >
                    Add
                  </Button>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default FunctionSection;
