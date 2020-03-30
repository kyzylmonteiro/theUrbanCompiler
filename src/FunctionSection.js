import React from "react";
import "./functionSection.css";

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
      <div className="dictionarySection">
        <div className="heading">Functions</div>
        {/* {alert(this.props.functions.length)} */}
        {this.props.functions.length >= 1 ? (
          <div className="meaningsDisplay">
            <div className="word">for the selected definition</div>
            {this.props.functions.map(f => {
              return (
                <div
                  className="meaningBlock"
                  onClick={() => this.demoMethod(f)}
                >
                  {f}
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
